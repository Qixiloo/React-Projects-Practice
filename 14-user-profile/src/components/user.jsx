export default function User({ userInfo }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = userInfo;

  const createdDate = new Date(created_at);

  return (
    <div className="user-info">
      <div className="img-container">
        <img src={avatar_url} alt={userInfo.id} />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{login || name}</a>
        <p>{`User joined at: ${createdDate.getFullYear()} ${createdDate.toLocaleString(
          "en-us",
          {
            month: "short",
          }
        )} ${createdDate.getDate()}`}</p>
      </div>
      <div className="profile-container">
        <p>{`Public Repos: ${public_repos}`}</p>
        <p>{`Followers: ${followers}`}</p>
        <p>{`Following: ${following}`}</p>
      </div>
    </div>
  );
}
