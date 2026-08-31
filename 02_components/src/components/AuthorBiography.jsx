function AuthorBiography({ author }) {
    return (
        <div className="content-card" style={{ marginBottom: '20px', textAlign: 'left' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <img 
                    src={author.image} 
                    alt={author.name} 
                    style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} 
                />
                <div>
                    <h2>{author.name}</h2>
                    <p>{author.biography}</p>
                </div>
            </div>
        </div>
    );
}

export default AuthorBiography;