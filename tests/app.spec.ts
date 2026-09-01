import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

const viewports = [
  { height: 900, name: 'desktop', width: 1400 },
  { height: 568, name: 'mobile', width: 320 },
];

const expectNoA11yViolations = async (page: Page) => {
  const results = await new AxeBuilder({ page }).analyze();
  const violations = results.violations.map(({ id, impact, help }) => `${impact}: ${id} - ${help}`);

  expect(violations, violations.join('\n')).toEqual([]);
};

const expectNoHorizontalOverflow = async (page: Page) => {
  const widths = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  expect(widths.scrollWidth).toBeLessThanOrEqual(widths.clientWidth);
};

for (const viewport of viewports) {
  test(`has no detectable a11y violations on ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ height: viewport.height, width: viewport.width });
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Technology Education Focus' })).toBeVisible();
    await expectNoHorizontalOverflow(page);
    await expectNoA11yViolations(page);
  });
}

test('opens and closes project details with React state', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Open rebasic details' }).click();

  const dialog = page.getByRole('dialog', { name: 'rebasic' });
  await expect(dialog).toBeVisible();
  await expectNoHorizontalOverflow(page);
  await expect(page.getByRole('link', { name: 'https://github.com/lpmi-13/rebasic' })).toBeVisible();

  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
});

test('provides descriptive alt text for every image', async ({ page }) => {
  await page.goto('/');

  const altTexts = await page.locator('img').evaluateAll((images) => (
    images.map((image) => image.getAttribute('alt')?.trim() ?? '')
  ));

  expect(altTexts.length).toBeGreaterThan(0);
  expect(altTexts.filter((altText) => altText.length < 10)).toEqual([]);
  expect(altTexts).not.toContain('avatar');
  expect(altTexts).not.toContain('current ideas');
  expect(altTexts).not.toContain('presentations');

  await page.getByRole('button', { name: 'Open project ideas details' }).click();
  await expect(page.getByRole('dialog', { name: 'Project Ideas' }).getByRole('img', {
    name: 'Black outline of a glowing light bulb',
  })).toBeVisible();
  await page.keyboard.press('Escape');

  await page.getByRole('button', { name: 'Open presentations details' }).click();
  await expect(page.getByRole('dialog', { name: 'Talks' }).getByRole('img', {
    name: 'Black handheld microphone inside a white circle',
  })).toBeVisible();
});

test('lists new projects in their intended sections', async ({ page }) => {
  await page.goto('/');

  const technologySection = page.locator('#technology');
  await expect(technologySection.getByRole('heading', { name: 'use-tool' })).toBeVisible();
  await expect(technologySection.getByRole('heading', { name: 'use-practice' })).toBeVisible();
  await expect(technologySection.getByRole('heading', { name: 'OSI Viz' })).toBeVisible();
  await expect(technologySection.getByRole('heading', { name: 'ports ≠ sockets' })).toBeVisible();

  const languageSection = page.locator('#language');
  await expect(languageSection.getByRole('heading', { name: 'Rhyme Match' })).toBeVisible();
  await expect(languageSection.getByRole('heading', { name: 'Thai phrase tones' })).toBeVisible();
  await expect(languageSection.getByRole('heading', { name: 'Thai word slice' })).toBeVisible();
  await expect(languageSection.getByRole('heading', { name: 'stress maze' })).toBeVisible();
});

test('presents the revamped Rhyme Match game with current project links', async ({ page }) => {
  await page.goto('/');

  const languageSection = page.locator('#language');
  const rhymeMatchItem = languageSection.locator('.portfolio-item').first();
  await expect(rhymeMatchItem.getByRole('heading', { name: 'Rhyme Match' })).toBeVisible();
  await expect(rhymeMatchItem.getByRole('img', {
    name: 'Rhyme Match gameplay showing matched, missed, and unchecked word cards',
  }))
    .toHaveAttribute('src', /rhyme-match/);

  await rhymeMatchItem.getByRole('button', { name: 'Open Rhyme Match details' }).click();

  const dialog = page.getByRole('dialog', { name: 'Rhyme Match' });
  await expect(dialog).toContainText('same final stressed sound');
  await expect(dialog.getByRole('link', {
    name: 'https://github.com/lpmi-13/rhyme-match-game',
  })).toHaveAttribute('href', 'https://github.com/lpmi-13/rhyme-match-game');
  await expect(dialog.getByRole('link', {
    name: 'https://rhyme-match-game.netlify.app',
  })).toHaveAttribute('href', 'https://rhyme-match-game.netlify.app');
});

test('places the newest portfolio additions at the end of the technology grid', async ({ page }) => {
  await page.goto('/');

  const projectNames = await page.locator('#technology .portfolio-item h3').allTextContents();
  expect(projectNames.slice(-4)).toEqual([
    'OSI Viz',
    'ports ≠ sockets',
    'use-tool',
    'use-practice',
  ]);
});

test('describes how fast am I as a static TypeScript app', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Open how fast am I? details' }).click();

  const dialog = page.getByRole('dialog', { name: 'how fast am I?' });
  await expect(dialog).toContainText('TypeScript + Vite + Wikipedia ingestion + d3-geo');
  await expect(dialog).toContainText('interactive map');
});

test('updated projects link to their current live sites', async ({ page }) => {
  await page.goto('/');

  const updatedProjects = [
    { name: 'sentence factory', url: 'https://sentencefactory.netlify.app' },
    { name: 'Touchwords', url: 'https://touchwords.netlify.app' },
    { name: 'A(n)Writing', url: 'https://anwriting.netlify.app' },
    { name: 'A(n)Redd', url: 'https://anredd.netlify.app' },
    { name: 'A(n)Tweet', url: 'https://antweet.netlify.app' },
  ];

  for (const project of updatedProjects) {
    await page.getByRole('button', { name: `Open ${project.name} details` }).click();

    const dialog = page.getByRole('dialog', { name: project.name });
    const liveLink = dialog.getByRole('link', { name: project.url });
    await expect(liveLink).toHaveAttribute('href', project.url);

    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
  }
});

test('new USE projects expose their repository and playground links', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Open use-tool details' }).click();
  const toolDialog = page.getByRole('dialog', { name: 'use-tool' });
  await expect(toolDialog.getByRole('link', { name: 'https://github.com/lpmi-13/use-tool' }))
    .toHaveAttribute('href', 'https://github.com/lpmi-13/use-tool');
  await page.keyboard.press('Escape');

  await page.getByRole('button', { name: 'Open use-practice details' }).click();
  const practiceDialog = page.getByRole('dialog', { name: 'use-practice' });
  await expect(practiceDialog.getByRole('link', { name: 'https://github.com/lpmi-13/use-practice' }))
    .toHaveAttribute('href', 'https://github.com/lpmi-13/use-practice');
  const playgroundUrl = 'https://labs.iximiuz.com/playgrounds/use-practice-4ce4816f';
  await expect(practiceDialog.getByRole('link', { name: playgroundUrl }))
    .toHaveAttribute('href', playgroundUrl);
});
