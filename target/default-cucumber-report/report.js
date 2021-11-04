$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Sanity/Search.feature");
formatter.feature({
  "name": "Sanity Tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "name": "Search Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SanityTests.user_is_on_the_home_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidArgumentException: invalid argument\n  (Session info: chrome\u003d95.0.4638.69)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Oibeks-MBP.lan\u0027, ip: \u0027fe80:0:0:0:1cfa:ab1d:e6d3:b5dc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.69, chrome: {chromedriverVersion: 95.0.4638.54 (d31a821ec901f..., userDataDir: /var/folders/xz/68nt634j0ll...}, goog:chromeOptions: {debuggerAddress: localhost:64247}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c87444a1c9d3a728e929279232a84fe0\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat com.google.step_definitions.SanityTests.user_is_on_the_home_page(SanityTests.java:18)\n\tat ✽.user is on the home page(src/test/resources/Sanity/Search.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "user inputs INTURN keyword in the search field",
  "keyword": "When "
});
formatter.match({
  "location": "SanityTests.user_inputs_INTURN_keyword_in_the_search_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks enter button",
  "keyword": "And "
});
formatter.match({
  "location": "SanityTests.clicks_enter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to see INTURN website",
  "keyword": "Then "
});
formatter.match({
  "location": "SanityTests.user_should_be_able_to_see_INTURN_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});