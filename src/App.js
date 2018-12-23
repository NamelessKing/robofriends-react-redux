import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from "./robots";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfild: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfild: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfild.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox onSearchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;