import logo from './logo.svg';
import './App.css';
import AddUser from './Components/AddUser';
import SearchUser from './Components/SearchUser';
import DeleteUser from './Components/DeleteUser';
import ViewUser from './Components/ViewUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = { <AddUser /> }/>
      <Route path='search' element = { <SearchUser /> }/>
      <Route path='delete' element = { <DeleteUser /> }/>
      <Route path='view' element = { <ViewUser /> }/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
