import { Component } from "react";
import styles from "../Search/index.module.scss"

class Search extends Component{


    render(){
        return(
            <div className={styles.tools}>
            <input className={styles.search} type="text" />
            <button className={styles.button +" "+styles.button_smile}></button>
            <button className={styles.button +" "+styles.button_heart}></button>

            <button className={styles.button +" "+styles.button_upset_smile}></button>
            
          </div>
        )
    }
}

export default Search;