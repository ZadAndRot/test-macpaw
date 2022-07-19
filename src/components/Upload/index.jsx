import axios from 'axios';
import { Component, Fragment } from 'react';
import styles from '../Upload/index.module.css';

class Upload extends Component {
  state = {
    files: [],
    images: null,
  };
  componentDidMount() {
    const forma = document.querySelector('form');
    const inp = forma.querySelector('input');
    forma.addEventListener('click', () => {
      inp.click();
    });
  }

  removeFile = filename => {
    this.setState(prev => ({
      files: prev.files.filter(file => file.name !== filename),
    }));
  };

  handleGetFile = e => {
    let file = e.target.files[0];
    this.setState({ images: URL.createObjectURL(file) });
    
    file.isUploadung = true;
    this.setState(prev => ({ files: [...prev.files, file] }));

    const formData = new FormData();
    formData.append(file.name, file, file.name);

    axios
    
    .post('https://ZadAndRot.github.io/test-macpaw/upload', formData)
      // .post('http://localhost:8080/upload', formData)
      .then(res => {
        file.isUploadung = false;
        this.setState(prev => ({ files: [...prev.files, file] }));
      })
      .catch(err => {
        console.error(err);
        this.removeFile(file.name);
      });

    console.log(this.state.files);
  };

  render() {
    return (
      <Fragment>
        <div className={styles.modal_back}>
          <div className={styles.modal_body}>
            <p className={styles.h1}>Upload a .jpg or .png Cat Image</p>
            <p className={styles.h2}>
              Any uploads must comply with the{' '}
              <span style={{ color: 'red' }}>upload guidelines</span> or face
              deletion.
            </p>
            {this.state.images}
            <form className={styles.desc}>
             
              {this.state.images && (
                <img
                  className={styles.image_uploaded}
                  src={this.state.images}
                  alt="no photo"
                />
              )}
              <input
                hidden
                className={styles.hidden}
                onChange={e => {
                  this.handleGetFile(e);
                }}
                type="file"
              />
              <p className={styles.h2}>
                <b style={{ color: 'black' }}>Drag here</b> your file or{' '}
                <b style={{ color: 'black' }}> Click here</b> to upload
              </p>
            </form>
            <p className={styles.h2}>No file selected</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Upload;
