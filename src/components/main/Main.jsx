import React from "react";
import styles from "./Main.scss";

export default class Main extends React.Component {

  nameInput = React.createRef();
  passwordInput = React.createRef();

  redirectDashboard = (event) => {
    if ( this.nameInput.current.value == '' ||
        this.passwordInput.current.value == ''  ) {
      event.preventDefault();
    } else {
      this.props.history.push({
        pathname: '/dashboard/' + this.nameInput.current.value
      });
    } 
  };

  redirectRegister = () => {
    this.props.history.push({
      pathname: '/register'
    });
  };

  render() {
    return (  
      <div className= { styles.container }>
        <h1 className= { styles.header }>BOOKSHELF</h1>
        <form>
          <div>
            <label>
              <input className= { styles.data } ref= { this.nameInput } type="text" name="name" placeholder="Username"/>
            </label>
          </div>
          <div>
            <label>
              <input className= { styles.data } ref= { this.passwordInput } type="password" name="password" placeholder="Password"/>
            </label>
          </div>
          <div>
              <input className= { styles.login } onClick= { this.redirectDashboard } type="submit" value="Log in" />
          </div>
          <div>
            <input className= { styles.sign } onClick= { this.redirectRegister } type="submit" value="Sign in" />
          </div>
        </form>
      </div>
      );
    }
  }

