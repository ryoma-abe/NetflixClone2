import { Row } from "./components/Row/index";
import { useProps } from "./components/Row/useProps";
import { requests } from "./request";

function App() {
  const result = useProps(requests.fetchNetflixOriginals);
  console.log(result);

  return (
    <div className="App">
      <Row
        fetchUrl={requests.fetchNetflixOriginals}
        title="テスト"
        isLargeRow={true}
      />
    </div>
  );
}

export default App;
