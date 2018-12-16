import React from "react";
import styles from "./Footer.scss";

export default class Footer extends React.Component {
    render() {
        return (
                <div className= { styles.footer }>
                    <p>&copy; Copyright 2018 Magdalena Frankowska</p>
                    <a href="#">Logout</a>
                </div>
        );
    }
}