import { Component, Fragment } from 'react';
import girl from '../../components/images/girl_catches_cat.svg';
import styles from '../Starting/index.module.scss';

class RightDefaulf extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.right}></div>
        <img alt="" className={styles.girl} src={girl} />
      </Fragment>
    );
  }
}

export default RightDefaulf;
