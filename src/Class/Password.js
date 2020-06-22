import React,{ Component } from 'react'
import axiosConfig from '../Config/axios'
class Password extends Component {
     
    constructor(props){
        super(props)
        this.state = {
            password: null,
        }
    }

    async componentDidMount() {
        const { match: {params} } = this.props
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5Mjg2MDU3M30.cBoyIEU0yXVSG2T_h5Im8GqAaEeeIWu0l8AlXfhmGINwZus4RsvAJPB0fHue00mxe_1aPVJGlHkSC2as9uOFPg"
        const password = (await axiosConfig({
            method:'get',
            url: `/passwords/${params.id}`,
            headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5Mjg2MDkwMn0.1iz2EfILvcocw61RVU7-xthUA8dQBXwAGHo1Tcq56ByU3sVfQLZNX-Cw8Wr8mogWi1UNkYigxoqi5yVhv99bHg','Content-Type': 'application/json'}
            })).data;
        this.setState({
            password,
        })
    }

    render() {
        
        const {password} = this.state
        if (password === null) return <p>Loading ...</p>
        return(
            <div className="container">
                <div className="row">
                    <div className="jumbotron col-12">
                        <h1 className="display-3">password</h1>
                        <p className="Lead">{password}</p>
                    </div>
                </div>
            </div>
        );
     }
}

export default Password