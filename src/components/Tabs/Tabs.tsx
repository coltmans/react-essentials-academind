import { TOPICS } from "../../data";
import { TabButton } from "./TabButton/TabButton";

type TabsProps = {
    activeTopic: string | undefined;
    setActiveTopic: (topic: string) => void;
    Container: React.ElementType<{
        className?: string;
      }>;
    };

export const Tabs = ({activeTopic, setActiveTopic, Container= 'menu'}: TabsProps) => {

    return (
        <Container>
            {Object.keys(TOPICS).map((topic, index) => {
            return (
                <TabButton
                key={index}
                active={activeTopic == topic}
                onClick={() => setActiveTopic(topic)}
                >
                {topic.toUpperCase()}
                </TabButton>
            );
            })}
        </Container>
    )
}