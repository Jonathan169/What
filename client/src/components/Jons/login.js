import React from "react";
import {Link} from "react-router-dom";
  
class login extends React.Component{
    state={
        email:"",
        password:"",
    }
    handleChange=(event)=>{
        event.preventDefault();
        const {name,value}= event.target;
        this.setState({[name]:value});
    }
    formSubmit=()=>{
        if(this.state.Confirmpassword===this.state.password){
            let body={
                email:this.state.email,
                password: this.state.password
            }
            fetch("/auth/login",{
                method:"POST",
                body:body}).then(res=>{
                window.location.assign("/dashboard")
            })
        }
    }
    render(){
        return(
            <div className="authCont">
                <div className="info">
                    <p className="signupHeader">W i S</p>
                    <Link to="/signup"><p className="signupPara">Don't have an account yet? click here to get set up!
                    </p></Link>
                </div>
                <div className="forminput">
                    <form className="formss">
                        <div className="form-group">
                          <label for="email">Email address</label>
                          <input type="email" onClick={this.handleChange} className="form-control" name="email" placeholder="name@example.com"/>
                        </div>
                        <div className="form-group">
                          <label for="password">Password</label>
                          <input type="password" onClick={this.handleChange} className="form-control" name="password"/>
                        </div>
                        <button type="submit" onClick={this.formSubmit} class="btn btn-info">Submit</button>
                    </form>
                </div>
            </div>
        )
    }

}
export default login;