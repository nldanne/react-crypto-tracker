import Header from './components/Header';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import CoinPage from './pages/CoinPage';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/coins/:id' element={<CoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
