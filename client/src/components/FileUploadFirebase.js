import React, { Fragment, useState } from 'react';
import { storageRef } from '../firebase';
import Message from './Message';
import Progress from './Progress';

const FileUploadFirebase = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename('image-firebase' + Date.now());
  };

  const onSubmit = async e => {
    e.preventDefault();

    let uploadTask = storageRef.child(`images/${filename}`).put(file);

    uploadTask.on('state_changed',
      (snapshot) => {
        setUploadPercentage(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));

        setTimeout(() => setUploadPercentage(0), 5000);
      }, 
      (error) => {
        console.log(error);
        setMessage(error);
      }, 
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          // console.log('File available at', downloadURL);
          setUploadedFile({ filename, downloadURL });
          setMessage('Upload File Complete');
          setTimeout(() => setMessage(''), 5000);
        });
      }
    );
  };

  return (
    <Fragment>
      {
        message ? <Message msg={message} /> : null
      }
      <form onSubmit={onSubmit} >
        <div className="custom-file mb-4">
          <input type="file" className="custom-file-input" id="customFile" onChange={onChange}/>
          <label className="custom-file-label" htmlFor="customFile">{filename}</label>
        </div>

        <Progress percentage={uploadPercentage} />

        <div className="col-3 mx-auto">
          <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" />
        </div>
      </form>
      {
        uploadedFile ? <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="text-center">{ uploadedFile.filename }</h3>
            <img style={{ width: '100%' }} src={uploadedFile.downloadURL} alt="" />
          </div>
        </div> : null
      }
    </Fragment>
  )
}

export default FileUploadFirebase;