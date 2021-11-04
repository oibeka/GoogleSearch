package com.google.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = "json:target/cucumber.json",
        features ="src/test/resources/Sanity/",
        glue = "com/google/step_definitions"
        ,tags = "@Smoke"
 ,dryRun = false )

public class SmokeRunner {
}
