import TreeList from "./tree-list.jsx";
import './styles.css'

export default function TreeView({ menus=[] }) {
  return (
    <div className="container">
      <TreeList lists={menus} />
    </div>
  );
}
