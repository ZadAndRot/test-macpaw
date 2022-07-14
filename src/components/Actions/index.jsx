import { Component } from "react";
import styles from "../Actions/index.module.scss"
import pink_heart from "../images/pink_heart.svg"


class Action extends Component{
    render(){
        return(
            <div className={styles.action}>
                <div className={styles.time}>{new Date().getDate()}</div>
                Image ID: fQSunHvl8 was added to Favourites
                <img className={styles.smile} src={pink_heart} alt=""/>
                
              </div>
        )
    }
}

export default Action