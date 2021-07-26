import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const items = ['Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item'];
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {items.map((item, index) => Task(`${item} ${index}`))}
        </ul>
      </header>
    </div>
  );
}

export default App;
