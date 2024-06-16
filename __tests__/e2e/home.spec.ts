import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should url is /', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveURL('/')
  })
})