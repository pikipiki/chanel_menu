import Menu from '@Components/Menu/Menu';
import './App.scss';
import { items } from './data.json';

function App() {
  return (
    <div className="container">
      <Menu items={items}></Menu>
    </div>
  );
}

export default App;
