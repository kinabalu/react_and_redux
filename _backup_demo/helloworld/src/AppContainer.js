import React from 'react';
import App from './App';

class AppContainer extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }
  componentDidMount() {
    this.setState({
			name: 'Java2Days'
		});
  }

	render() {
    console.log(this.state);

		return <App name={this.state.name} />;
	}
}

export default AppContainer;
