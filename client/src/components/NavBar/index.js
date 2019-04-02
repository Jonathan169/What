
import React, { Component } from "react";
import Hamburger from "./Hamburger";


class Nav extends Component {
    state={
        collapse: true
    }

    hamburgerHandler = (e)=>{
        // e.preventDefault()

        this.setState({
            collapse: !this.state.collapse
        })
        console.log(this.state.collapse)
    }
    
    render(){
        return this.state.collapse?(<>
            <nav>
                <span id="brand">
                    <div className="font">
                        <a href="/">WiS</a>
                    </div>
                </span>
                <div id="toggle" onClick={this.hamburgerHandler}>
                    <div className="span" id="one"></div>
                    <div className="span" id="two"></div>
                    <div className="span" id="three"></div>
                </div>
            </nav>
        </>):
        (<>
            <nav>
                <span id="brand">
                    <div className="font">
                        <a href="/">WiS</a>
                    </div>
                </span>
                <div id="toggle" className="on" onClick={this.hamburgerHandler}>
                    <div className="span" id="one"></div>
                    <div className="span" id="two"></div>
                    <div className="span" id="three"></div>
                </div>
            </nav>
            <Hamburger collapse={this.hamburgerHandler} />
        </>)
    }
}





export default Nav;
