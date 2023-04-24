export function Alert(props) {
  return (
    <div>
      <div>
        <span
          role="img"
          aria-label={props.type === "warning" ? "Warning" : "Information"}
        >
          {props.type === "warning" ? "⚠" : "i"}
        </span>
        <span>{props.heading}</span>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
