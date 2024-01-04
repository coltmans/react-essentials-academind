import { CORE_CONCEPTS } from "../../data";
import { Section } from "../Section";
import { CoreConcept } from "./CoreConcept";
import "./CoreConcept.css";

export const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title="Time to get started!">
      <ul>
        {CORE_CONCEPTS.map((concept, index) => (
          <CoreConcept {...concept} key={index} />
        ))}
      </ul>
    </Section>
  );
};
