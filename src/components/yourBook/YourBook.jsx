import classNames from 'classnames';
import React from "react";
import styles from "./YourBook.scss";
import PopupEditStatus from "../popupEditStatus/PopupEditStatus";

import lent from '../../assets/circleLent.png';
import borrowed from '../../assets/circleBorrowed.png';
import available from '../../assets/circleAvailable.png';
import pencil from '../../assets/pencil.png';
import starBlue from '../../assets/starBlue.png';
import starYellow from '../../assets/starYellow.png';
import starPurple from '../../assets/starPurple.png';

export default class YourBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    popup() {
        this.setState({
          visible: !this.state.visible
        })
      }

    render() {
        const popup = (this.state.visible ? <PopupEditStatus /> : null);
        return (
            <div>
            <div className= { styles.wrapper }>
                <div>
                    <p><span>Title: </span>{ this.props.title }
                        <img className= { styles.dataImage} src= { available } />
                        <img 
                            className= {classNames( styles.dataImage, styles.pencilImage )}
                            onClick={() => this.popup()} 
                            src= { pencil } />
                    </p>
                    <p><span>Author: </span>{ this.props.author }</p>
                </div>
                <div className= { styles.stats }>
                    <p className= { styles.awaiting }>AWAITING</p>
                    <div className= { styles.stars }>
                        <img className= { styles.dataImage} src= { starBlue } />
                    </div>
                </div>
            </div>
            {popup}
            </div>

        );
    }
}