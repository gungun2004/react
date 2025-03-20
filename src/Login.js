import { useState } from "react";
import Dashboard from "./Dashboard";
function Login() {
    
    const [flag, setFlag] = useState(false);

    function validate(event) {
        event.preventDefault(); 
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;

        if (name === 'Gungun Dhingra' && password === '1234') {
            setFlag(true); 
        } else {
            alert("Invalid User name or Password");
        }
    }
 

    return flag ? (
        <Dashboard/>
    ) : (
        <div  className="loginpage"> 
    <form className="loginform">
            <h2>&ensp;&ensp;WELCOME TO LOGIN PAGE</h2>
            <br></br><br></br><label><b>🙍‍♂️ENTER YOUR NAME</b>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<input type="text" id="name" placeholder="Enter your name" /></label>
            <br></br><br></br>
            <label><b>🔑ENTER YOUR PASSWORD</b>&ensp;&ensp;&ensp;&ensp;&ensp;
                <input type="password" id="password" placeholder="Enter your password"/></label>
            <br></br><br></br><br></br> <br></br><br></br><br></br><br></br><br></br>
            
            <center>
            <button onClick={validate} >
                <b>🔓SUBMIT</b>
            </button></center>
        </form> 
        </div>  
    )
    
}

export default Login;
