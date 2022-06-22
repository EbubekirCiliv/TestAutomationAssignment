$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Click.feature");
formatter.feature({
  "name": "Click",
  "description": "  US: As a user, I should able to click",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ui"
    }
  ]
});
formatter.scenario({
  "name": "Verify that the user able to click the button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ui"
    },
    {
      "name": "@click"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.ClickStepDefinition.the_user_is_on_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the \"Click\" headline",
  "keyword": "When "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.ClickStepDefinition.the_user_clicks_on_the_headline(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the window title contains \"Click\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.ClickStepDefinition.the_window_title_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the following headlines",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.ClickStepDefinition.the_user_should_see_the_following_headlines(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the button is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.ClickStepDefinition.the_button_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the button",
  "keyword": "When "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.ClickStepDefinition.the_user_clicks_on_the_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the green button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.ClickStepDefinition.the_user_should_see_the_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Pet.feature");
formatter.feature({
  "name": "Pet",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.scenario({
  "name": "Get request for pet endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@pet"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the endpoint is \"pet/1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.BaseAPIStepDefinition.the_endpoint_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send GET Request",
  "keyword": "When "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.BaseAPIStepDefinition.i_send_GET_Request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.BaseAPIStepDefinition.the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response body is the following",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.PetStepDefinitions.the_response_body_is_the_following(java.util.List\u003cjava.util.Map\u003cjava.lang.String, java.lang.Object\u003e\u003e)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[good boy (don\u0027t delete pls)]\u003e but was:\u003c[haha]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.spriteCloud.stepDefinitions.PetStepDefinitions.the_response_body_is_the_following(PetStepDefinitions.java:22)\r\n\tat ✽.the response body is the following(file:///C:/Users/Windows%2010/eclipse-workspace/TestAutomationAssignment/src/test/resources/features/Pet.feature:10)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/SampleApp.feature");
formatter.feature({
  "name": "Sample App",
  "description": "  US: As a user, I should able to login",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ui"
    }
  ]
});
formatter.scenario({
  "name": "Verify that the user able to login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ui"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.ClickStepDefinition.the_user_is_on_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the \"Sample App\" headline",
  "keyword": "When "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.ClickStepDefinition.the_user_clicks_on_the_headline(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the window title contains \"Sample App\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.ClickStepDefinition.the_window_title_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the following credentials",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.SampleAppStepDefinition.the_user_enters_the_following_credentials(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.SampleAppStepDefinition.the_user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see \"Welcome\" as a success notification",
  "keyword": "Then "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.SampleAppStepDefinition.the_user_should_see_as_a_success_notification(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Store.feature");
formatter.feature({
  "name": "Store",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.scenario({
  "name": "Post request for Store Order",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@store"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the endpoint is \"store/order\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.BaseAPIStepDefinition.the_endpoint_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the request body for post store order following",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.StoreStepDefinitions.the_request_body_for_post_store_order_following(java.util.List\u003cjava.util.Map\u003cjava.lang.String, java.lang.Object\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST request",
  "keyword": "When "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.BaseAPIStepDefinition.i_send_POST_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.BaseAPIStepDefinition.the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response body for post store order following",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.StoreStepDefinitions.the_response_body_for_post_store_order_following(java.util.List\u003cjava.util.Map\u003cjava.lang.String, java.lang.Object\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/User.feature");
formatter.feature({
  "name": "User",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.scenario({
  "name": "Post request for user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@user"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the endpoint is \"user\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.BaseAPIStepDefinition.the_endpoint_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the request body for post user following",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.UserStepDefinition.the_request_body_for_post_user_following(java.util.List\u003cjava.util.Map\u003cjava.lang.String, java.lang.Object\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST request",
  "keyword": "When "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.BaseAPIStepDefinition.i_send_POST_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.BaseAPIStepDefinition.the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response body of user post request following",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.UserStepDefinition.the_response_body_of_user_post_request_following(java.util.List\u003cjava.util.Map\u003cjava.lang.String, java.lang.Object\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/VerifyText.feature");
formatter.feature({
  "name": "Verify Text",
  "description": "  US: As a user, I should able to find text",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ui"
    }
  ]
});
formatter.scenario({
  "name": "Verify that the user able to find an element by displayed text has nuances",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ui"
    },
    {
      "name": "@verifyText"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.ClickStepDefinition.the_user_is_on_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the \"Verify Text\" headline",
  "keyword": "When "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.ClickStepDefinition.the_user_clicks_on_the_headline(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the window title contains \"Verify Text\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.ClickStepDefinition.the_window_title_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the all \"Welcome\" text in the page",
  "keyword": "And "
});
formatter.match({
  "location": "com.spriteCloud.stepDefinitions.VerifyTextStepDefinition.the_user_should_see_the_all_text_in_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});