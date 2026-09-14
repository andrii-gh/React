import BlogCard from "../components/BlogCard";
import blogs from "../data/blogs.json";

function Blog() {
    return (
        <>
            <h1>Записи блогу</h1>
            <div style={{ maxWidth: "600px" }}>
                {blogs.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </>
    );
}

export default Blog;