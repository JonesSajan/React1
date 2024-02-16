import './App.css';
import Expense from './components/Expense';

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Expense expense="Food Rs 10"/>
      <Expense expense="Petrol Rs 100"/>
      <Expense expense="Movies Rs 200"/>
    </div>
  );
}

export default App;
