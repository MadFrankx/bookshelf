import React from "react";
import available from '../../assets/circleAvailable.png';
import lent from '../../assets/circleLent.png';
import borrowed from '../../assets/circleBorrowed.png';
import owned from '../../assets/circleOwned.png';
import styles from "./BooksData.scss";

export default class BooksData extends React.Component {
    constructor(props) {
       super(props);
    }

    render() {
        return (
            <div className= { styles.user }>
                <img className= { styles.dataImage} src= { available } />
                <h1> { this.props.available } </h1>
                <img className= { styles.dataImage} src= { lent } />
                <h1> { this.props.lent } </h1>
                <img className= { styles.dataImage} src= { borrowed } />
                <h1> { this.props.borrowed } </h1>
                <img className= { styles.dataImage} src= { owned } />
                <h1> { this.props.owned } </h1>
            </div>
        );
    }
}