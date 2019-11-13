import React from "react";
import Data from "./entities-results.data";
import View from "./entities-results.view";

const Results: React.FC<{
  entities?: string;
  entityId?: string;
  updateResultsTypeName: (str: string) => void;
}> = ({ entities, entityId, updateResultsTypeName }) => {
  return (
    <Data entities={entities || ""}>
      {data => {
        // @ts-ignore
        updateResultsTypeName(data && data[entities] && data[entities][0] && data[entities][0].__typename);
        return data && entities && data[entities] ? (
          <View data={data} entities={entities} entityId={entityId} />
        ) : null;
      }}
    </Data>
  );
};

export default Results;
