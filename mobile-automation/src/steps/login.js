const { Given, When, Then } = require('@cucumber/cucumber');
const loginPage = require('../page_objects/login');
const homePage = require('../page_objects/home');
const { expect, $ } = require('@wdio/globals');

// Navigate to the app login page
Given(/^I am on app login Page$/, async () => {
    await homePage.navigateLoginPage();
});

// Perform login action
When(/^I login with (.*) and (.*)$/, async (username, password) => {
  await loginPage.loginAction(username, password);
});


// Verify the invalid outcome
Then(/^I should see (.*) for (.*)$/, async(outcome, user) => {
const expectations = {
  "LOCKED": () => expect(loginPage.genericError).toHaveText(outcome),
  "NO_MATCH": () => expect(loginPage.genericError).toHaveText(outcome),
  "NO_USERNAME": () => expect(loginPage.usernameError).toHaveText(outcome),
  "NO_PASSWORD": () => expect(loginPage.passwordError).toHaveText(outcome)
};
return (expectations[user] || (() => Promise.resolve()))();

});

//verify valid outcome
Then(/^I see Product page$/, async () => {
  await expect(loginPage.productPage).toHaveText("Products");
});

