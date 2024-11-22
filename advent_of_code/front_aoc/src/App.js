import './App.css';
import './components/DynamicSubmitPage';
import { Link, Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import DynamicSubmitPage from './components/DynamicSubmitPage';
function App() {
  const buttons = Array.from({ length: 24 }, (_, i) => i + 1);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className='App'>
                <div className='ButtonContainer'>
                  {buttons.map((num) => (
                    <Link
                      key={num}
                      to={`/page/${num}`}
                    >
                      <button className='Button'>
                        {num}
                      </button>

                    </Link>
                  ))}

                </div>
              </div>
            }
          />
          <Route path="/page/:id" element={<DynamicSubmitPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
