import React from "react";
import View from "./entity-details.view";

const Results: React.FC<{
  entities?: string;
  entityId?: string;
  resultsTypeName?: string;
}> = ({ entityId, resultsTypeName }) => {
  return <View entityId={entityId} resultsTypeName={resultsTypeName} />;
};

export default Results;
