import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import About from "./components/About";
import Alert from "./components/Alert";
import React,{ useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
function App() {
  const [Mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
}
)
setTimeout(() => {
  setAlert(null)
}, 3000);
  }
  const toggleMode = () => {
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(21, 21, 75)'
      showAlert("Dark Mode has been enabled","success")
        // document.title = 'Install TextUtils Now'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enabled","success")
  }
}
return (<>
    <Router>
      <Navbar title="TextUtils" name="Home" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
  <Routes>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/" element={<
        TextForms
      showAlert={showAlert} heading='Enter the Text to analayze below.' mode={Mode}
      />}/>
       
  </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
