import { Component } from "react";
import { runInThisContext } from "vm";

interface MainComponentProps {
    title: string;
    subTitle?: string;
}

interface MainComponentState {
    goodEnough: boolean;
}

class MainComponent extends Component<MainComponentProps, MainComponentState> {

    state: MainComponentState = {
        goodEnough: false,
    }

    render() {
        return (
            <>
                <h1>Hello World</h1>
                <p>{this.props.title}</p>
                {
                    this.props.subTitle && <p>{this.props.subTitle}</p>
                }
                <h2 onClick = {() => this.setState({goodEnough: !this.state.goodEnough})}>{this.state.goodEnough.toString()}</h2>
            </>
        );
    }
}

export default MainComponent;