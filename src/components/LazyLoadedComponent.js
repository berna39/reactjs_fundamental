import React from "react";

class LazyLoadedComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div>
                    <p>This is a lazyloaded component</p>
               </div>);
    }
}

export default LazyLoadedComponent;