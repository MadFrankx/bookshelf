import React from "react";
import styles from "./RecoverPassword.scss";

export default class RecoverPassword extends React.Component {

  nameInput = React.createRef();

  redirect = () => {
    let path = `/dashboard`;
    this.props.history.push(path);
  }

  render() {
    return (  
      <div className= { styles.container }>
        <div className= { styles.infoContainer }>

        </div>
      </div>
      );
    }
  }