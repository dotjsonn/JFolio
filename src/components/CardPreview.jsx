export default function CardPreview({ image, imageAlt, imageClassName, emptyText }) {
  return (
    <div className="project-frame">
      {image ? (
        <img src={image} alt={imageAlt} className={imageClassName} loading="lazy" />
      ) : (
        <div className="project-placeholder">
          <span>{emptyText}</span>
        </div>
      )}
    </div>
  )
}
