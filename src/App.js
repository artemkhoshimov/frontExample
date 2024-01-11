import React, {useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'cccc', description: 'bbbb'},
        {id: 2, title: 'bbbb', description: 'aaaaa'},
        {id: 3, title: 'aaaa', description: 'ccc'}
    ])

    const options = [
        {value: 'title', name: 'по названию'},
        {value: 'description', name: 'по описанию'}
    ]
    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts.sort((a, b) =>
            a[sort].localeCompare(b[sort]))])
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <MySelect
                onChange={sortPosts}
                options={options}
                defaultValue='Сортировка'/>
            {posts.length > 0
                ? <PostList remove={removePost} posts={posts} title='Посты про js'/>
                :
                <h1 style={{textAlign: 'center'}}>
                    Empty list
                </h1>}
        </div>
    );
}

export default App;
