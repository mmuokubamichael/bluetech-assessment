import './App.css';
import Header from './components/header';
import DataFetcher from './components/dataFetcher';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="rectangular-rule"></div>
      <main>
        <DataFetcher  baseEndpoint="http://3.88.1.181:8000/products/public/catalog"
          params={{ supplier: "FragranceX", first: 0,last:10,search:'Oxygene by Lanvin' }}   />
      </main>
    </div>
  );
}

export default App;
