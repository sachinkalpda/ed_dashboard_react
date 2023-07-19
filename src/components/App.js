
import '../App.css';
import DashBoard from './DashBoard';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <DashBoard />
      </main>
    </div>
  );
}

export default App;
