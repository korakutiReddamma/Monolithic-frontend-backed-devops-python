import React from 'react';
import './App.css'; // Import your custom CSS file

const App = () => {
  return (
    <div className="app">
      <div className="column">
        <h2 className="header">Backend Application 1</h2>
        <iframe src="http://18.191.212.145/" title="Backend Application 1" className="iframe" />
      </div>

      <div className="column">
        <h2 className="header">Backend Application 2</h2>
        <iframe src="http://18.221.249.120/" title="Backend Application 2" className="iframe" />
      </div>
    </div>
  );
};

export default App;

