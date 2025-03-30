import { requests } from "./request";
import { Row } from "./components/Row";

function App() {
  return (
    <div className="App">
      <Row
        fetchUrl={requests.fetchNetflixOriginals}
        title="てすと"
        isLargeRow={false}
      />
    </div>
  );
}

export default App;
