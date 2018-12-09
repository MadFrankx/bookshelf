import React from "react";
import available from '../../assets/circleAvailable.png';
import lent from '../../assets/circleLent.png';
import borrowed from '../../assets/circleBorrowed.png';
import owned from '../../assets/circleOwned.png';
import styles from "./BooksData.scss";

export default class BooksData extends React.Component {
    render() {
        return (
            <div className= { styles.user }>
                <img className= { styles.dataImage} src= { available } />
                <h1>12</h1>
                <img className= { styles.dataImage} src= { lent } />
                <h1>12</h1>
                <img className= { styles.dataImage} src= { borrowed } />
                <h1>34</h1>
                <img className= { styles.dataImage} src= { owned } />
                <h1>34</h1>
            </div>
        );
    }
}