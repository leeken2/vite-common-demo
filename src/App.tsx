import React from 'react';
import { Link } from 'react-router-dom';
import Router from './router/Router';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/order">订单</Link>
        </div>
        <div>
          <Link to="/home">跟我回家</Link>
        </div>
      </Router>
    </div>
  );
}

export default App;
