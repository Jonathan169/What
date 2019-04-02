import React from "react";
import { Link } from "react-router-dom";


function Hamburger(props){

    return (<div id="hamburger">
    <ul id="menu">
        <div className="font">
            <li>
                <Link 
                    to="/dashboard"
                    className={
                        window.location.pathname === "/dashboard"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    onClick={props.collapse}
                
                
                >DASHBOARD</Link>                
            </li>
            <li>
                <Link 
                    to="/inventory"
                    className={
                        window.location.pathname === "/inventory"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    onClick={props.collapse}

                >INVENTORY</Link>     
            </li>
            <li>
                <Link 
                    to="/promos"
                    className={
                        window.location.pathname === "/promos"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    onClick={props.collapse}

                >PROMOTIONALS</Link>  
            </li>
            <li>
                <Link 
                    to="/profile"
                    className={
                        window.location.pathname === "/profile"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    onClick={props.collapse}

                >PROFILE</Link>  
            </li>
            <li>
                <Link 
                    to="/login"
                    className={
                        window.location.pathname === "/auth/signup"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    onClick={props.collapse}

                >SIGN UP/ LOGIN</Link>  
            </li>
        </div>
    </ul>
</div>)
}


export default Hamburger;


