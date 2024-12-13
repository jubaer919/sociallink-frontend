import { Route, Routes } from 'react-router-dom';
import './App.css';
import Post from './components/Post';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Post />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}

export default App;
