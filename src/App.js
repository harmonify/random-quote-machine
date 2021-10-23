/* eslint-disable */

import './App.css';
import { QuoteBox } from './components/QuoteBox.jsx';
import { CreditBox } from './components/CreditBox.jsx';
import { getRandomColor } from './utilities/getRandomColor';

function App() {
  const randomColor = getRandomColor();
  return (
    <div
      className="container-fluid min-vh-100 min-vw-100 justify-content-center align-items-center"
      style={{backgroundColor: randomColor}}
    >
      <QuoteBox randomColor={randomColor} />
      <CreditBox />
    </div>
  );
}

export default App;
