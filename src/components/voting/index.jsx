import { Component, Fragment } from 'react';
import styles from '../voting/index.module.scss';
import Search from 'components/Search';
import Breeds from './Pages/Breeds';
import PropTypes from 'prop-types';
import RightDefaulf from 'components/Starting';

import VotingPage from './Voting_page';

class Voting extends Component {
  

  static propTypes = {
    page_id: PropTypes.string.isRequired,
  };

  

  render() {
    const { page_id ,addHistory} = this.props;
    return (
      <Fragment>
        <div className={styles.right}>
          <Search />
          <div className={styles.page_voting}>
            {page_id === 'breeds' && <Breeds />}
            {page_id === 'voting' && <VotingPage history={this.props.history} items={this.props.items} addHistory={addHistory}/>}
            {page_id === 'gallery' && "Gallery"}
            {page_id === 'gefault' && <RightDefaulf />}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Voting;
