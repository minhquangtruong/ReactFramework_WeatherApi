import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
          time: new Date().getHours()+":"+ new Date().getMinutes()
        };
      }
      componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
        this.setState({
          time: new Date().getHours()+":"+ new Date().getMinutes()
        });
      }
      render() {
        return (
          <div class="app-clock">
            {this.state.time}
          </div>
        );
      }
}
