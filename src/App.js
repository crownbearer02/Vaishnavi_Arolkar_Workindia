import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading......</div>
    }

    else {
      var arrayObject = Object.values(items);
      console.log(arrayObject);
      return (
        <ul>
          {arrayObject.map(id => {
              <div>
                <h2>{id[0]}</h2>
              </div>
          })}
          <React.Fragment>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2>Applied</h2>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <h2>Accepted</h2>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <h2>Rejected</h2>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        </ul>
      );
    }

  }
}

// function App() {

// }

export default App;
