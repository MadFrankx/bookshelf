import React from "react";
import styles from "./Footer.scss";

export default class Footer extends React.Component {
    render() {
        return (
                <div className= { styles.footer }>
                    <a href="#">Go back</a>
                    <p>&copy; Copyright 2018 Magdalena Frankowska</p>
                </div>
        );
    }
}