export const SingleServiceList = ({ title, items }) => {
  return (
    <div class="column-item-avoid-break">
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
            items.sort().map((x) => <li>{x}</li>)
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
