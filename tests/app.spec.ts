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

test('lists new projects in their intended sections', async ({ page }) => {
  await page.goto('/');

  const technologySection = page.locator('#technology');
  await expect(technologySection.getByRole('heading', { name: 'use-tool' })).toBeVisible();
  await expect(technologySection.getByRole('heading', { name: 'use-practice' })).toBeVisible();
  await expect(technologySection.getByRole('heading', { name: 'OSI Viz' })).toBeVisible();
  await expect(technologySection.getByRole('heading', { name: 'ports ≠ sockets' })).toBeVisible();

  const languageSection = page.locator('#language');
  await expect(languageSection.getByRole('heading', { name: 'Thai phrase tones' })).toBeVisible();
  await expect(languageSection.getByRole('heading', { name: 'Thai word slice' })).toBeVisible();
  await expect(languageSection.getByRole('heading', { name: 'stress maze' })).toBeVisible();
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
