import React, {Fragment} from 'react';
import FileUpload from './components/FileUpload';
import FileUploadFirebase from './components/FileUploadFirebase';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <div className="container mt-4">
        <h4 className="display-4 text-center mb-4">
          <i className="fab fa-react" />React file upload in FOLDER
        </h4>

        <FileUpload />
      </div>
      <div className="container mt-4">
        <h4 className="display-4 text-center mb-4">
          <i className="fab fa-react" />React file upload in FIREBASE
        </h4>
        <div className="text-right mb-4">
          <h5>Storage image in firebase</h5>
        </div>

        <FileUploadFirebase />
      </div>
    </Fragment>
  )
}

export default App;