import React from "react";
import styles from "./PopupEditQueue.scss";

export default class PopupEditQueue extends React.Component {
    render() {
        return (
            <div className= { styles.wrapper }>
                <button className= { styles.add }>Add to awaiting</button>
                <button className= { styles.remove }>Remove from awaiting</button>
            </div>
        );
    }
}