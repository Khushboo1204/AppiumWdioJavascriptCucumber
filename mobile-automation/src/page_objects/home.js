class home {
  
  get menuBar() {return $('~open menu')};
  get logInOption() { return $('~menu item log in') };

    async navigateLoginPage(){
    await this.menuBar.click();
    await this.logInOption.click();
  }
}
module.exports = new home();
