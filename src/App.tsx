import { Header } from "./components/Header/Header";
import { TabContent } from "./components/Tabs/TabContent/TabContent";
import { CoreConcepts } from "./components/CoreConcept/CoreConcepts";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <TabContent />
      </main>
    </div>
  );
}

export default App;
