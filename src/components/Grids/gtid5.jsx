import { Component, Fragment } from 'react';
import styles from '../Grids/index.module.scss';

class Grid5 extends Component {
  state = { page: this.props.page };
  hover = e => {
    e.currentTarget.children[0].classList.add(styles.hovered);
  };

  leave = e => {
    e.currentTarget.children[0].classList.remove(styles.hovered);
  };

  


  render() {
    const { items, page } = this.props;
    console.log(items[0]);

    console.log(items[7]);

    let new_array = [...items[page - 1]];

    return (
      <Fragment>
        <div>
          {new_array ? (
            <div className={styles.grid_container}>
              {new_array.map(el => (
                <div 
                onMouseOver={e => {
                    this.hover(e);
                  }}
                  onMouseLeave={e => {
                    this.leave(e);
                  }}
                  key={new_array.indexOf(el)}
                  className={
                    styles.item
                    // "Grids_item"+new_array.indexOf(el)+"_img__zoSpvGrids_item__Y64RUGrids_item__Y64RU"
                  }
                >
                    <div className={styles.hovered_div}><span className={styles.hovered_text}>{el.name}</span></div>
                  <img
                    className={styles.item_img}
                    src={el.image.url}
                    alt="hello"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </Fragment>
    );
  }
}

export default Grid5;
