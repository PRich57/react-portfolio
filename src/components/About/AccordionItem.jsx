const AccordionItem = ({ info, onToggle, active }) => {
  // Destructure info, title, and content from props
  const { title, content } = info;

  // Component for each accordion item
  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <button className="accordion_button" onClick={onToggle}>
        {title}
        <span className="control">{active ? "-" : "+"}</span>
      </button>
      <div className={`content_wrapper ${active ? "open" : ""}`}>
        <div className="about_content">{content}</div>
      </div>
    </li>
  );
};

export default AccordionItem;