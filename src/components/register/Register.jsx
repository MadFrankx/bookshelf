import React from "react";
import styles from "./Register.scss";

export default class Register extends React.Component {

  nameInput = React.createRef();

  redirect = () => {
    if ( this.nameInput.current.value == '') {
      event.preventDefault();
    } else {
      this.props.history.push({
        pathname: '/dashboard/' + this.nameInput.current.value
      });
    } 
  }

  render() {
    return (  
      <div className= { styles.container }>
        <h1 className= { styles.headerRegister }>CREATE ACCOUNT</h1>
        <form>
          <div>
            <label>
              <input
                    className= { styles.data }
                    ref= { this.nameInput } 
                    type="text" 
                    name="name" 
                    placeholder="Username"/>
            </label>
            </div>
            <div>
            <label>
                <input
                    type="text"
                    name="email"
                    className= { styles.data }
                    placeholder="Email address"
                    onChange={this.onChange}
                    autoFocus
                />
                </label>
            </div>
            <div>
                <label>
                    <input 
                        className= { styles.data } 
                        type="password" 
                        name="password" 
                        placeholder="Password"/>
                    </label>
            </div>
            <div>
                <label>
                    <input
                        className= { styles.data } 
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={this.onChange}
                        />
                </label>
            </div>
            <div>
                <input className= { styles.sign } onClick= { this.redirect } type="submit" value="Sign in" />
            </div>
        </form>
        <a className = { styles.back } href= "#">&lt; Go back</a>
      </div>
      );
    }
  }