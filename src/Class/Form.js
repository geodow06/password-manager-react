import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import axiosConfig from '../Config/axios';
import authenticationService from '../Services/authenticationService'
class Form extends Component {
    
    constructor(props) {
        super(props)
        if(props.error) {
            this.state = {
              failure: 'wrong username or password!',
              errcount: 0
            }
        } else {
            this.state = { errcount: 0 ,
            response: ''}
        }
    }
 
    handleError = (field, errmsg) => {
        if(!field) return
 
        if(errmsg) {
            this.setState((prevState) => ({
                failure: '',
                errcount: prevState.errcount + 1, 
                errmsgs: {...prevState.errmsgs, [field]: errmsg}
            }))
        } else {
            this.setState((prevState) => ({
                failure: '',
                errcount: prevState.errcount===1? 0 : prevState.errcount-1,
                errmsgs: {...prevState.errmsgs, [field]: ''}
            }))
        }
    }

    getRequestData = () =>{
        let values = this.props.inputs
        let requestData 
        let i = 0
        let expression = `requestData = {${values[0].name}:this.form.${values[0].name}.value`
        for( i===1 ; i<values.length-1; i++){
            expression+=`,${values[i].name}:this.form.${values[i].name}.value`
        }
        expression +=`}`
        eval(expression)
        return requestData
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let requestData = this.getRequestData()
        if(!this.state.errcount) {
            if(this.props.action==="login"||this.props.action==="sign-up"){
                axiosConfig({
                    method:this.form.method,
                    url: `${this.props.endpoint}`,
                    // headers: {'Authorization': 'Bearer'+token},
                    headers:{ 'Content-Type': 'application/json' },
                    data: requestData
                }).then(r => {authenticationService.login(r.data); window.location='/'}) 
            } else{
                axiosConfig({

                })
            }
        }
    }
 
    renderError = () => {
        if(this.state.errcount || this.state.failure) {
            const errmsg = this.state.failure 
              || Object.values(this.state.errmsgs).find(v=>v)
            return <div className="error">{errmsg}</div>
        }
    }

    render() {
        const inputs = this.props.inputs.map(
          ({name, placeholder, type, value, className}, index) => (
            <Input key={index} name={name} placeholder={placeholder} type={type} value={value}
              className={type==='submit'? className : ''} handleError={this.handleError} />
          )
        )
        const errors = this.renderError()
        return (
            <form {...this.props} onSubmit={this.handleSubmit} ref={fm => {this.form=fm}} >
              {inputs}
              {errors}
            </form>
        )
    }
}

Form.propTypes = {
    name: PropTypes.string,
    action: PropTypes.string,
    method: PropTypes.string,
    endpoint: PropTypes.string,
    inputs: PropTypes.array,
    error: PropTypes.string
  }
   
  export default Form