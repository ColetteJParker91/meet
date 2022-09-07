Feature: Specify number of events

    Scenario: When user hasn’t specified a number, 32 is the default number
        Given: User searched for event results for a city
        When: User chooses no specific amount for search results 
        Then: Default amount of search results is therefore 32 per city

    Scenario: User can change the number of events they want to see
        Given: User opened the search results query 
        When: Default number is changed by the user 
        Then: Default number of results will be changed to what was selected  