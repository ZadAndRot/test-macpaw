import { Component } from "react";
import styles from "../Actions/index.module.scss"



class Action extends Component{
   
    render(){
        const {text,image}=this.props
        return(
            <div className={styles.action}>
                <div className={styles.time}>{new Date().getHours().toLocaleString()+":"+new Date().getMinutes().toLocaleString()}</div>
                {text}
                <img className={styles.smile} src={image} alt=""/>
                
              </div>
        )
    }
}

export default Action