export type CoreConceptProp = {
  title: string;
  description: string;
  image: string;
};

export const CoreConcept = ({
  title = "Steven",
  description = "Engineer",
  image,
}: CoreConceptProp) => {
  return (
    <li>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};
