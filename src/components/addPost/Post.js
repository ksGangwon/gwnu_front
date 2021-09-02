import React, {Component} from 'react';
// import {CKEditor} from '@ckeditor/ckeditor5-react';
import postRequest from "../../lib/PostRequest";
import Select from 'react-select';
import './Post.css'
import Editor from "./Editor";
import AttachedFile from "./AttachedFile";
import "./ckContent.css";

const options = [
    { value: '임의 카테고리1', label: '임의 카테고리1' },
    { value: '임의 카테고리2', label: '임의 카테고리2' },
    { value: '임의 카테고리3', label: '임의 카테고리3' },
  ];

class Post extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description:"",
            category:null,
            selected:null,
            files:[],
            filesData:[],
            filesCount:0,
            isModalOn: false,
          }; 
      }

    //use react-select
    handleCategory = (category) => {
        this.setState({ category });
        this.setState({ selected:category.value });
        console.log(`Option selected:`, category);
      };

    //use ckeditior
    getTitle = e => {
        const { value } = e.target;
        this.setState({title:value})
    };
    handleEditorDataChange= ( event, editor ) => {
        
        let value = editor.getData();

        console.log(editor.editing.model.fileData)

        this.setState( {
            description: value
        } );

        if(editor.editing.model.fileName!=undefined && this.state.files.indexOf(editor.editing.model.fileName)<0){
            this.setState({
                files: this.state.files.concat(editor.editing.model.fileName),
                filesData : this.state.filesData.concat(editor.editing.model.fileData),
                filesCount : this.state.filesCount+1
            } );
        }

        console.log({ event, editor, value });
    }

    submitPost = () => {

        if (this.state.category === null) {
            alert("카테고리를 선택해주세요.");
            return;
          } else if (this.state.title === "") {
            alert("제목 입력해주세요.");
            return;
          } else if(this.state.description === ""){
              alert("내용을 입력해주세요")
          }
  
        const resultFile = this.state.filesData.map(async(file)=>{
            let awsFile = await postRequest.upload(file);
            // return awsFile
        })
        const resultPost = postRequest.addPost(this.state.title, this.state.description, this.state.selected)
        

        resultPost.then(result=>{
            if(result.message){ 
                console.log("게시물 작성 성공")
            } else {
                alert("게시물 저장에 실패했습니다")
            }
        })  
    };

    onModal = () => {
        this.setState({
            isModalOn: true,
        })
        document.body.style.overflow = "hidden"; 
    };

    offModal = () => {
        this.setState({
            isModalOn: false,
        })
        document.body.style.overflow = "unset";
    };
    
    render(){
        const { category } = this.state;
        return(

            <div className="contentContainer">
                <div className="contentHeader">
                    <h1>관리자 글쓰기</h1>
                    <div className="middle"></div>
                    <button onClick={this.submitPost}>등록</button>
                    <div className="clear"></div>
                </div>

                <div>
                    <div className="contentMain">
                        <Select
                            className="selectCategory"
                            value={category}
                            placeholder={'카테고리를 선택하세요'}
                            onChange={this.handleCategory} 
                            options={options}/>
                        <button className="addFile" onClick={this.onModal}>첨부파일 {this.state.filesCount}</button>
                        <AttachedFile
                            isModalOn={this.state.isModalOn}
                            offModal={this.offModal}
                            files={this.state.files}
                        />
                        <div className="clear"></div>
                        <input className="titleInput" type='text' placeholder='제목을 입력하세요' onChange={this.getTitle}/>
                        <Editor
                            onChange={this.handleEditorDataChange}
                        />
                    </div>
            </div>
        </div>

            
        )
    }
}

export default Post;