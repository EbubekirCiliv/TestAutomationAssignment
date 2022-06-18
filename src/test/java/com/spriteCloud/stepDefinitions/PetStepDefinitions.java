package com.spriteCloud.stepDefinitions;

import io.cucumber.java.en.*;
import io.restassured.path.json.JsonPath;
import org.junit.Assert;
import java.util.List;
import java.util.Map;

import static com.spriteCloud.stepDefinitions.BaseAPIStepDefinition.response;


public class PetStepDefinitions {

    @Then("the response body is the following")
    public void the_response_body_is_the_following(List<Map<String,Object>> data) {

        Map<String,Object> expected = data.get(0);

        JsonPath jsonPath = response.jsonPath();

        Assert.assertEquals(expected.get("id"),jsonPath.getString("id"));
        Assert.assertEquals(expected.get("name"),jsonPath.getString("name"));
        Assert.assertEquals(expected.get("status"),jsonPath.getString("status"));



    }



}
