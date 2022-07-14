import { Component, Fragment } from 'react';
import styles from '../voting/index.module.scss';
import Search from 'components/Search';
import Action from 'components/Actions';
import like from '../images/like.svg';
import favorities from '../images/favorities.svg';
import dislike from '../images/dislike.svg';

class Voting extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.right}>
          <Search />
          <div className={styles.page_voting}>
            <div>
              <button className={styles.back}>H</button>
              <button className={styles.button}>VOTING</button>
            </div>

            <div className={styles.page}>
              <div className={styles.image_container}>
                {/* <img
                  className={styles.ava}
                  src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
                  alt=" "
                /> */}
              </div>
              <div className={styles.voting_button}>
                <div className={styles.like}>
                  
                </div>
                <div className={styles.favorities}>
                  
                </div>
                <div className={styles.dislike}>
                   </div>
              </div>
              <Action />
              <Action />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Voting;
