import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Watches from './components/Watches/Watches'
import Crud from './components/Crud/Crud'
import Chat from './components/Chat/Chat'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={
          <div className="App">
            <Navbar />
            <Watches />
            <Crud />
            <Chat />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
