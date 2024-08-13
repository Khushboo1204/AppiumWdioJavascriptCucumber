class login {
  
   get usernameField() { return $('~Username input field'); }
    get passwordField() { return $('~Password input field'); }
    get LoginButton() { return $('~Login button'); }

    //getText validation
    get genericError(){return $('//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView')};
    get usernameError(){return $('//android.view.ViewGroup[@content-desc="Username-error-message"]/android.widget.TextView')};
    get passwordError(){return $('//android.view.ViewGroup[@content-desc="Password-error-message"]/android.widget.TextView')};
    get productPage() { return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')}; 

    
    async loginAction(username, password) {
      await this.usernameField.setValue(username);
      await this.passwordField.setValue(password);
      await this.LoginButton.click();
    }
}
  module.exports = new login();
  