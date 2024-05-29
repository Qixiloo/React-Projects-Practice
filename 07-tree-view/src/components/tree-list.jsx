
import TreeItem from "./tree-item";

export default function TreeList({ lists = [] }) {
  return (
    <ul className="menu-list">
      {lists && lists.length > 0 ? (
        lists.map((li) => <TreeItem item={li} />)
      ) : (
        <h1>No data shows</h1>
      )}
    </ul>
  );
}
