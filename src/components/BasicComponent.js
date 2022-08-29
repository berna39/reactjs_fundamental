import React from "react";

// This is a very basic react component
class BasicComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (<div>
                    <p>Hello from the toher side</p>
                </div>);
    }
}

export default BasicComponent;