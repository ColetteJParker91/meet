import React, { Component } from "react";

class Event extends Component {
  state = {
    collapsed: true
};

handleClick = () => {
    this.setState({ collapsed: !this.state.collapsed })
};

collapsedEvent = () => {
    if (this.state.buttonCollapsed === false) {
      return (
        <div className="event-details">
          <div className="description">
            <h3>Description</h3>
            <em>{this.props.event.description}</em>
          </div>
          <div className="creator">
            <h4>e-mail:</h4>
            <p>{this.props.event.creator.email}</p>
          </div>
          <h4>Date and Time:</h4>
          <div className="start">
            <p>{this.props.event.start.dateTime}</p>
          </div>
          <div className="end">
            <p>{this.props.event.end.dateTime}</p>
          </div>
        </div>
      );
    }
  };

toggleBtnText = () => {
  return `${this.state.buttonCollapsed ? "show" : "hide"} details`;
};

render() {
  /*const { event } = this.props;
  const {show, buttonText } = this.state; */

  return (
      <div className="event">
          <h3 className="title">{this.props.event.summary}</h3>
          <div className="fb-date-location">
              <p className="start-time">
                  {this.props.event.start.dateTime.slice(0,10)}                  
              </p>
              
              <p className="location">{this.props.event.location}</p>  

          </div>

          <button 
              className="btn-toggle-details" 
              onClick={this.handleClick}>
              {this.toggleBtnText()}
          </button>            
          {!this.state.collapsed && (
              <div className="event-details">
                  {this.props.event.description}                    
              </div>                   
          )}               
      </div>
  );
}
}
export default Event;