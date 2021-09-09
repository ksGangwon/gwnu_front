import React, { Component} from 'react';
import ReactDOM from "react-dom";
import './GalleryWrite.css'
class GalleryWrite extends Component {
    register = (regiInfo) => {
        fetch('http://localhost:3001/users/account', {
          method:'post',
          body: regiInfo
        })
        .then(res => res.json())
        .then(data => alert(data.msg))
      }
      
    render() {
        
        return (
            <div className="galleryWrite">
                <form method="post" enctype="multipart/form-data">
                    <div className="galleryWriteTitle">
                        <p>제목 :</p>
                        <input type="text" name="title"/>
                    </div>
                    <div className="galleryWriteText">
                        <p>내용 :</p>
                        <textarea name="body" rows="20"></textarea>
                    </div>
                    <div className="galleryUploadBox">
                    <label for="galleryUpload">이미지 업로드</label>
                    <input  
                        type='file' 
                        className="imgInput"
                        accept='image/*'  
                        id="galleryUpload"
                        name="imageFile"
                        >
                    </input>
                        <input type="submit" value="제출" className="gallerySubmit"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default GalleryWrite;