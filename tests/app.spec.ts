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
