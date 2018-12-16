import React from "react";
import styles from "./NotFound.scss";

export default class NotFound extends React.Component {

  nameInput = React.createRef();

  redirect = () => {
    let path = `/dashboard`;
    this.props.history.push(path);
  }

  render() {
    return (  
      <div className= { styles.container }>
        <h2> 404 </h2>
        <h1> No Books Here</h1>
        <h3> Seems like this bookshelf doesn't exist...</h3>
      </div>
      );
    }
  }

