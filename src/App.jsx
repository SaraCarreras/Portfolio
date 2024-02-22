import { Examples } from "./components/Examples/Examples";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Projects />
        <Examples />
      </main>
    </div>
  );
}

export default App;
