import { Component } from 'react';
import styles from '../Search/index.module.scss';

class Search extends Component {
  state = {
    value: '',
  };

  render() {
    const { showFavorities, onInputClicked, onOpenMenu } = this.props;

    return (
      <div className={styles.tools}>
        <button
          onClick={() => {
            onOpenMenu();
          }}
          className={styles.burger}
        ></button>
        <form
          onSubmit={e => {
            onInputClicked(this.state.value, e);
            this.setState({ value: '' });
          }}
          className={styles.input_container}
        >
          <input
            onClick={() => showFavorities('search')}
            onChange={e => this.setState({ value: e.target.value })}
            value={this.state.value}
            placeholder="Search for breeds by name"
            className={styles.search}
            type="text"
          />
          <button type="submit" alt=""></button>
        </form>

        <button
          active={true}
          onClick={() => {
            showFavorities('likes');
          }}
          className={styles.button + ' ' + styles.button_smile}
        ></button>
        <button
          onClick={() => {
            showFavorities('favourite');
          }}
          className={styles.button + ' ' + styles.button_heart}
        ></button>

        <button
          onClick={() => {
            showFavorities('dislikes');
          }}
          className={styles.button + ' ' + styles.button_upset_smile}
        ></button>
      </div>
    );
  }
}

export default Search;
