import { PageObjectModel, EnhancedPageObject } from 'nightwatch';

var loginCommands = {
    searchAndClick: function (this: AmazoneLogin) {
        return this
            .setValue('@searchInput', ['nashtechglobal', this.api.Keys.ENTER])
            .waitForElementNotVisible('@firstInputResult')
            .click('@firstInputResult')
    }
};

const searchPage: PageObjectModel = {
    url: "https://www.google.com/",
    commands: [loginCommands],
    elements: {
        searchInput: '#APjFqb',
        firstInputResult: '.LC20lb.MBeuO.DKV0Md',
    },
};


export default searchPage;

export interface AmazoneLogin
    extends EnhancedPageObject<typeof loginCommands,
        typeof searchPage.elements> { }
