// routes
import { blog } from "../utils/routes";
// styles
import "../styles/components-style/Post.scss";
// types
import { Posts } from "../utils/types";


const Post = ({ post }: { post: Posts }) => {
    return (
        <div class="Post">
            <a href={post.path}>
                <img src={post.img_url} alt={post.title} />
            </a>
            <h6>{post.title}</h6>
            <p>{post.description}</p>
            <a href={blog.main + post.path}>Read More</a>
        </div>
    )
}

export default Post