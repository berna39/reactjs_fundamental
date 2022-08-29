import React from "react";

class LifeCycleComponent extends React.Component{
    constructor(props){
        super(props);
    }

    // When the component is injected by the react DOM
    componentDidMount(){

    }

    // When the component is
    componentWillUnmount(){

    }

    // The render of the component
    render(){
        return(<div>
                    <p></p>
                </div>);
    }
}