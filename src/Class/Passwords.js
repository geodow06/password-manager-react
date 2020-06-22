import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import axiosConfig from '../Config/axios'
class Passwords extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwords: null,
    };
  }

  async componentDidMount() {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5Mjg2MDU3M30.cBoyIEU0yXVSG2T_h5Im8GqAaEeeIWu0l8AlXfhmGINwZus4RsvAJPB0fHue00mxe_1aPVJGlHkSC2as9uOFPg"
    const passwords = (await axiosConfig({
                    method:'get',
                    url: `/passwords`,
                    headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5Mjg2MTk2NH0.N7PeP8SNJlZ0GTt_qnf6eNLhphBC0htCOetnoQNyq9LRNGqMicIC8nta38dsDlpOgRGHLLWQ0YsKKxsKW2y6bA','Content-Type': 'application/json'}
                    })).data;
                    console.log(passwords)
    this.setState({
      passwords,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.passwords === null && <p>Loading passwords...</p>}
          {
            this.state.passwords && this.state.passwords.map(password => (
              <div key={password.id} className="col-sm-12 col-md-4 col-lg-3">
                <Link to={`/password/${password.id}`}>
                  <div className="card text-white bg-success mb-3">
                    <div className="card-header">User</div>
                    <div className="card-body">
                      <h4 className="card-title">{password.id}</h4>
                      <p className="card-text">{password.value}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Passwords;