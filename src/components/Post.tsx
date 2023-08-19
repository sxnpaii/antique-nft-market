// routes
import { blog } from "../utils/routes";
// utils
import { slug } from "../utils/utils";
// styles
import "../styles/components-style/Post.scss";


const Post = ({ post }) => {
    return (
        <div class="Post">
            <img src={post.img} alt={post.title} />
            <h6>{post.title}</h6>
            <p>{post.description}</p>
            <a href={blog.posts + slug(post.title)}>Read More</a>
        </div>
    )
}

export default Post

