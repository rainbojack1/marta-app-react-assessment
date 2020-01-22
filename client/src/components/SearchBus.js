import React, { Component } from 'react';

class SearchBus extends Component {
    handleInputChange = event => {
        // const { name, value } = event.target;
        // this.setState({
        // [name]: value
        // });
        event.preventDefault();
        
    };
    
    render() {
        return (
            <div>
            <form>
                <div className="form-group">
                  <label htmlFor="busRouteInput">Search a Bus Route</label>
                  <input type="number" className="form-control" id="busRouteInput" aria-describedby="routeHelp"></input>
                  <small id="routeHelp" className="form-text text-muted">Enter a route and to locate the bus on the map</small>
                </div>
                <button type="submit" className="btn btn-primary" id="busRouteInputBtn">Submit</button>
            </form>
            <hr></hr><br></br>
            <div id="chosenBus"></div>
        </div>
        );
    }
}

export default SearchBus;