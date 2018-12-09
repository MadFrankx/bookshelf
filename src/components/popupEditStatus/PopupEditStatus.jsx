import React from "react";
import styles from "./PopupEditStatus.scss";

import lent from '../../assets/circleLent.png';
import borrowed from '../../assets/circleBorrowed.png';
import available from '../../assets/circleAvailable.png';

export default class PopupEditStatus extends React.Component {
    render() {
        return (
            <div className= { styles.wrapper }>
                <h4>Change status:
                <img className= { styles.dataImage} src= { available } />
                <img className= { styles.dataImage} src= { lent } />
                <img className= { styles.dataImage} src= { borrowed } />
                </h4>
            </div>
        );
    }
}