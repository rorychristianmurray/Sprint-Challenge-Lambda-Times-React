import React, { Component } from 'react';
import ContentPage from './components/ContentPage'
import withAuthenticate from './authentication/withAuthenticate'

const ComponentFromWithAuthenticate = withAuthenticate(ContentPage);


const App = () => {
  return (
    <div className="App">
      <ComponentFromWithAuthenticate />
      {/* <ContentPage /> */}
    </div>
  );
}

export default App;
