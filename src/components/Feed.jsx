import PostCard from "./PostCard";

function Feed({ posts }) {
  return (
    <main className="feed">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}

export default Feed;