import { expect, type Page, type TestInfo } from "@playwright/test";
import { currentCountry } from "./tests/example.spec";

export class MyPage {
  constructor(
    readonly page: Page,
    readonly testInfo: TestInfo,
    readonly locale: string | undefined,
    readonly use: any,
    readonly fixtureCountry: { language: string; country: string }
  ) {
    console.log("myPage constructor. locale is: ", locale);
  }

  verifyLocale() {
    expect
      .soft(this.locale?.toLocaleLowerCase())
      .toBe(
        currentCountry.language.toLocaleLowerCase() +
          "-" +
          currentCountry.country.toLocaleLowerCase()
      );
    expect
      .soft(
        this.fixtureCountry.language.toLocaleLowerCase() +
          "-" +
          this.fixtureCountry.country.toLocaleLowerCase()
      )
      .toBe(
        currentCountry.language.toLocaleLowerCase() +
          "-" +
          currentCountry.country.toLocaleLowerCase()
      );
  }
}
