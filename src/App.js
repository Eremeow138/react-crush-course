import Header from './components/Header/Header';
import Articles from './components/Articles/Articles.jsx'
import About from './About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App" style={{padding: '20px 40px'}}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Articles />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
