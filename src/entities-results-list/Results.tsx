import React from "react";
import { RouteComponentProps } from "@reach/router";
import Data from "./results.data";
import View from "./results.view";

const Results: React.FC<{ entities?: string; entityId?: string }> = ({
  entities, entityId
}) => {
  return (
    <Data entities={entities || ""}>
      {data =>
        data && entities && data[entities] ? (
          <View data={data} entities={entities} entityId={entityId} />
        ) : null
      }
    </Data>
  );
};

export default Results;
