const { Given, When, Then } = require('@cucumber/cucumber');
const loginPage = require('../page_objects/login');
const homePage = require('../page_objects/home');
const { expect, $ } = require('@wdio/globals');

// Navigate to the app login page
Given(/^I am on app login Page$/, async () => {
    await homePage.navigateLoginPage();
});

// Perform login action
 When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
   await loginPage.loginAction(username, password);
 });

//verify Locked outcome
Then(/^I see locked error message$/, async () => {
  await expect(loginPage.genericError).toHaveText("Sorry, this user has been locked out.");
});

//verify NoMatch outcome
Then(/^I see do not match error message$/, async () => {
  await expect(loginPage.genericError).toHaveText("Provided credentials do not match any user in this service.");
});

//verify No username outcome
Then(/^I see username required error message$/, async () => {
  await expect(loginPage.usernameError).toHaveText("Username is required");
});

//verify No password outcome
Then(/^I see password required error message$/, async () => {
  await expect(loginPage.passwordError).toHaveText("Password is required");
});

//verify valid outcome
Then(/^I see products page$/, async () => {
  await expect(loginPage.productPage).toHaveText("Products");
});
