package com.spriteCloud.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:test-results/cucumber.json",
                "html:test-results/default-html-reports",
                "rerun:test-results/rerun.txt"},
        features = "src/test/resources/features",
        glue = "com/spriteCloud/stepDefinitions",
        dryRun = false,
        tags = "@ui or @api"
)
public class CukesRunner {
}
