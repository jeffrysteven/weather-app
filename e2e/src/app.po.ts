import {
  browser,
  by,
  element,
  ElementArrayFinder,
  ElementFinder,
} from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async navigateToForecast(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}/3117735`);
  }

  getElementBySelector(elementSelector: string): ElementFinder {
    return element(by.css(`[data-ui="${elementSelector}"]`));
  }

  getCityCards(): ElementArrayFinder {
    return element.all(by.css(`[data-ui="city-card"]`));
  }
}
