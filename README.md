#Meet up
<br></br>
Description This app provides a list of upcoming events for any specified city. Data provided by Google Calendar. The app also works offline using cached data from the last time it was used online. The user can serach for events in a specific city or browse all events, customize how many events are shown on screen, click an event for more details, and see how many events are upcoming in certain cities.
<br></br>
User stories
FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
Scenario 1: An event element is collapsed by default Scenario 2: User can expand an event to see its details Scenario 3: User can collapse an event to hide its details
Scenario 1: Given: Main page is opened When: Featured city is viewed by the user Then: The featured city’s current events will be collapsed from the user
Scenario 2: Given: Events button is clicked on by the user When: Specific event is selected by the user Then: The details of that event will be listed for viewing by the user
Scenario 3: Given: The event element is opened by the user When: The event element is closed by the user Then: The details are hidden
User story As a user, I should be able to view events and then hide them. So that I can easily look through the options that are available in the specified city.
FEATURE 3: SPECIFY NUMBER OF EVENTS
Scenario 1: When user hasn’t specified a number, 32 is the default number Scenario 2: User can change the number of events they want to see
Scenario 1: Given: User searched for event results for a city When: User chooses no specific amount for search results Then: Default amount of search results is therefore 32 per city
Scenario 2: Given: User opened the search results query When: Default number is changed by the user Then: Default number of results will be changed to what was selected
User story As a user, I should be able to choose the default number of events listed. So that I know how many events are taking place.
FEATURE 4: USE THE APP WHEN OFFLINE
Scenario 1: Show cached data when there’s no internet connection Scenario 2: Show error when user changes the settings (city, time range)
Scenario 1: Given: No internet connection on the app When: Data is cached Then: Data can still be shown
Scenario 2: Given: Settings tab opened by user When: User changed the settings Then: Error will show
User Story As a user, I should be able to use the app while offline. So that I can still use my app when the internet is not available.
FEATURE 5: DATA VISUALIZATION
Scenario 1: Show a chart with the number of upcoming events in each city
Scenario 1: Given: User selects a city When: User clicks on the city’s upcoming events Then: Chart will list upcoming events taking place in the specified city
User story: As a user, I should see a list or chart of events taking place. So that I can easily see my options.
