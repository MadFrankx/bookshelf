import React from "react";
import styles from "./Register.scss";

export default class Main extends React.Component {

  nameInput = React.createRef();

  redirect = () => {
    this.props.history.push({
      pathname: '/dashboard'
    });
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
        <a href= "#">&lt; Go back</a>
      </div>
      );
    }
  }