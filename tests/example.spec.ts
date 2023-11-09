import { test, expect } from "../myTest";

export const countries = [
  { language: "da", country: "dk" },
  { language: "de", country: "at" },
  { language: "de", country: "ch" },
  { language: "de", country: "de" },
  { language: "en", country: "au" },
  { language: "en", country: "ca" },
  { language: "en", country: "hk" },
  { language: "en", country: "ie" },
  { language: "en", country: "in" },
  { language: "en", country: "my" },
  { language: "en", country: "nz" },
  { language: "en", country: "sg" },
  { language: "en", country: "uk" },
  { language: "en", country: "us" },
  { language: "es", country: "es" },
  { language: "fr", country: "be" },
  { language: "fr", country: "ca" },
  { language: "fr", country: "ch" },
  { language: "fr", country: "fr" },
  { language: "it", country: "it" },
  { language: "ja", country: "jp" },
  { language: "ko", country: "kr" },
  { language: "nl", country: "be" },
  { language: "nl", country: "nl" },
  { language: "no", country: "no" },
  { language: "pl", country: "pl" },
  { language: "sv", country: "se" },
  { language: "zh", country: "cn" },
  { language: "zh", country: "hk" },
  { language: "zh", country: "tw" },
];

export var currentCountry: { language: string; country: string };

test.describe("Example test suite", () => {
  for (const country of countries) {
    test.use({
      locale: `${country.language}-${country.country}`,
      countryOption: { language: country.language, country: country.country },
    });
    test(`get started link for ${country.language}-${country.country}`, async ({
      page,
      myPage,
    }) => {
      currentCountry = country;
      console.log(`Testing ${country.language}-${country.country}`);
      myPage.verifyLocale();

      await page.goto("https://playwright.dev/");

      // Click the get started link.
      await page.getByRole("link", { name: "Get started" }).click();

      // Expects page to have a heading with the name of Installation.
      await expect(
        page.getByRole("heading", { name: "Installation" })
      ).toBeVisible();
    });
  }
});
