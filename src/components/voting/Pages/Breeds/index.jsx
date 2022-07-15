import { Component, Fragment } from 'react';
import styles from '../Breeds/index.module.scss';
import Grid10 from 'components/Grids/grid10';
import Grid5 from 'components/Grids/gtid5';

class Breeds extends Component {
  state = {
    page: 1,
    prevStatus: false,
    nextStatus: false,
    limit: 5,
  };

  changeLimit = e => {
    if (e.target.value === '5') {
      this.setState({ limit: 5, page: 1 });
    } else if (e.target.value === '10') {
      this.setState({ limit: 10, page: 1 });
    } 
  }

  goToPrev = () => {
    this.setState(prev => ({ page: prev.page - 1 }));
  };

  goToNext = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  getElementsForGrid5 = () => {
    let grouped_array = [];
    let inside_array = [];
    for (let i = 0; i < this.props.items.length; i++) {
      if (inside_array.length === 5) {
        grouped_array.push(inside_array);
        inside_array = [];
      } else {
        inside_array.push(this.props.items[i]);
      }
    }
    grouped_array.push(inside_array);
    console.log(grouped_array);
    return grouped_array
  };
  render() {
    const { showElementByName } = this.props;

    return (
      <Fragment>
        <div className={styles.menu}>
          <button
            type="button"
            className={styles.back}
            onClick={() => {
              this.getElementsForGrid5();
            }}
          ></button>
          <button
            type="button"
            className={styles.button}
            onClick={() => {
              this.getElementsForGrid5();
            }}
          >
            VOTING
          </button>
          <select
            onChange={e => {
              showElementByName(e);
            }}
            className={styles.all}
          >
            <option value="All items">All items</option>
            {this.props.items.map(el => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>

          <select
            onChange={e => {
              this.changeLimit(e);
            }}
            className={styles.limit}
          >
            <option value="5">Limit:5</option>
            <option value="10">Limit:10</option>
            <option value="15">Limit:15</option>
            <option value="20">Limit:10</option>
          </select>

          <button
            type="button"
            className={styles.button_sort + ' ' + styles.button_sort_down}
          ></button>
          <button
            type="button"
            className={styles.button_sort + ' ' + styles.button_sort_down}
          ></button>
        </div>

        {this.state.limit === 10 && (
          <Fragment>
            <Grid10
              goToNext={this.goToNext}
              goToPrev={this.goToPrev}
              page={this.state.page}
              items={this.getElementsForGrid5()}
            />
            <div className={styles.button_container}>
              <button
                className={styles.pages + ' ' + styles.pages_prev}
                disabled={this.state.page === 1}
                onClick={e => {
                  this.goToPrev(e);
                }}
              >
                PREV
              </button>

              <button
                className={styles.pages + ' ' + styles.pages_next}
                disabled={this.state.page === 5}
                onClick={e => {
                  this.goToNext(e);
                }}
              >
                NEXT
              </button>
            </div>
          </Fragment>
        )}

        {this.state.limit === 5 && (
          <Fragment>
            <Grid5
              goToNext={this.goToNext}
              goToPrev={this.goToPrev}
              page={this.state.page}
              items={this.getElementsForGrid5()}
            />
            <div className={styles.button_container}>
              <button
                className={styles.pages + ' ' + styles.pages_prev}
                disabled={this.state.page === 1}
                onClick={e => {
                  this.goToPrev(e);
                }}
              >
                PREV
              </button>

              <button
                className={styles.pages + ' ' + styles.pages_next}
                disabled={this.state.page === 12}
                onClick={e => {
                  this.goToNext(e);
                }}
              >
                NEXT
              </button>
            </div>
          </Fragment>
        )}
      </Fragment>
    )
  }
}

export default Breeds;
