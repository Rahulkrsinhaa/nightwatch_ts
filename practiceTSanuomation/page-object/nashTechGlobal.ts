import { PageObjectModel, EnhancedPageObject } from 'nightwatch';

var Commands = {
    searchAndClick: function (this: Nash) {
        return this
            .setValue('@searchInput', ['nashtexhGlobal', this.api.Keys.ENTER])
            .waitForElementVisible('@firstInputResult')
            .click('@firstInputResult')
    },
   
};

const searchPage: PageObjectModel = {
    url: "https://www.google.co.in/",
    commands: [Commands],
    elements: {
        searchInput: '#APjFqb',
        firstInputResult: '.yuRUbf:nth-of-type(1)',
    },
};


export default searchPage;

export interface Nash
    extends EnhancedPageObject<typeof Commands,
        typeof searchPage.elements> { }
