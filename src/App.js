import React from 'react'
import './index.css';

const App = ()=>{
    return(
        <div className="container">
                <div className=" ">
                <h3 >CHEMICAL EQUATIONS</h3>   
                </div>
                <div className = "section">
                <div className="row div2">
                    <div className="col s6 offset-s3">
                    <input classname = "center white" type="text" placeholder= "Enter the Equation"/>
                    </div>
                </div>   
                <div className="row div ">
                    <div className="col s4 offset-s5">
                    <button className= "btn waves-effect purple">BALANCE</button>
                    </div>
                </div>      
                </div>
                
                
            </div>
            
            
        

    )

}

export default App;