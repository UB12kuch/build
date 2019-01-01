
let webdriver = require('selenium-webdriver'),
By = webdriver.By;
until = webdriver.until;

let driver;
let assert = require('assert');

driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
var chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', chromeOptions);
var chromeOptions = {
'args': ['--start-fullscreen']
};

driver.get('http://www.google.com')
.then(search);

 function search(){
    var search= driver.wait(until.elementLocated(By.name("q")),5000);
    search.sendKeys("buildcircle");//.then(function(){
    // console.log(driver);
      search.sendKeys(webdriver.Key.ENTER).then(function(){
        console.log('then fired.....');
        var buildCircleLink = driver.wait(until.elementLocated(By.xpath("//a[@href='https://buildcircle.co.uk/']"))); ///h3[contains(text(),'Build Circle :Software Engineering')]")),8000);
       // buildCircleLink.click();
        buildCircleLink.getText().then(function(eventText){
          console.log(eventText);
          assert(eventText.indexOf('Build Circle: Software Engineering') != -1);//  === 'London API: Microservices architecture with .Net');
       });
      });

  }
    

    //driver.getTitle().then(function(){
    //assert(title ==='Build Circle :Software Engineering');
    //console.log('title');
    //});

 


