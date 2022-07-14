import { Component } from "react";
import styles from "../Search/index.module.scss"
import search_img from "../images/search.svg"

class Search extends Component{


    render(){
        return(
            <div className={styles.tools}>
            <div className={styles.input_container}>
            <input placeholder="Search for breeds by name" className={styles.search} type="text" /><img className={styles.search_img} src={search_img} alt="" />
            </div>
            
            <button className={styles.button +" "+styles.button_smile}></button>
            <button className={styles.button +" "+styles.button_heart}></button>

            <button className={styles.button +" "+styles.button_upset_smile}></button>
            
          </div>
        )
    }
}

export default Search;