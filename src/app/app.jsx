import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';// Place bootstrap in html file not here
import '../styles/index.css';

function App({ message }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1>
            {message}
          </h1>
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;
