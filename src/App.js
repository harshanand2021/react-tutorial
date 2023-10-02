import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
// import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
       <Greet name="Bruce" heroName="Batman" >
        <p>This is a paragraph props</p>
       </Greet>
       <Greet name="Clark" heroName="Superman">
        <button>Action</button>
       </Greet>
       <Greet name="Diana" heroName="Wonder Girl"/>
      <Welcome name="Diana" heroName="Wonder Girl"/>
      <Welcome name="Bruce" heroName="Batman"/>  
      {/* <Hello /> */}
    </div>
  );
}

export default App;
