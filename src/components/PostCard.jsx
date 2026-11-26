import Avatar from "./Avatar";

function PostCard({ post }) {
  return (
    <article className="post-card">
      <header className="post-card__header">
        <Avatar />
        <span className="post-card__author">{post.author}</span>
      </header>
      <p className="post-card__text">{post.text}</p>
      <div className="post-card__image" role="img" aria-label="Post image" />
    </article>
  );
}

export default PostCard;