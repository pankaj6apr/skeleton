import './App.css';
import FetchNewsCard from './components/example1/FetchNewsCard';
import FetchNewsCards from './components/example2/FetchNewsCards';

function App() {
  return (
    <div className="App">
      {/* Example 1 - uncomment the line below to run example 1 */}
      <FetchNewsCard />
      
      {/* Example 2 - uncomment the line below to run example 2 */}
      {/* <FetchNewsCards  /> */}
    </div>
  );
}

export default App;
