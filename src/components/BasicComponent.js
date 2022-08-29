import React from "react";

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