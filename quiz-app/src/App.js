import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Quiz from './components/Quiz';
import { Main } from './components/Main';
import AppRouter from './components/AppRouter';
function App() {
  return (
    <div className="App">
        <AppRouter /> {/* Render the AppRouter component */}
    </div>
  );
}

export default App;
