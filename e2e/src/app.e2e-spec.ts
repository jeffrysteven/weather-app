import {
  browser,
  by,
  ElementFinder,
  logging,
  ExpectedConditions,
} from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should render header', async () => {
    await page.navigateTo();
    expect(page.getElementBySelector('header').isPresent()).toBeTruthy();
    expect(await page.getElementBySelector('header').getText()).toEqual(
      'Weather App'
    );
  });

  it('should render cities container', async () => {
    expect(
      await page.getElementBySelector('cities-list').isDisplayed()
    ).toBeTruthy();
  });

  it('should render 5 cities', async () => {
    const cityNames = ['Madrid', 'Amsterdam', 'Paris', 'London', 'Brussels'];
    const cityCards = await page.getCityCards();
    expect(await cityCards.length).toEqual(5);
    for (let i = 0; i < cityNames.length; i++) {
      const cityName = cityNames[i];
      const cityCard: ElementFinder = await page.getCityCards().get(i);
      expect(
        await cityCard.element(by.css('[data-ui="city-title"]')).getText()
      ).toContain(cityName);
    }
  });

  it('should get city forecast in the forecast page', async () => {
    await page.getCityCards().get(0).click();
    expect(browser.getCurrentUrl()).toContain('/3117735');
    expect(
      page.getElementBySelector('charts-container').isPresent()
    ).toBeTruthy();
    expect(
      page.getElementBySelector('city-winds-chart').isPresent()
    ).toBeTruthy();
    expect(
      page.getElementBySelector('city-winds-temperature').isPresent()
    ).toBeTruthy();
    expect(
      page.getElementBySelector('city-table-forecast').isPresent()
    ).toBeTruthy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
