import React from "react";
import styles from "./PopupEditStatus.scss";

import lent from '../../assets/circleLent.png';
import borrowed from '../../assets/circleBorrowed.png';
import available from '../../assets/circleAvailable.png';

export default class PopupEditStatus extends React.Component {
    constructor(props) {
        super(props);
    }

    getStatus = (event) => {
        event.preventDefault();
        this.props.changeStatus(event.target.value);
        console.log(event.target.value);
    }

    render() {
        return (
            <div className= { styles.wrapper }>
                <h4>Change status:</h4>
                <select
                    value= {event.target.value}
                    onChange= { this.getStatus } >
                    <option value= "">-</option>
                    <option value= "available">Available</option>
                    <option value= "lent">Lent</option>
                    <option value= "borrowed">Borrowed</option>
                </select>
            </div>
        );
    }
}
