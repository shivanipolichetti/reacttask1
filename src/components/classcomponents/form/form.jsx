import { Component } from "react";



class FormComponent extends Component{
    render(){
        return(
            <div>
                <h1>Form:</h1>
                <input type="text"  placeholder="username"></input>
                <br></br>
                <input type="text"  placeholder="password"></input>
            </div>
        )
    }
}

export default FormComponent;