$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Factoriel.feature");
formatter.feature({
  "name": "Factoriel",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify to any digit factoriel",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.Factorial.user_is_on_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should write \"8\" on the number area",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.Factorial.user_should_write_on_the_number_area(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click  the Calculate button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Factorial.user_should_click_the_Calculate_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see factoriel of \"The factorial of 8 is: 40320\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.Factorial.user_should_see_factoriel_of(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[The factorial of 8 is: 40320]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat StepDefs.Factorial.user_should_see_factoriel_of(Factorial.java:39)\r\n\tat ✽.user should see factoriel of \"The factorial of 8 is: 40320\"(file:///C:/Users/THINK%20PAD/IdeaProjects/PubinnoTask/src/test/resources/Features/Factoriel.feature:7)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});