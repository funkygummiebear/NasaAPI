import React, {Component} from "react";
import ReactDom from "react-dom";
import AppContainer from "/containers/AppContainer";

export class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            object:"Ball",
            count: 0
        }
    }

    render(){
        const {object, count} = this.state
        const increment = () => {
            this.setState({count: this.state.count + 1})
        }
        return(
            <AppContainer
                name ="Joe"
                color="Green"
                object={object}
                count={count}
                increment={increment}
            />
            )
        }
    }

ReactDom.render(<App />, document.querySelector("#app"));