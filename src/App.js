import './App.css';
import { Container } from './components/Container.jsx';
import { Store } from './Store';

function App() {
  return (
    <Store>
      <Container />
    </Store>
  );
}

export default App;
