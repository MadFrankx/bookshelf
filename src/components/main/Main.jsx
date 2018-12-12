import React from "react";
import styles from "./Main.scss";

export default class Main extends React.Component {
  render() {
    return (  
      <div className= { styles.container }>
        <h1 className= { styles.header }>BOOKSHELF</h1>
        <form>
          <div>
            <label>
              <input className= { styles.data } type="text" name="name" placeholder="Name"/>
            </label>
          </div>
          <div>
            <label>
              <input className= { styles.data } type="password" name="password" placeholder="Password"/>
            </label>
          </div>
          <div>
            <input className= { styles.login } type="submit" value="Log in" />
          </div>
          <div>
            <input className= { styles.sign } type="submit" value="Sign in" />
          </div>
        </form>
      </div>
      );
    }
  }
