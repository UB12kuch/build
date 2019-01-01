Please follow the steps to run BuildCircle keyword search using Google

Prerequisites 

1. Install Node.js

2. Download the chrome driver[http://chromedriver.chromium.org/downloads], unzip and copy to a folder and set path to the location. ChromeDriver executable needs to be available in the path. Mac users with Homebrew installed: brew install chromedriver

3. Install all the dependencies
   
   npm install
   
4. To run the tests

ps: I didn't install mocha globally, so executing it from local path.

  mocha

It will launch chrome browser and starts test

