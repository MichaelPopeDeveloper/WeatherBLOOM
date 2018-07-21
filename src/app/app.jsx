import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';// Place bootstrap in html file not here
import '../styles/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reno: [],
      vegas: [],
      phoenix: [],
      seattle: [],

    };
  }


  componentWillMount() {
    this.data1();
    this.data2();
    this.data3();
    this.data4();
  }

  data1() {
    fetch('https:api.openweathermap.org/data/2.5/forecast?q=Reno&units=imperial&appid=63dd0d75cb039f76bb9b092405a90895')
      .then((results) => results.json()).then((data) => {
        const myData = data;
        console.log(myData);
        this.setState({
          reno: myData,
        });
      });
  };

  data2() {
    fetch('https:api.openweathermap.org/data/2.5/forecast?q=LasVegas&units=imperial&appid=63dd0d75cb039f76bb9b092405a90895')
      .then((results) => results.json()).then((data) => {
        const myData = data;
        console.log(myData);
        this.setState({
          vegas: myData,
        });
      });
  };

  data3() {
    fetch('https:api.openweathermap.org/data/2.5/forecast?q=Phoenix&units=imperial&appid=63dd0d75cb039f76bb9b092405a90895')
      .then((results) => results.json()).then((data) => {
        const myData = data;
        console.log(myData);
        this.setState({
          phoenix: myData,
        });
      });
  };

  data4() {
    fetch('https:api.openweathermap.org/data/2.5/forecast?q=Seattle&units=imperial&appid=63dd0d75cb039f76bb9b092405a90895')
      .then((results) => results.json()).then((data) => {
        const myData = data;
        console.log(myData);
        this.setState({
          seattle: myData,
        });
      });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-content-center align-items-center home">
            <h1>
              <u>WeatherBloom</u>
              is a simple web application powered by OpenWeatherMap
</h1>
            {/* <h1>
            {message}
          </h1> */}
          </div>
        </div>
        <div className="row full-height">
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="uk-card uk-card-primary uk-card-body">
              <h3 className="uk-card-title">
                Las vegas
</h3>
              <div className="d-flex justify-content-between full-width">
                <p>
                  &#8457;: {this.state.vegas && this.state.vegas.list && this.state.vegas.list[0].main && this.state.vegas.list[0].main.temp}
                </p>
                <p>
                  Weather: {this.state.vegas && this.state.vegas.list && this.state.vegas.list[0].weather && this.state.vegas.list[0].weather[0].main}
                </p>
                <p>
                  Wind Speed: {this.state.vegas && this.state.vegas.list && this.state.vegas.list[0].wind && this.state.phoenix.list[0].wind.speed}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="uk-card uk-card-primary uk-card-body">
              <h3 className="uk-card-title">
                Reno
</h3>
              <div className="d-flex justify-content-between full-width">
                <p>
                  &#8457;: {this.state.reno && this.state.reno.list && this.state.reno.list[0].main && this.state.reno.list[0].main.temp}
                </p>
                <p>
                  Weather: {this.state.reno && this.state.reno.list && this.state.reno.list[0].weather && this.state.reno.list[0].weather[0].main}
                </p>
                <p>
                  Wind Speed: {this.state.reno && this.state.reno.list && this.state.reno.list[0].wind && this.state.reno.list[0].wind.speed}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row full-height">
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="uk-card uk-card-primary uk-card-body">
              <h3 className="uk-card-title">
                Phoenix
</h3>
              <div className="d-flex justify-content-between full-width">
                <p>
                  &#8457;: {this.state.phoenix && this.state.phoenix.list && this.state.phoenix.list[0].main && this.state.phoenix.list[0].main.temp}
                </p>
                <p>
                  Weather: {this.state.phoenix && this.state.phoenix.list && this.state.phoenix.list[0].weather && this.state.phoenix.list[0].weather[0].main}
                </p>
                <p>
                  Wind Speed: {this.state.phoenix && this.state.phoenix.list && this.state.phoenix.list[0].wind && this.state.phoenix.list[0].wind.speed}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="uk-card uk-card-primary uk-card-body">
              <h3 className="uk-card-title">
                Seattle
</h3>
              <div className="d-flex justify-content-between full-width">
                <p>
                  &#8457;: {this.state.seattle && this.state.seattle.list && this.state.seattle.list[0].main && this.state.seattle.list[0].main.temp}
                </p>
                <p>
                  Weather: {this.state.seattle && this.state.seattle.list && this.state.seattle.list[0].weather && this.state.seattle.list[0].weather[0].main}
                </p>
                <p>
                  Wind Speed: {this.state.seattle && this.state.seattle.list && this.state.seattle.list[0].wind && this.state.seattle.list[0].wind.speed}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 footer d-flex justify-content-center align-content-center align-items-center">
            <p className="text-white">{'MichaelPopeDeveloper 2018'}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
