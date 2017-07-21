import React from 'react';

export default class PlayerList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const teams = this.props.schedule;
    
  }

  render() {
    console.log(this.props);
    if (this.props.players) {
      return(
        <div></div>
      );
    } else {
      const p1 = this.props.players[Object.keys(this.props.players)[0]];
      return (
        <div>
          {p1}
        </div>
      );
    }
  }
}
