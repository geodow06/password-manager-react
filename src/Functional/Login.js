import React from 'react'
import Form from '../Class/Form'
import '../App.css'

function Login() {
    
    const inputs = [{
        name: "username",
        placeholder: "username",
        type: "text"
      },{
        name: "password",
        placeholder: "password",
        type: "password"
      },{
        type: "submit",
        value: "Submit",
        className: "btn"
    }]
       
    const props = {
    name: 'loginForm',
    method: 'POST',
    action: 'login',
    endpoint: '/login',
    inputs: inputs
    }
    
    const params = new URLSearchParams(window.location.search)
    
    
    return(
      <div className="container">
        <div className="row">
          <div className="col align-self-center">
            <div>
              Please sign in below
            </div>
            <Form  id="login" {...props} error={params.get('error')} />
          </div>
        </div>
      </div>
    )

}

export default Login