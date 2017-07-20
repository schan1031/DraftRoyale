import React from 'react';

export default class ContestLobby extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchAllContests();
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to='/' />;
    }

    return(
      <div>
        
      </div>
    );
  }

}
