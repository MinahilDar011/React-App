import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';

// import {
//   Routes,
//   Route,
// } from 'react-router-dom';

function App() {
  const [mode, setDarkMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#404040';
      showAlert('Dark mode enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutTitle="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
          <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/" element= /> */}
          {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} 
        {/* </Routes> */}
      </div>
    </>
  );
}

export default App;
