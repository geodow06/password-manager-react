import React,{ Component } from 'react'
import axiosConfig from '../Config/axios'
import { userContext } from '../Config/userContext'
class User extends Component {
     
    constructor(props){
        super(props)
        this.state = {
            user: null,
        }
    }

    async componentDidMount() {
        const { match: {params} } = this.props
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5Mjg2MDU3M30.cBoyIEU0yXVSG2T_h5Im8GqAaEeeIWu0l8AlXfhmGINwZus4RsvAJPB0fHue00mxe_1aPVJGlHkSC2as9uOFPg"
        const user = (await axiosConfig({
            method:'get',
            url: `/users/${params.id}`,
            headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5Mjg2MTk2NH0.N7PeP8SNJlZ0GTt_qnf6eNLhphBC0htCOetnoQNyq9LRNGqMicIC8nta38dsDlpOgRGHLLWQ0YsKKxsKW2y6bA','Content-Type': 'application/json'}
            })).data;
        this.setState({
            user,
        })
    }

    render() {
        
        const {user} = this.state
        if (user === null) return <p>Loading ...</p>
        return(
            <div className="container">
                <div className="row">
                    <div className="jumbotron col-12">
                        <h1 className="display-3">{user.id}</h1>
                        <p className="Lead">{user.username}</p>
                        <p>Authorities:</p>
                        {
                            user.grantedAuthorities.map((authority,idx) => (
                                <p className="lead" key={idx}>{authority.authority}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
     }
}

export default User