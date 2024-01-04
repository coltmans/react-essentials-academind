import "./TabButton.css";
type TabButtonProps = {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
};

export const TabButton = ({
  children,
  active = false,
  onClick,
}: TabButtonProps) => {
  return (
    <li>
      <button onClick={onClick} className={active ? "active" : undefined}>
        {children}
      </button>
    </li>
  );
};
