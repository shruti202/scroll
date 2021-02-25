describe('mesbro homepage', function() {
    it('should greet the named user', async function() {
      // Load the mesbro login page homepage.
    await  browser.sleep(2000);
    await  browser.manage().window().setSize(1750, 1000);
     
       
   
    await browser.driver.get('https://mesbro.in/home');
    await browser.sleep(1000);



    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization=true  
    await  browser.sleep(2000);
//username & password 
    element(By.css(".header-elements .bg-orange")).click();
    browser.sleep(4000);
    function fullName(formControl, value, sleepTime) {
        describe("My username and password", function(){
            element(by.css(`input[formControlName=${formControl}]`)).sendKeys(value);
            browser.sleep(sleepTime);
        })    
    }
    fullName('username', 'priyanka14', 2000);
    fullName('password', '123456789', 2000);

   function signinButton(signin, sleepTime){
       describe("login",function(){
           element(by.css(`${signin}`)).click();
           browser.sleep(sleepTime);
       })
   }
   signinButton('.bg-orange',5000);

  
   await browser.driver.get('https://mesbro.in/search/business/product/landing');
   await browser.sleep(5000);


  // browser.actions().sendKeys(protractor.Key.END).perform();

   //await browser.sleep(3000);
  
   sgpt.scroll.scrollTo("...");

 

    });
});
