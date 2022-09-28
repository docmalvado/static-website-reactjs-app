import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ posts: json }))
  }

  render() {
    // const { posts } = this.state;
    return (
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="astronaut.png" class="d-block mx-lg-auto img-fluid" alt="Astronaut" loading="lazy"/>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">We are Demo-Land!</h1>
            <p class="lead">I'm going to make you an offer you can't refuse.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Contact</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">About Us</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;