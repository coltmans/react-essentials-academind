import { useState } from "react";
import { Section } from "./Section";
import { TabContent } from "./Tabs/TabContent/TabContent";
import { Tabs } from "./Tabs/Tabs";

export const Examples = () => {
  const [activeTopic, setActiveTopic] = useState<string | undefined>();
  return (
    <Section id="examples" title="Examples">
      <Tabs activeTopic={activeTopic} setActiveTopic={setActiveTopic} Container="menu" />
      {activeTopic && <TabContent activeTopic={activeTopic} />}
    </Section>
  );
};
