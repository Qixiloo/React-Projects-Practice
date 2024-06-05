export default function Suggestion({ filterUsers,handleClick }) {
  return (
    <div className="suggestion-container">
      <ul>
        {filterUsers.map((name,index) => (
          <li onClick={handleClick} key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
