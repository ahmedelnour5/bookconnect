import './App.css';
import Landing from './Pages/Landing';
import { Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import LogIn from './Pages/LogIn';
import Books from './Pages/Books';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/categories/:category" element={<Books />} />
      <Route path="/books" element={<Books />} />
    </Routes>
  );
}

export default App;
