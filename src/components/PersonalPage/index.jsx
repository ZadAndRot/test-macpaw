import styles from '../PersonalPage/index.module.scss';
import { Component } from 'react';
import { Fragment } from 'react';

class PersonalPage extends Component {
  render() {
    const { person } = this.props;
    return (
      <Fragment>
        <div className={styles.menu}>
          <button
            type="button"
            className={styles.back}
            onClick={() => {
              this.props.onGoBack();
            }}
          >
            H
          </button>
          <button type="button" className={styles.button}>
            BREEDS
          </button>
          <button type="button" className={styles.button + ' ' + styles.id}>
            {person.id}
          </button>
        </div>

        <div className={styles.page}>
          <div className={styles.image_container}>
            <img
              className={styles.ava}
              src={person.image.url}
              alt={person.name}
            />
          </div>
        </div>
        <div className={styles.scroll}>
          <div className={styles.circle}></div>
          <div className={styles.circle + ' ' + styles.active}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>

        <div>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{person.name}</legend>
            <p className={styles.description}>{person.description}</p>
            <div className={styles.inform}>
              <div className={styles.section}>
                <p className={styles.value}>
                  <span className={styles.key}>Temperament</span>
                  {person.temperament}
                </p>
              </div>

              <div className={styles.section}>
                <p className={styles.value}>
                  <span className={styles.key}>Origin:</span>
                  {person.origin}
                </p>
                <p className={styles.value}>
                  <span className={styles.key}>Weight:</span>
                  {person.weight.imperial}
                </p>
                <p className={styles.value}>
                  <span className={styles.key}>Life span:</span>
                  {person.life_span}
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </Fragment>
    );
  }
}

export default PersonalPage;
