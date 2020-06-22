import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import authSvc from '../Services/authenticationService'

class Callback extends Component {
    async componentDidMount(){
        await authSvc.handleAuthentication()
        this.props.history.replace('/')
    }

    render() {
        return (
            <p>Loading profile...</p>
        )
    }
}

export default withRouter(Callback)