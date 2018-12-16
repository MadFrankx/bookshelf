import React from "react";
import styles from "./PopupEditQueue.scss";

export default class PopupEditQueue extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            added: false
        }
    }

    changeQueue = () => {
        this.setState({
            added: !this.state.added
        });
        this.props.handleChangeQueue(this.state.added);
    }

    render() {
        if (this.state.added == false) {
            return (
                <div className= { styles.wrapper }>
                    <button onClick= { this.changeQueue } className= { styles.add }>Add to awaiting</button>
                </div> 
            );
        } else if (this.state.added == true) {
            return (
                <div className= { styles.wrapper }>
                    <button onClick= { this.changeQueue } className= { styles.remove }>Remove from awaiting</button>
                </div>
            );
        }
    }
}