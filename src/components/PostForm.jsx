import MyInput from "./UI/input/MyInput";
import MyBtn from "./UI/button/MyBtn";
import React, {useState} from "react";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', description: ''})


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', description: ''})          // обнуляем поля инпута
        console.log(post)
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                value={post.description}
                onChange={e => setPost({...post, description: e.target.value})}
                type="text"
                placeholder="Тело поста"
            />
            <MyBtn onClick={addNewPost}>Создать пост</MyBtn>
        </form>
    )
}

export default PostForm