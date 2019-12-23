import React, { Component, Fragment } from 'react';
import './BlogPost.css'
import Post from '../../../component/Post/Post';
import axios from 'axios'; 

export default class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc').then((res) => {
            this.setState({ 
                post: res.data
            })
        })
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }
    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            this.getPostAPI()
        })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost).then((res) => {
            console.log(res);
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
            }) 
        }, (err) => {
            console.log('Error', err); 
        })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then(res => {
            console.log(res);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
            })
        })
    }

    handleFormChange = (event) => {
        // console.log('Form Change', event.target)
        let formBlogPostNew = {...this.state.formBlogPost}
        let timestamp = new Date().getTime()
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value

        // console.log('Init State',  this.state.formBlogPost )
        // console.log('New Value',  formBlogPostNew)
        // let title = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            // console.log('Value Object FormBlogPost', this.state.formBlogPost)
        })  
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToAPI();
        } else {
            this.postDataToAPI();
        } 
        // console.log(this.state.formBlogPost)
    }

    handleDetail = (id ) => {
        this.props.history.push(`/detail-post/${id}`);
    }

    componentDidMount(){
        this.getPostAPI();
        // ====== Start GET API With Fetch =======
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json 
        //     })
        // })
        // ====== End GET API With Fetch =======  

        // ====== Start GET API With Axios ======= 
        // axios.get('http://localhost:3004/posts').then((res) => {
        //     this.setState({ 
        //         post: res.data
        //     })
        // })
        // ====== End GET API With Axios =======

    }

    render() {
        return (
            <Fragment>
                <p> Fragment Page </p>
                <hr/>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="Add Title" onChange={this.handleFormChange}/>
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="10" rows="10" value={this.state.formBlogPost.body} placeholder="add blog content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>    
                </div>
                <p className="section-title"> Blog Post </p>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}/> 
                        // return <Post key={post.id} title={post.title} desc={post.body} />
                    })
                }
            </Fragment>
        )
    }
}
