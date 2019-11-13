import React from "react";
import startCase from "lodash/startCase";

const EntityResultsView: React.FC<{
  data?: any;
  entities?: string;
  entityId?: string;
  resultsTypeName?: string;
}> = ({ resultsTypeName, entityId }) => {
  return entityId ? (
    <div>
      <h1>{startCase(entityId)}</h1>
      <pre>{`query (id: ${entityId}): ${resultsTypeName}`}</pre>
      <p>Due to time limits, this query has not been implemented.</p>
    </div>
  ) : null;
};

export default EntityResultsView;
