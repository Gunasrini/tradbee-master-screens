import { Route, Routes } from 'react-router-dom';
import './App.css';
import MultiScreenForm from './MultiScreenForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MultiScreenForm />} />
      </Routes>
    </>
  );
}

export default App;
