import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';

class App extends Component {
  state= {
  events: [],
  locations: []
}
updateEvents = (location) => {
  if (numberOfEvents === undefined) {
    numberOfEvents = this.state.numberOfEvents;
} else(
    this.setState({ numberOfEvents: numberOfEvents })
)
if (location === undefined) {
    location = this.state.locationSelected;
}
console.log(numberOfEvents, location)
  getEvents().then((events) => {
    const locationEvents = (location === 'all') ?
      events :
      events.filter((event) => event.location === location);
    this.setState({
      events: locationEvents.slice(0, numberOfEvents),
                numberOfEvents: numberOfEvents
    });
  });
}

componentDidMount() {
  this.mounted = true;
  getEvents().then((events) => {
    if (this.mounted) {
      this.setState({ events, locations: extractLocations(events) });
    }
  });
}

componentWillUnmount(){
  this.mounted = false;
}

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events}/>
        <NumberOfEvents updateEvents={this.updateEvents} events={this.state.events}/>
      </div>
    );
  }
}

export default App;
