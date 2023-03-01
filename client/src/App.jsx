import CardWeather from "./components/CardWeather";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className='container text-center '>
    <SearchBar />

    <CardWeather />
    </div>
  );
}

export default App;
