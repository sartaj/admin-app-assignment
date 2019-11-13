import React from "react";

export type ResultsDataProps = {
  children: (data: any) => React.ReactNode;
  entities: string;
  entityId: string
};

const ResultsDataQuery: React.FC<ResultsDataProps> = ({ entities, children }) => {
  const TODO = {}

  return <React.Fragment>{children(TODO)}</React.Fragment>;
};

export const ResultsData: React.FC<ResultsDataProps> = ({
  children,
  entities,
  entityId
}) => {
  if (!entities || !entityId) return null;

  return <ResultsDataQuery entities={entities} entityId={entityId} children={children} />;
};

export default ResultsData;
