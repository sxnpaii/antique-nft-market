// routes
import { blog } from "../utils/routes";
// styles
import "../styles/components-style/Post.scss";
// types
import { Posts } from "../utils/types";


const Post = ({ post }: { post: Posts }) => {
    return (
        <div class="Post">
            <img src={post.img_url} alt={post.title} />
            <h6>{post.title}</h6>
            <p>{post.description}</p>
            <a href={blog.posts + post.path}>Read More</a>
        </div>
    )
}

export default Post

