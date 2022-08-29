import React from "react";

class LifeCycleComponent extends React.Component{
    constructor(props){
        super(props);
    }

    // When the component is injected by the react DOM
    componentDidMount(){
        console.log('i have been injected');
    }

    // When the component is
    componentWillUnmount(){
        console.log('i\'m about to leave');
    }

    // The render of the component
    render(){
        return(<div>
                    <p>Life Cycle use case</p>
                </div>);
    }
}

export default LifeCycleComponent;