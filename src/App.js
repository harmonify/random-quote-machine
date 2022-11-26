import { Store } from "./Store";
import { Container, QuoteBox, CreditBox } from "./components";

function App() {
  return (
    <Store>
      <Container>
        <QuoteBox />
        <CreditBox />
      </Container>
    </Store>
  );
}

export default App;
