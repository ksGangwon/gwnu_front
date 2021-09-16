import React, {Component} from 'react';
// import {CKEditor} from '@ckeditor/ckeditor5-react';
import postRequest from "../../lib/PostRequest";
import Select from 'react-select';
import './Post.css'
import Editor from "./Editor";
import AttachedFile from "./AttachedFile";
import { withRouter } from 'react-router-dom';
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
            id:0,
            title: "",
            description:"",
            category:null,
            selected:null,
            files:[],
            filesData:[],
            urlArray:[],
            filesCount:0,
            isModalOn: false,
            divideTitle:"공지사항"
          }; 
      }

    componentDidMount(){

        //게시물 카테고리
        if(this.props.location.divide===2){
            this.setState({divideTitle:"교육 및 사업안내"})
        } else if(this.props.location.divide===3){
            this.setState({divideTitle:"보도자료"})
        } else if(this.props.location.divide===4){
            this.setState({divideTitle:"포토갤러리"})
        } else if(this.props.location.divide===4){
            this.setState({divideTitle:"자료실"})
        }

        //게시물 수정 시, 저장된 데이터 불러옴
        if(this.props.location.state==="edit"){
            const {id, title, description, category} = this.props.location.data;
            const setCategory = {value:category, label:category}

            this.setState({id:id})
            this.setState({title:title})
            this.setState({category:setCategory})
            this.setState({selected:category})
            this.setState({description:description})
        }
    }

    //게시물 등록 이벤트
    componentDidUpdate(_prevProps,prevState){
        if(prevState.urlArray.length !== this.state.urlArray.length){
            if(this.state.urlArray.length===this.state.files.length){
                const {title,description,selected,files,urlArray} = this.state;
                const divide = this.props.location.divide;

                const resultPost = postRequest.addPost(title, description, selected, files, urlArray, divide);
                    
                resultPost.then(result=>{
                    if(result){ 
                        alert("게시물 작성 성공")
                        window.location.replace(`/#/page/notion/${divide}`)
                    } else {
                        alert("게시물 저장에 실패했습니다")
                    }
                }) 
            }
        }
    }

    //use react-select
    handleCategory = (category) => {
        this.setState({ category:category });
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

        console.log(editor.editing.model.fileName)

        this.setState( {
            description: value
        } );

        if(editor.editing.model.fileName!==undefined && this.state.files.indexOf(editor.editing.model.fileName)<0){
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


        if(this.state.files.length!==0){
            const findFile = this.state.files.map(async (file)=>{
                let listFile = await postRequest.findFile(file);
                console.log(listFile)
                if(listFile.fail){
                    alert(file+"\n같은 이름의 파일이 서버에 존재합니다. 첨부파일 삭제 후, 파일 이름을 변경해 다시 업로드 해주세요.");
                    this.setState({
                        isModalOn: true,
                    })
                    document.body.style.overflow = "hidden"; 
                } else{
                    const resultFile = this.state.filesData.map(async(file)=>{
                        let awsFile = await postRequest.upload(file);
                        console.log(awsFile);
                        this.setState({
                            urlArray: this.state.urlArray.concat(awsFile),
                        })
                    })
                }
            })


        } else{
            const {title,description,selected,files,urlArray} = this.state;
            const divide = this.props.location.divide;

            const resultPost = postRequest.addPost(title, description, selected, files, urlArray, divide);
                    
            resultPost.then(result=>{
                console.log(result)
                if(result){ 
                    alert("게시물 작성 성공")
                    window.location.replace(`/#/page/notion/${divide}`)
                } else {
                    alert("게시물 저장에 실패했습니다")
                }
            })
        } 
    };

    updatePost = () =>{
        const {title,description,selected,files,urlArray} = this.state;
        const divide = this.props.location.divide;
        
        const resultPost = postRequest.updatePost(title, description, selected, files, urlArray);
            
        resultPost.then(result=>{
            if(result.id!==undefined){
                alert("게시물 수정 성공")
                window.location.replace(`/#/page/notion/${divide}`)
            } else{
                alert("게시물 수정에 실패했습니다")
            }
        })
    }

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

    removeFile = (file) =>{
        let fileIndex = this.state.files.indexOf(file)
        this.state.files.splice(fileIndex,1)
        this.state.filesData.splice(fileIndex,1)
        this.setState({filesCount:this.state.filesCount-1})
    }
    
    render(){
        return(
            <div className="contentContainer">
                <div className="contentHeader">
                    <h1>{this.state.divideTitle} 글쓰기</h1>
                    <div className="middle"></div>
                    {this.props.location.state==="write"?
                    (<button onClick={this.submitPost}>등록</button>):
                    <button onClick={this.updatePost}>등록</button>
                    }
                    <div className="clear"></div>
                </div>

                <div>
                    <div className="contentMain">
                        <Select
                            className="selectCategory"
                            value={this.state.category}
                            placeholder={'카테고리를 선택하세요'}
                            onChange={this.handleCategory} 
                            options={options}/>
                        <button className="addFile" onClick={this.onModal}>첨부파일 {this.state.filesCount}</button>
                        <AttachedFile
                            isModalOn={this.state.isModalOn}
                            offModal={this.offModal}
                            files={this.state.files}
                            removeFile={this.removeFile}
                        />
                        <div className="clear"></div>
                        <input className="titleInput" type='text' value={this.state.title} placeholder='제목을 입력하세요' onChange={this.getTitle}/>
                        {this.props.location.state==="edit"?(
                            <Editor
                            data={this.props.location.data.description}
                            onChange={this.handleEditorDataChange}
                            />):
                            <Editor
                            onChange={this.handleEditorDataChange}
                            />
                        }
                    </div>
            </div>
        </div>

            
        )
    }
}

export default withRouter(Post);