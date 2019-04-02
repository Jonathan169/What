import React from "react";
import axios from "axios";
class Signup extends React.Component{
    state={
        email:"",
        shopName:"",
        password:"",
        Confirmpassword:"",
        shopLogo:"",
        description:""
    }
    handleChange=(event)=>{
        event.preventDefault();
        const {name,value}= event.target;
        this.setState({[name]:value});
    }
    formSubmit=(event)=>{
        event.preventDefault();
        if(this.state.Confirmpassword===this.state.password){
            console.log("passowrds match")
            console.log(this.state)
            let body={
                email:this.state.email,
                password: this.state.password,
                name: this.state.name,
                shopName:this.state.shopName,
                description:this.state.description,
            }
            fetch("http://localhost:3000/auth/signup",{
                method:"POST",
                mode:"no-cors",
                body:JSON.stringify(body),
                credentials: "same-origin",
                headers:{
                    'Accept': 'application/x-www-form-urlencoded',
                    'Content-Type':'application/x-www-form-urlencoded'
                }}).then(res=>{
                console.log(res)
                // window.location.assign("/dashboard")
            })
        }
        else{
            console.log("check password")
        }
    }
    render(){
        return (
            <div className="authCont">
                <div className="signupbody">
                    <div className="info">
                        <p className="signupHeader">W i S</p>
                        <p className="signupPara">Whats-In-store is a Ecomerence  market place where you can buy goods or create a stand
                        and open your very own store!
                        </p>

                    </div>
                    <div className="forminput">
                        <form>
                            <div className="form-group">
                              <label for="email">Email address</label>
                              <input type="email" onChange={this.handleChange} className="form-control" name="email" placeholder="name@example.com"/>
                            </div>
                            <div className="form-group">
                              <label for="shopName">Shop Name</label>
                              <input type="text" onChange={this.handleChange} className="form-control" name="shopName" placeholder="she sells seaShells"/>
                            </div>
                            <div className="form-group">
                              <label for="password">Password</label>
                              <input onChange={this.handleChange} className="form-control" name="password" type="password" />
                            </div>
                            <div className="form-group">
                              <label for="Confirmpassword"> Confrim Password</label>
                              <input onChange={this.handleChange} className="form-control" name="Confirmpassword" type="password" />
                            </div>
                            <div className="form-group">
                              <label for="description">Shop description</label>
                              <textarea onChange={this.handleChange} className="form-control" name="description" rows="3"></textarea>
                            </div>
                            <button type="submit" onSubmit={this.formSubmit} onClick={this.formSubmit} class="btn btn-info">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
export default Signup;

// "proxy": "http://localhost:3000",