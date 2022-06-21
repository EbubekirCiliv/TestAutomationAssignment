package com.spriteCloud.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:test-results/failed-html-report"},
        features = "@test-results/rerun.txt",
        glue = "com/spriteCloud/stepDefinitions"
)
public class FailedTestRunner {
}
