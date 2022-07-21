import { Component, Fragment } from 'react';
import styles from '../voting/index.module.scss';
import Search from 'components/Search';
import Breeds from './Pages/Breeds';
import PropTypes from 'prop-types';
import RightDefaulf from 'components/Starting';
import Like from 'components/Like_dislike';
import SearchResults from 'components/SearchResults';
import VotingPage from './Voting_page';
import PersonalPage from 'components/PersonalPage';
import Gallery from './Gallery';
class Voting extends Component {
  static propTypes = {
    page_id: PropTypes.string.isRequired,
  };

  render() {
    const {
      page,
      onGoBack,
      all,
      updatePage,
      updateLimit,
      handleOrderItems,
      status,
      uploadedFiles,
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
      open_modal,
      onInputClicked,
      searched,
    } = this.props;
    return (
      <Fragment>
        <div className={styles.right}>
          <Search
            showFavorities={showFavorities}
            onInputClicked={onInputClicked}
          />
          <div className={styles.page_voting}>
            {page_id === 'breeds' && (
              <Breeds
                onGoBack={onGoBack}
                all={all}
                updateLimit={updateLimit}
                updatePage={updatePage}
                handleOrderItems={handleOrderItems}
                status={status}
                showElementByName={showElementByName}
                items={items}
                page={page}
              />
            )}
            {page_id === 'search' && (
              <SearchResults onGoBack={onGoBack} searched={searched} />
            )}
            {page_id === 'voting' && (
              <VotingPage
                onGoBack={onGoBack}
                history={history}
                items={all}
                addHistory={addHistory}
              />
            )}
            {page_id === 'gallery' && (
              <Gallery
                onGoBack={onGoBack}
                showElementByName={showElementByName}
                all={all}
                addHistory={addHistory}
                uploadedFiles={uploadedFiles}
                open_modal={open_modal}
              />
            )}
            {page_id === 'gefault' && <RightDefaulf />}
            {page_id === 'favourite' && (
              <Like
                onGoBack={onGoBack}
                addHistory={addHistory}
                text="favorities"
                title="FAVOURITES"
                items={favourities}
              />
            )}
            {page_id === 'likes' && (
              <Like
                onGoBack={onGoBack}
                addHistory={addHistory}
                text="likes"
                title="LIKES"
                items={likes}
              />
            )}

            {page_id === 'dislikes' && (
              <Like
                onGoBack={onGoBack}
                addHistory={addHistory}
                text="dislikes"
                title="DISLIKES"
                items={dislikes}
              />
            )}
            {page_id === 'personal' && (
              <PersonalPage onGoBack={onGoBack} person={person} />
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Voting;
