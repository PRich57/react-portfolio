const AccordionItem = ({ info, onToggle, active }) => {
  const { title, content } = info;
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