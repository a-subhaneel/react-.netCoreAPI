import './App.css';
import Navbar from '../Components/Navbar'
import Registration from '../Containers/Registration/Registration'
import SimpleView from '../Containers/SimpleView';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
      <div className="App">
        <header className="App-header">

        </header>

        <Navbar />
        <Registration />
        {/* <SimpleView /> */}

      </div>
  );
}

export default App;
