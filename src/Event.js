import React, { Component } from "react";

class Event extends Component {
  state = {
    collapsed: true
};

handleClick = () => {
    this.setState({ collapsed: !this.state.collapsed })
};


toggleBtnText = () => {
    return `${this.state.collapsed 
        ? 'SHOW DETAILS' 
        : 'HIDE DETAILS'
    }`;
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