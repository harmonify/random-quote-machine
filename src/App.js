/* eslint-disable */

import './App.css';
import { QuoteBox } from './components/QuoteBox.jsx';
import { CreditBox } from './components/CreditBox.jsx';

function App() {
  return (
    <div className="container-fluid min-vh-100 min-vw-100 justify-content-center align-items-center">
      <QuoteBox />
      <CreditBox />
    </div>
  );
}

export default App;
