import {Routes , Route } from 'react-router-dom' 
import Login from './Login'
import Stats from './Statistiques'
import Validation from './validation-rechargement';
import GestionElement from './GestionElement';
import DetailTypeProduit from './DetailTypeProduit';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='https://react-back-office-production.up.railway.app/stats' element={<Stats/>}></Route>
        <Route path='/validation' element={<Validation/>}></Route>
        <Route path='/GestionElement' element={<GestionElement/>}></Route>
        <Route path='/DetailTypeProduit' element={<DetailTypeProduit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
