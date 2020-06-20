import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import axiosConfig from '../Config/axios';
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
            jwt: ''}
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

    handleSubmit = (event) => {
        event.preventDefault()
        if(!this.state.errcount) {
            // const data = new FormData(this.form)
            console.log(this.form)
            console.log(this.form.password)
            if(this.form.username&&this.form.password){
                axiosConfig({
                    method:'post',
                    url: '/login',
                    // headers: {'Authorization': 'Bearer'+token},
                    headers:{ 'Content-Type': 'application/json' },
                    data: {username:this.form.username.value,password:this.form.password.value}
                }).then(response => {this.setState({jwt: response.data.jwt})})
    
                console.log(this.state.jwt)
            }
            
            // fetch(`http://localhost:8080/${this.form.action}`, {
            //   method: this.form.method,
            //   body: new URLSearchParams(data)
            // })

            // .then(v => {
            //     if(v.redirected) window.location = v.url
            // })
            // .catch(e => console.warn(e))
        }
    }

    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     if(!this.state.errcount){
    //         const data = new FormData(this.form)
    //         console.log(new URLSearchParams(data).toString)
    //     }
    // }
 
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
    inputs: PropTypes.array,
    error: PropTypes.string
  }
   
  export default Form