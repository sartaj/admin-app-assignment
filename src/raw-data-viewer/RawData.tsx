import React from "react";

export const RawData: React.FunctionComponent = ({ children }) => (
  <pre style={{ fontSize: 10, textAlign: "left" }}>
    {typeof children === "object"
      ? JSON.stringify(children, null, 2)
      : String(children)}
  </pre>
);

export default RawData