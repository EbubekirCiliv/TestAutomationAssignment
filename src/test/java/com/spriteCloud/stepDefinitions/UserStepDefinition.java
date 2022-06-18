package com.spriteCloud.stepDefinitions;

import io.cucumber.java.en.*;
import io.restassured.path.json.JsonPath;
import org.junit.Assert;
import java.util.List;
import java.util.Map;

import static com.spriteCloud.stepDefinitions.BaseAPIStepDefinition.requestBodyMap;
import static com.spriteCloud.stepDefinitions.BaseAPIStepDefinition.response;

public class UserStepDefinition {


    @Given("the request body for post user following")
    public void the_request_body_for_post_user_following(List<Map<String,Object>> data) {

        Map<String, Object> requestBody = data.get(0);

        requestBodyMap.put("id", requestBody.get("id"));
        requestBodyMap.put("username", requestBody.get("username"));
        requestBodyMap.put("firstName", requestBody.get("firstName"));
        requestBodyMap.put("lastName", requestBody.get("lastName"));
        requestBodyMap.put("email", requestBody.get("email"));
        requestBodyMap.put("password", requestBody.get("password"));
        requestBodyMap.put("phone", requestBody.get("phone"));
        requestBodyMap.put("userStatus", requestBody.get("userStatus"));


    }


    @Then("the response body of user post request following")
    public void the_response_body_of_user_post_request_following(List<Map<String,Object>> data) {

        Map<String, Object> expectedBody = data.get(0);

        JsonPath jsonPath = response.jsonPath();

        Assert.assertEquals(expectedBody.get("code"), jsonPath.getString("code"));
        Assert.assertEquals(expectedBody.get("type"), jsonPath.getString("type"));
        Assert.assertEquals(expectedBody.get("message"), jsonPath.getString("message"));

    }

}
