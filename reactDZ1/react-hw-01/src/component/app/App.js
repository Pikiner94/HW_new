import './App.css';
import { Profile } from '../task-01/dz-01';
import { Statistic } from '../task-02/dz-02';
import user from '../task-01/user.json';

function App() {
  return (<Profile prop={user} />), (<Statistic />);
}
export default App;
