# pcfAppInsights
A pcf control to send telemetry from PowerApps to Application Insights

**Installation**

Download the solution file from the github repository https://github.com/jenschristianschroder/pcfAppInsights/releases/tag/v0.0.1

Import the solution file into your environment.



 

**Setup**
1. In your Canvas App open the Insert menu, click Components and select Import components.

2. Click Code (experimental) and wait for the list to refresh.

3. Select the pcfAppInsights component and click Import.

4. Insert the pcfAppInsights component on the screens you want to track.

5. Select the pcfAppInsights and open the advanced properties.

 

Set the following properties:

1. Instrumentation Key: this is the intrumentation key found in the overview page of your Azure Application Insights instance

2. Track Screen View: set this to the name of you screen. Suggest to use Parent.Name

3. Once you have configured the ApplicationInsightsControl component you can set its visibility to false to hide it in your UI.

 
 

**Track Screen Views**

Once configured, Screen Views are tracked in Azure Application Insights automatically every time a screen loads.


