import React from "react";

class ConditionalRendering extends React.Component{
    constructor(props){
        super(props);
        this.state = { notifs: ['New invoice', 'New Product', 'Stock alert' ] };
    }

    render(){
        return(<div>
                <p>Hi!
                    { this.state.notifs.length > 0 && <span> You have {this.state.notifs.length} UnRead Notifications</span> }
                </p> 
              </div>);
    }
}

export default ConditionalRendering;