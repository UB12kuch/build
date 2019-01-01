
let webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until,
  assert= require('assert'),
  {describe, it,after} = require('selenium-webdriver/testing');
  let driver;


describe('testSuite: search for Buildcircle is listed in google search',function(){ 
  this.timeout(50000);
 //Starts chrome browser with full screen capability
  it('testCase1: should navigate to the chrome browser',function() {
    var chromeCapabilities = webdriver.Capabilities.chrome();
    var chromeOptions = {
      'args': ['--start-fullscreen']
      };
    chromeCapabilities.set('chromeOptions', chromeOptions);
    driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();
  });
  // Navigates browser to google page and searches for buildcircle
  it('testCase2 : Should navigate to goole page and search for buildcircle ',function(){
    driver.get('http://www.google.com').then(search);
    var search= driver.wait(until.elementLocated(By.name("q")),5000);
    search.sendKeys("buildcircle");
    search.sendKeys(webdriver.Key.ENTER);
  });
 // Finds buildcircle link, and asserts the Text 
  it('testCase3: should check buidcircle software engineering is presented in search result',function(){
    var buildCircleLink =  driver.wait(until.elementLocated(By.xpath("//a[@href='https://buildcircle.co.uk/']")),5000,'could not locate build circle');
    buildCircleLink.getText().then(function(result){
      assert(result.indexOf('Build Circle: Software Engineering') != -1);
    });
  });
});
//at the end waits for 2 seconds and closes the browser
after(function(){
     setTimeout(function(){
      console.log('quitting browser....');
      driver.quit();
     },2000);
});