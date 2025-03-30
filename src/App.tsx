import { Row } from "./components/Row/index";
import { useProps } from "./components/Row/useProps";
import { requests } from "./request";

function App() {
  const result = useProps({ fetchUrl: requests.fetchNetflixOriginals });
  console.log(result);

  return (
    <div className="App">
      <Row fetchUrl={requests.fetchNetflixOriginals} title="テスト" />
    </div>
  );
}

export default App;
