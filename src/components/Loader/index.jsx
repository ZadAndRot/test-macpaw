import { Component } from 'react';
import styles from '../Loader/index.module.scss';

class Loader extends Component {
  render() {
    return <div className={styles.loader}></div>;
  }
}

export default Loader;
