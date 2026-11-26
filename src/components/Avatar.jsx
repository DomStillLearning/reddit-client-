function Avatar({ size = 36 }) {
  return (
    <div
      className="avatar"
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}

export default Avatar;