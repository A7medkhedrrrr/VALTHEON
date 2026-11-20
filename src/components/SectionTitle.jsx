const SectionTitle = ({ eyebrow, title, description }) => {
  return (
    <div className="section-title">
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
};

export default SectionTitle;