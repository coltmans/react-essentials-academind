import { TOPICS } from "../../../data";

type TabContentProps = {
  activeTopic: string;
}

export const TabContent = ({activeTopic}: TabContentProps) => {

  return (
    
    <div id="tab-content">
    {!activeTopic && <h3>Choose topic</h3>}
    {activeTopic && (
      <>
        <h3>{TOPICS[activeTopic].title}</h3>
        <p>{TOPICS[activeTopic].description}</p>
        <pre>
          <code>{TOPICS[activeTopic].code}</code>
        </pre>
      </>
    )}
  </div>
  );
};
