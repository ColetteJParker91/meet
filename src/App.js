import React, { Component } from 'react';

import EventList from './EventList';
import EventGenre from "./EventGenre";
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from
'./api';
import { OffLineAlert } from "./Alert";

import './App.css';
import './nprogress.css';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,} from "recharts";


class App extends Component {

    constructor() {
        super();
        this.state = {
            events: [],
            locations: [],
            numberOfEvents: 32,
            selectedLocation: 'all',
            showWelcomeScreen: undefined
        }
    };


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
        this.setState({ events,
             locations: extractLocations(events) });
        }
        });
        }
        }

    componentWillUnmount() {
        this.mounted = false;
    }

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
    };

    updateNumberEvents = (numberOfEvents) => {
        this.setState({
          numberOfEvents,
        });
        this.updateEvents(undefined, numberOfEvents);
      };

      getData = () => {
        const { locations, events } = this.state;
        const data = locations.map((location) => {
          const number = events.filter(
            (event) => event.location === location
          ).length;
          const city = location.split(", ").shift();
          return { city, number };
        });
        return data;
      };


    render() {
       /* const { showWelcomeScreen, events, locations, numberOfEvents,} = this.state; */

        if (this.state.showWelcomeScreen === undefined)
    
    return (
      <div className="App">
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
        <div className="offlineAlert">
          {!navigator.onLine && (
            <OffLineAlert text={"You are currently offline!"} />
          )}
        </div>

        <h1>Come and see what's going on</h1>

        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />
        <div className="data-vis-wrapper">
          <div className="pie-wrapper">
            <EventGenre events={this.state.events} />
          </div>
          <div className="scatter-wrapper">
            <ResponsiveContainer width={400} height={400}>
              <ScatterChart
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="City" />
                <YAxis
                  type="number"
                  dataKey="number"
                  name="Number of events"
                  allowDecimals={false}
                />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter data={this.getData()} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}
  
export default App;