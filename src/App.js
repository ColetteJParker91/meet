import React, { Component } from 'react';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from
'./api';

import './App.css';
import './nprogress.css';

class App extends Component {
  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) { eventCount = this.state.numberOfEvents }
        if (location === undefined) { location = this.state.selectedLocation }

        getEvents().then((events) => {
            let locationEvents = (location === 'all') ? events
                : events.filter((event) => event.location === location);

            this.setState({
                events: locationEvents.slice(0, eventCount),
                numberOfEvents: eventCount,
                selectedLocation: location
            });
        });
    }

    constructor() {
        super();
        this.state = {
            events: [],
            locations: [],
            numberOfEvents: 32,
            selectedLocation: 'all',
            showWelcomeScreen: undefined
        }
    }

    render() {
       const { events, locations, numberOfEvents, showWelcomeScreen } = this.state;

        if (this.state.showWelcomeScreen === undefined) return <div
        className="App" />

        return (
            <div className="App">
                <CitySearch updateEvents={this.updateEvents} locations={locations} />
                <NumberOfEvents numberOfEvents={numberOfEvents} updateEvents={this.updateEvents} />
                <EventList events={events} />
                <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
getAccessToken={() => { getAccessToken() }} />
            </div>
        );
    }

    async componentDidMount() {
        this.mounted = true;
        const accessToken = localStorage.getItem('access_token');
        const isTokenValid = (await checkToken(accessToken)).error ? false :
        true;
        const searchParams = new URLSearchParams(window.location.search);
        const code = searchParams.get("code");
        this.setState({ showWelcomeScreen: !(code || isTokenValid) });
        if ((code || isTokenValid) && this.mounted) {
        getEvents().then((events) => {
        if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
        }
        });
        }
        }

    componentWillUnmount() {
        this.mounted = false;
    }
    
}
export default App;