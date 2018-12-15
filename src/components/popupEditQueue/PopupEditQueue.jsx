import React from "react";
import styles from "./PopupEditQueue.scss";

export default class PopupEditQueue extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            added: false
        }
    }

    addToQueue = () => {
        this.setState({
            added: true
        });
        this.props.handleAddToQueue(this.state.added);
    }

    removeFromQueue = () => {
        this.setState({
            added: false
        });
        this.props.handleRemoveFromQueue(this.state.added);
    }

    render() {
        return (
            <div className= { styles.wrapper }>
                <button onClick= { this.addToQueue } className= { styles.add }>Add to awaiting</button>
                <button onClick= { this.removeFromQueue } className= { styles.remove }>Remove from awaiting</button>
            </div>
        );
    }
}