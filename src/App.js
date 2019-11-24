import React, { Component } from 'react';
import Login from './Component/Login';
// import MainPage from './Component/MainPage';
// import SampleMap from './Component/googleMaps';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
        {/* <MainPage />
        <SampleMap
          google={this.props.google}
          center={{ lat: 18.5204, lng: 73.8567 }}
          height='97vh'
          zoom={15}
        /> */}
      </div>
    );
  }
}

export default App;