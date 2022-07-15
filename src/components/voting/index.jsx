import { Component, Fragment } from 'react';
import styles from '../voting/index.module.scss';
import Search from 'components/Search';
import Breeds from './Pages/Breeds';
import PropTypes from 'prop-types';
import RightDefaulf from 'components/Starting';
import Like from 'components/Like_dislike';

import VotingPage from './Voting_page';
import PersonalPage from 'components/PersonalPage';

class Voting extends Component {
  static propTypes = {
    page_id: PropTypes.string.isRequired,
  };

  render() {
    const {
      page_id,
      person,
      addHistory,
      showFavorities,
      history,
      items,
      favourities,
      likes,
      dislikes,
      showElementByName,
    } = this.props;
    return (
      <Fragment>
        <div className={styles.right}>
          <Search showFavorities={showFavorities} />
          <div className={styles.page_voting}>
            {page_id === 'breeds' && (
              <Breeds showElementByName={showElementByName} items={items} />
            )}
            {page_id === 'voting' && (
              <VotingPage
                history={history}
                items={items}
                addHistory={addHistory}
              />
            )}
            {page_id === 'gallery' && 'Gallery'}
            {page_id === 'gefault' && <RightDefaulf />}
            {page_id === 'favourite' && (
              <Like title="FAVOURITES" items={favourities} />
            )}
            {page_id === 'likes' && <Like title="LIKES" items={likes} />}
            {page_id === 'favorities' && (
              <Like title="favorities" items={dislikes} />
            )}
            {page_id === 'dislikes' && (
              <Like title="DISLIKES" items={dislikes} />
            )}
            {page_id === 'personal' && <PersonalPage person={person} />}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Voting;
