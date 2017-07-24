import React from 'react';

export default class PlayerList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEntries();
  }

  render() {
    return (
      <div>
        Hi
      </div>
    );
  }
}
