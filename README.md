# webdriver_allure_tests

## SUMMARY
This is the repo of test cases for the saucedemo.com website, including cases for the register and login, sorting, cart and checkout functionality, automated with the webdriver framework and using the allure as reporter and github actions for CI/CD. 

## REQUIREMENTS
- Node.js v20.14.10 or higher
- wdio/allure-reporter v9.0.4 or higher
- wdio/cli v8.38.2 or higher
- wdio/local-runner v8.38.2 or higher
- wdio/mocha-framework v8.38.2 or higher
- webdriverio v8.38.2 or higher
- dotenv v16.4.5 or higher
- Faker.js v8.4.1 or higher

## Steps to Install
### 1. Clone the repository
`git clone https://github.com/styrkink/webdriver-allure.git
cd your-repo`
### 2. Install dependencies
`npm install`


## Steps to Launch
### 1. Run all tests in prod evnironment 
`npm run test:prod`
### 2. Run all tests in dev evnironment 
`npm run test:dev`
### 3. Run all tests in stage evnironment 
`npm run test:stage`
### 4. Run specific test file in specific environment
`npm run test:"specific-environment":"specific-file"`


## Steps to view the report
### 1. Run your tests with any command
### 2. Generate report
`npm run report`