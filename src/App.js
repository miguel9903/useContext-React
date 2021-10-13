import './App.css';
import UserContext from './context/userContext';
import User from './components/User';

function App() {

  const userData = {
    name: 'Migue',
    age: 22
  }

  return (
    <>
      <UserContext.Provider value={userData}>
          <User />
      </UserContext.Provider>
    </>
  );
  
}

export default App;
