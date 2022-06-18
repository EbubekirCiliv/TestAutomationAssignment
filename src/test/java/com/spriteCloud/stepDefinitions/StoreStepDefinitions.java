package com.spriteCloud.stepDefinitions;

import io.cucumber.java.en.*;
import io.restassured.path.json.JsonPath;
import org.junit.Assert;
import java.util.List;
import java.util.Map;

import static com.spriteCloud.stepDefinitions.BaseAPIStepDefinition.requestBodyMap;
import static com.spriteCloud.stepDefinitions.BaseAPIStepDefinition.response;


public class StoreStepDefinitions {

    @Given("the request body for post store order following")
    public void the_request_body_for_post_store_order_following(List<Map<String, Object>> data) {
        Map<String, Object> requestBody = data.get(0);

        requestBodyMap.put("id", requestBody.get("id"));
        requestBodyMap.put("petId", requestBody.get("petId"));
        requestBodyMap.put("quantity", requestBody.get("quantity"));
        requestBodyMap.put("shipDate", requestBody.get("shipDate"));
        requestBodyMap.put("status", requestBody.get("status"));
        requestBodyMap.put("complete", requestBody.get("complete"));
    }

    @Then("the response body for post store order following")
    public void the_response_body_for_post_store_order_following(List<Map<String, Object>> data) {

        Map<String, Object> expectedBody = data.get(0);

        JsonPath jsonPath = response.jsonPath();

        Assert.assertEquals(expectedBody.get("id"), jsonPath.getString("id"));
        Assert.assertEquals(expectedBody.get("petId"), jsonPath.getString("petId"));
        Assert.assertEquals(expectedBody.get("status"), jsonPath.getString("status"));

    }
}
