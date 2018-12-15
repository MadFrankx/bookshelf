import classNames from 'classnames';
import React from "react";
import styles from "./FriendsBook.scss";
import PopupEditQueue from "../popupEditQueue/PopupEditQueue";

import lent from '../../assets/circleLent.png';
import borrowed from '../../assets/circleBorrowed.png';
import available from '../../assets/circleAvailable.png';
import pencil from '../../assets/pencil.png';
import starGreen from '../../assets/starGreen.png';
import starBlue from '../../assets/starBlue.png';
import starYellow from '../../assets/starYellow.png';
import starPurple from '../../assets/starPurple.png';

export default class YourBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            added: false
        }
    }

    popup() {
        this.setState({
          visible: !this.state.visible
        })
      }
    
    handleAdd = (added) => {
        this.setState({
            added: added
        });
    }

    handleRemove = (remove) => {
        this.setState({
            added: remove
        });
    }

    render() {
        const popup = (this.state.visible ? <PopupEditQueue 
                                                            handleRemoveFromQueue = { this.handleRemove }
                                                            handleAddToQueue = { this.handleAdd }
                                                            /> : null);
        const starsDiv = (this.state.added ?
                        <div className= { styles.stars }>
                            <img className= { styles.dataImage} src= { starBlue } />
                            <img className= { styles.dataImage} src= { starYellow } />
                            <img className= { styles.dataImage} src= { starGreen } />
                        </div> :
                        <div className= { styles.stars }>
                        <img className= { styles.dataImage} src= { starBlue } />
                        <img className= { styles.dataImage} src= { starYellow } />
                    </div> 
            )
        return (
            <div>
                <div className= { styles.wrapper }>
                    <div className= { styles.user }>
                        <img className= { styles.dataImage} src= { starPurple } />
                    </div>
                    <div>
                        <p><span>Title: </span>Harry Potter and the Philosophers Stone
                            <img className= { styles.dataImage} src= { available } />
                            <img 
                                className= {classNames( styles.dataImage, styles.pencilImage )}
                                onClick={() => this.popup()} 
                                src= { pencil } />
                        </p>
                        <p><span>Author: </span>J.K.Rowling</p>
                    </div>
                    <div className= { styles.stats }>
                        <p className= { styles.awaiting }>AWAITING</p>
                        { starsDiv }
                    </div>
                </div>
                {popup}
            </div>

        );
    }
}