function BlogCard({ post }) {
    return (
        <div style={{ border: "1px solid gray", padding: "15px", marginBottom: "15px" }}>
            <h2>{post.title}</h2>
            <p style={{ color: "gray", fontSize: "0.9em" }}>Опубліковано: {post.date}</p>
            <p>{post.content}</p>
            <div style={{ marginTop: "10px" }}>
                {post.tags.map((tag) => (
                    <span key={tag} style={{ marginRight: "8px", background: "#eee", padding: "4px 8px", borderRadius: "4px" }}>
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default BlogCard;