import { HTMLAttributes, ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const Section = ({ title, children, ...rest }: SectionProps) => (
  <section {...rest}>
    <h2>{title}</h2>
    {children}
  </section>
);
