import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import { GlobalProvider } from './context/GlobalState';

const App = () => {
  const [valueFirst, setValueFirst] = useState('');
  const [valueLast, setValueLast] = useState('');
  const [emailArray, setEmailArray] = useState([]);
  const [valueEmail, setValueEmail] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <GlobalProvider>
      <div className="app">
        <Sidebar
          valueFirst={valueFirst}
          setValueFirst={setValueFirst}
          valueLast={valueLast}
          setValueLast={setValueLast}
          emailArray={emailArray}
          setEmailArray={setEmailArray}
          valueEmail={valueEmail}
          setValueEmail={setValueEmail}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <Main
          valueFirst={valueFirst}
          setValueFirst={setValueFirst}
          valueLast={valueLast}
          setValueLast={setValueLast}
          emailArray={emailArray}
          setEmailArray={setEmailArray}
          valueEmail={valueEmail}
          setValueEmail={setValueEmail}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </GlobalProvider>
  );
};

export default App;
