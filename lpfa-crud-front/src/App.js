import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


import Menu from './layouts/Navbar';
import AddClub from "./components/AddClub";
import Club from "./components/Club";
import ClubsList from "./components/ClubsList";
import ClubsTable from "./components/ClubsTable";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />}>
            <Route index element={<ClubsTable />} />
            <Route path='/clubs' element={<ClubsList />} />
            <Route path='/add' element={<AddClub />} />
            <Route path='/clubs/:id' element={<Club />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
