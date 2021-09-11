import React, { Component } from "react";
import "./AttachedFile.css";

class AttachedFile extends Component {

  removeFile = (file) =>{
    this.props.removeFile(file)
  }
 
  render() {
    const { isModalOn, offModal, files } = this.props;

    return (
      <>
        {isModalOn ? (  
          <div className="modal">
            <div onClick={offModal}>
              <div className="fileModal" onClick={(e)=> e.stopPropagation()}>
                <span className="close" onClick={offModal}>
                  &times;
                </span>
                <div className="modalContents">
                  <h2 className="modalHeader">첨부파일</h2>
                  
                  {files!==[]?(
                    files.map((file,index) => 
                    <div className="fileContents" key={index}>
                        {file}
                        &nbsp;  &nbsp; &nbsp; &nbsp;
                        <button className="removeBtn" onClick={()=>{this.removeFile(file)}}>삭제</button>
                    </div>)
                    ):null
                  }
                </div>
              </div>
            </div>
        </div>
        ) : null}
      </>
    );
  }
}

export default AttachedFile;