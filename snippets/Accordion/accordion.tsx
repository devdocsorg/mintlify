// Accordion.tsx
import React, { useState, ReactNode } from "react";

interface AccordionItemProps {
  title: string;
  content: ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => {
  return (
    <div>
      <div
        className={isOpen ? "docs-accordion-item open" : "docs-accordion-item"}
        onClick={onClick}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <button
          aria-label={title}
          aria-expanded="true"
          type="button"
          className="clean-btn menu__caret"
        ></button>
        <h3>{title}</h3>
      </div>

      {isOpen && (
        <div className={isOpen ? "faq-content open" : "faq-content"}>
          {content}
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
  items: { title: string; content: ReactNode }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
