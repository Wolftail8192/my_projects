import './App.css';

function App() {

  useEffect (()=>{
    fetch('https://api.spacexdata.com/v3/launches/')
        .then(value => value.json())
        .then(value => {
          console.log(value)
        })

  },[])

  return (
    <div className="App">

    </div>
  );
}

export default App;
