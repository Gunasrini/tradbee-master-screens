import { Route, Routes } from 'react-router-dom';
import './App.css';
import MasterScreenForm from './MasterScreenForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MasterScreenForm />} />
      </Routes>
    </>
  );
}

export default App;
