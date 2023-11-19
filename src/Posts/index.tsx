import { Dialog, Button } from "@mui/material";
import { useState } from "react";

interface IPost {
    id: number;
    text: string;
}

const Posts = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const [posts, setPosts] = useState<IPost[]>([])
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const savePost = () => {
        setPosts([...posts, { id: Math.random() * 10000, text: inputValue }])
    }

    const onChange = (event: any) => {
        setInputValue(event.target.value)
    }

    const onDelete = (id: number) => {
        const newPosts = posts.filter((post) => post.id !== id)

        setPosts(newPosts)
    }

    const onOpen = () => {
        setIsOpen(true)
    }

    const onClose = () => {
        setIsOpen(false)
    }

    console.log(posts)
    return (
        <div>
            <h1 className="text-center">Posts</h1>
            <div className="input__wrap">
                <input onChange={onChange} type="text" />
                <button onClick={savePost}>Save post</button>
            </div>
            {posts.map((post) => {
                return (
                    <h2 key={post.id}>
                        {post.text} <button onClick={() => onDelete(post.id)}>X</button>
                        <button onClick={onOpen}>Редактировать</button>
                    </h2>
                )
            })}

            <Dialog sx={{ padding: '50px 20px' }} open={isOpen}>
                <h2 style={{ margin: '20px 50px' }}>Отредактировать пост</h2>
                <Button onClick={onClose} sx={{ margin: '20px' }}>Отменить</Button>
            </Dialog>

        </div >
    );
}

export default Posts;
