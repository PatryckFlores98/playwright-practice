import { test, expect } from '@playwright/test';
import { automationPage } from '../pages/home.page';


test.beforeEach(async ({ page }) => {
  const automationpage = new automationPage(page);
  await automationpage.goto();
});

test('opening home page', async ({ page }) => {
  const automationpage = new automationPage(page);
  await expect(automationpage.headerText).toBeVisible();
});

test('filling first form', async ({ page }) => {
  const automationpage = new automationPage(page);
  await automationpage.nameField.fill("teste1");
  await automationpage.contactMessageField.fill("teste2");
  await automationpage.submitButton.click();
  await expect(automationpage.confirmMessage).toHaveText('Thanks for contacting us')

});

test('filling second form - expected failure', async ({ page }) => {
  const automationpage = new automationPage(page);
  await automationpage.nameField2.fill("teste1");
  await automationpage.contactMessageField2.fill("teste2");
  await automationpage.submitButton2.click();
  await expect(automationpage.confirmMessage).toHaveText('Thanks for contacting us')
});

