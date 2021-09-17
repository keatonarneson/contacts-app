import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
      <div className="app">
        <Sidebar />
        <Main />
      </div>
    </GlobalProvider>
  );
};

export default App;
