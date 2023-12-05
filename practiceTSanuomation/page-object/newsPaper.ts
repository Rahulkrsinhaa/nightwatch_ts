import { PageObjectModel, EnhancedPageObject, NightwatchBrowser } from 'nightwatch';

var newPaperCommands = {

    openNewsPage: function (this: NewsPaper) {
        return this
        .assert.urlContains('indiatimes')
        .waitForElementVisible('@videoButton',6000) 
        .click('@videoButton')
    },
    openIndiaPage:function name(this: NewsPaper) {
        return this
        .waitForElementVisible('@videoButton',6000) 
        .click('@indiaPage')
    },
    
};  

const newsPAge: PageObjectModel = {
    url: "https://timesofindia.indiatimes.com/",
    commands: [newPaperCommands],
    elements: {
    videoButton: "a[aria-label='Videos']",
    indiaPage:"a[aria-label='India']"
    },
};


export default newsPAge;

export interface NewsPaper
    extends EnhancedPageObject<typeof newPaperCommands,
        typeof newsPAge.elements> {
}
