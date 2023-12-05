import { PageObjectModel, EnhancedPageObject } from 'nightwatch';

var Commands = {
    searchAndClick: function (this: FLipkart) {
        return this
            .setValue('@searchInput', ['hodies', this.api.Keys.ENTER])
            .waitForElementVisible('@firstInputResult')
            .click('@firstInputResult')
    },
    aadToCard : function name(this:FLipkart) {
        this.click('@addTocart')
    }
};

const searchPage: PageObjectModel = {
    url: "https://www.flipkart.com/",
    commands: [Commands],
    elements: {
        searchInput: '.Pke_EE:nth-of-type(1)',
        firstInputResult: '._3ywSr_',
        addTocart:'._1KOMV2'
    },
};


export default searchPage;

export interface FLipkart
    extends EnhancedPageObject<typeof Commands,
        typeof searchPage.elements> { }
