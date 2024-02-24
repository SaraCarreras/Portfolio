import { MoreInfo } from "./components/MoreInfo/MoreInfo";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Projects />
        <MoreInfo />
      </main>
    </div>
  );
}

export default App;
