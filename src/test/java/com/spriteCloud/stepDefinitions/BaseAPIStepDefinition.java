package com.spriteCloud.stepDefinitions;

import com.spriteCloud.utilities.ConfigurationReader;
import io.cucumber.java.en.*;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class BaseAPIStepDefinition {

    public static String endPoint;
    public static Response response;
    public static Map<String, Object> requestBodyMap = new HashMap<>();
    private String currentURL = ConfigurationReader.get("baseURL_API");

    @Given("the endpoint is {string}")
    public void the_endpoint_is(String end) {
        this.endPoint = currentURL + end;
    }

    @When("I send GET Request")
    public void i_send_GET_Request() {
        this.response = given().accept("application/json").when().get(endPoint);

    }

    @When("I send POST request")
    public void i_send_POST_request() {

        this.response = given().contentType(ContentType.JSON).body(requestBodyMap).when().post(endPoint);

    }
    @Then("the status code is {int}")
    public void the_status_code_is(Integer int1) {
        this.response.then().assertThat().statusCode(int1);

    }



}
