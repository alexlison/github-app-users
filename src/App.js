import logo from './logo.svg';
import './App.css';
import AddUser from './Components/AddUser';
import SearchUser from './Components/SearchUser';
import DeleteUser from './Components/DeleteUser';
import ViewUser from './Components/ViewUser';

function App() {
  return (
    <div>
      <AddUser />
      <SearchUser />
      <DeleteUser />
      <ViewUser />
      

    </div>
  );
}

export default App;
