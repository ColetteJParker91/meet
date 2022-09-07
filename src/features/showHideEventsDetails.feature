Feature: Show/hide event details

 Scenario: An event element is collapsed by default
        Given: Main page is opened 
        When: Featured city is viewed by the user
        Then: The featured city’s current events will be collapsed from the user

    Scenario: User can expand an event to see its details
      Given: Events button is clicked on by the user 
      When: Specific event is selected by the user
      Then: The details of that event will be listed for viewing by the user


    Scenario: User can collapse an event to hide its details
        Given: The event element is opened by the user 
        When: The event element is closed by the user 
        Then: The details are hidden     