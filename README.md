# Test Automation Assignment

# Codes and Tests Prepared by
Ebubekir Ciliv

# Build Tool
Maven

# Test Framework
BDD Cucumber (with Junit4 Assertions)

# Environment and specs
(UI)  http://www.uitestingplayground.com/  
(API) https://petstore.swagger.io/  

# System Requirements
Java 11 + SDK

# Dependencies
- selenium-java
- webdrivermanager
- cucumber-java
- cucumber-junit
- rest-assured

# Setting Up
These instructions will get you a copy of the project up and running on your local machine.

-Clone the repo:

git clone  https://github.com/EbubekirCiliv/TestAutomationAssignment.git

-Running tests from: 

Go src -> test > java > com > spriteCloud > runners > CukesRunner and RUN
(To run all Scenarios, use "@ui or @api" tag in the CukesRunner class/Cucumber Options)
  
-To generate "HTML Maven Cucumber Report":

Open Maven right side panel Double Click Project's Lifecycle Click "verify"

-Test Reports Locations:

Cucumber HTML Plugin Reports Result -> cucumber-html-reports > overview-steps.html (Right Click and Open in any Browser )

Running test from terminal:

mvn -B verify --file pom.xml

Running tests in CI/CD pipeline:

-In this project I used github actions.(You can have a look at calliope documentation if you want to use other CI/CD tools).

If you want to use same pipeline setup just add following variables defined inside the workflows/maven.yml to your github repository as secret variables.

API_KEY: Required to import tests to Calliope.pro. Can be found on your Calliope.pro account page

PROFILE_ID: Tests will be imported in one of your profiles on Calliope.pro. 

# Test results monitoring tool: Calliope.pro

The link to the results in Calliope.pro:
  
https://app.calliope.pro/reports/134825/public/a872d2af-1699-49f0-a19f-37903d40ba60

# About automated scenarios
- Click       (UI)
- Verify Text (UI)
- Sample App  (UI)
- Get request for pet endpoint (API)
- Post request for user        (API)
- Post request for Store Order (API)
 
As an user and QA in the real life these are common scenarious which are used.Satisfaction of the customer,security,enchancing the development process.
