
import './App.css';
import ImageGallery from './componets/index.jsx'

function App() {
  return (
    <div className="App">
{/* https://dummyjson.com/products?limit=100 */}
     <ImageGallery url={"https://picsum.photos/v2/list"}
        page={"1"}
        numberOfImages={"5"}/>
    </div>
  );
}

export default App;





