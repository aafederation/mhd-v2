export const SingleServiceList = ({ title, items }) => {
  return (
    <div className="column-item-avoid-break">
      <h4>{title.toUpperCase()}</h4>
      <ul>
        {typeof items === "boolean" ? (
          items ? (
            <li>Yes</li>
          ) : (
            <li>No</li>
          )
        ) : typeof items === "number" ? (
          <li>{items}</li>
        ) : typeof items === "string" ? (
          items === "" ? (
            <li>No data available</li>
          ) : (
            <li>{items}</li>
          )
        ) : Array.isArray(items) ? (
          items.length > 0 ? (
            items.map((x, i) => <li key={i}>{x}</li>)
          ) : (
            <li>No data available</li>
          )
        ) : (
          <li>{items}</li>
        )}
      </ul>
    </div>
  );
};
