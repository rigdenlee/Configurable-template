import React, { Component } from 'react';
import {storage} from '../../firebase';
import { connect } from 'react-redux';
import AdminNav from './AdminNav';

class UpdateLogo extends Component {
    state = {
        image: null,
        url: ''
    };

    handleChange = e => {
        if(e.target.files[0]) {
            const image = e.target.files[0];
            this.props.onHandleChange(image);
            console.log('image ready to upload');
        }
    }

    handleUpload = () => {
        const {image} = this.state;
        console.log(this.props.image);
        const uploadTask = storage.ref(`carousel/${image.name}`).put(image);
        uploadTask.on('state_changed', (snapshot) => {
            //Progress
            console.log(snapshot);
        }, (error) => {
            //Error
            console.log(error);
        }, () => {
            //Completed
            storage.ref('carousel').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                console.log(this.state.image);
                this.props.onHandleUpload(url);
            })
        });
    }

    render() {
        return (
            <div>
                <AdminNav />
                <input type="file" onChange={this.handleChange} />
                <button onClick={this.handleUpload}>Upload</button>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         image: state.image,
//         url: state.url
//     };
// }

const mapDispatchToProps = dispatch => {
    return {
      onHandleUpload: (url) => dispatch({type: 'UPLOAD', propUrl: url}),
      onHandleChange: (image) => dispatch({type: 'LOADPHOTO', propImage: image})
    }
};

export default connect(null, mapDispatchToProps)(UpdateLogo);

// export default UpdateLogo;