import classNames from 'classnames';
import React from "react";
import styles from "./YourBook.scss";
import PopupEditStatus from "../popupEditStatus/PopupEditStatus";
import pencil from '../../assets/pencil.png';
import availableSrc from '../../assets/circleAvailable.png';
import lentSrc from '../../assets/circleLent.png';
import borrowedSrc from '../../assets/circleBorrowed.png';

const statusToImg = {
    available: availableSrc,
    lent: lentSrc,
    borrowed: borrowedSrc
};

export default class YourBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            status: this.props.status,
            img: ''
        }
    }
    
    popup() {
        this.setState({
          visible: !this.state.visible
        });
      };

    handleChangeStatus = (status) => {
        this.setState({ status }, () => {
            this.props.onStatusChanged(status);
        });
    };

    render() {
        if (this.state.visible) {
            return (
            <div>
                <div className= { styles.wrapper }>
                    <div className= { styles.status }>
                            <img className= { styles.dataImage} src= { statusToImg[this.state.status] } />
                    </div>
                    <div className= { styles.bookInfo }>
                        <p><span>Title: </span>{ this.props.title }</p>
                        <p><span>Author: </span>{ this.props.author }</p>
                    </div>
                    <div className= { styles.stats }>
                        <p className= { styles.awaiting }>AWAITING</p>
                        <div className= { styles.stars }>
                            <p> Empty </p>
                        </div>
                    </div>
                    <div className= { styles.status }>
                    <img 
                        className= {classNames( styles.dataImage, styles.pencilImage )}
                        onClick={() => this.popup()} 
                        src= { pencil } />
                    </div>
                </div>
               
            <PopupEditStatus changeStatus= { this.handleChangeStatus }/>
            </div>
            );
        } else {
            return (
                <div className= { styles.wrapper }>
                    <div className= { styles.status }>
                        <img className= { styles.dataImage} src= { statusToImg[this.state.status] } />
                    </div>
                    <div className= { styles.bookInfo }>
                        <p><span>Title: </span>{ this.props.title }</p>
                        <p><span>Author: </span>{ this.props.author }</p>
                    </div>
                    <div className= { styles.stats }>
                        <p className= { styles.awaiting }>AWAITING</p>
                        <div className= { styles.stars }>
                            <p> Empty </p>
                        </div>
                    </div>
                    <div className= { styles.status }>
                        <img 
                            className= {classNames( styles.dataImage, styles.pencilImage )}
                            onClick={() => this.popup()} 
                            src= { pencil } />
                    </div>
                </div>
            );
        }
    }
}