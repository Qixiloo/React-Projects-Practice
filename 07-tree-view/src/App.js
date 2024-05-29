import menus from "./components/data";
import './App.css';
import TreeView from './components/index'
function App() {
  return (
    <div className="App">
    <TreeView menus={menus} />
    </div>
  );
}

export default App;
