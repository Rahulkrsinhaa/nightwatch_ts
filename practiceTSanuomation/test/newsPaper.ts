import { Nightwatch, NightwatchBrowser } from "nightwatch";
import { AmazoneLogin } from '../page-object/amazonLoginPage';
import { NewsPaper } from '../page-object/newsPaper';
import { FLipkart } from '../page-object/Flipkart'
import { Nash } from '../page-object/nashTechGlobal'

describe('My test suit', () => {
    it('flip kart first test', (browser: NightwatchBrowser) => {
        const flipkarTest = browser.page.Flipkart() as FLipkart;
        browser
            .window.maximize()
        flipkarTest
            .navigate()
            .searchAndClick()
    });
    it('switch tab in flipkart', (browser: NightwatchBrowser) => {
        const flipkarTest = browser.page.Flipkart() as FLipkart;
        browser
            .window.maximize()
        flipkarTest
            .navigate()
            .searchAndClick()
        browser
            .window.getAllHandles(function (result: any) {
                var newHandle = result.value[1];
                this.window.switch(newHandle);
            })
    });
    it('add to cart', (browser: NightwatchBrowser) => {
        const flipkarTest = browser.page.Flipkart() as FLipkart;
        browser
            .window.maximize()
        flipkarTest
            .navigate()
            .searchAndClick()
        browser
            .window.getAllHandles(function (result: any) {
                var newHandle = result.value[1];
                this.window.switch(newHandle);
            })
        flipkarTest
            .aadToCard();

    });

    it('first news test case', (browser: NightwatchBrowser) => {
        browser.window.maximize()
        const newsPage = browser.page.newsPaper() as NewsPaper;
        newsPage
            .navigate()
            .openNewsPage()

    });
    it('news papaer second test case', (browser: NightwatchBrowser) => {
        browser.window.maximize()
        const newsPage = browser.page.newsPaper() as NewsPaper;
        newsPage
            .navigate()
            .openIndiaPage()
    });

    it('Amazone 1St test case', (browser: NightwatchBrowser) => {
        const amazonePage = browser.page.amazonLoginPage() as AmazoneLogin;
        browser
            .window.maximize()
        amazonePage
            .navigate()
            .searchAndClick();
    });
    it('anshtech global', () => {
        const amazonePage = browser.page.nashTechGlobal() as Nash;
        browser
            .window.maximize()
        amazonePage
            .navigate()
            .searchAndClick();
    });

    afterEach((browser: NightwatchBrowser) => {
        browser.end()
    });

});