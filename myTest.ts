import { test as base } from "@playwright/test";
import { MyPage } from "./myPage";

// Declare your options to type-check your configuration.
export type MyOptions = {
  countryOption: { language: string; country: string };
};

// Declare the types of your fixtures.
type MyFixtures = {
  myPage: MyPage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures & MyOptions>({
  // Define an option and provide a default value.
  // We can later override it in the config.
  countryOption: [{ language: `en`, country: `US` }, { option: true }],

  myPage: async ({ page, countryOption }, use, testInfo) => {
    // Set up the fixture.
    const myPage = new MyPage(
      page,
      testInfo,
      testInfo.project.use.locale,
      testInfo.project.use,
      countryOption
    );
    await use(myPage);
  },
});

export { expect } from "@playwright/test";
