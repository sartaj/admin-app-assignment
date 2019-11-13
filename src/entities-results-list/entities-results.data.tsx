import React from "react";
import { useQuery } from "../use-string-query";
import { useIntrospectionContext } from "../graph-introspection-context";
import _ from "lodash/fp";

export type ResultsDataProps = {
  children: (data: any) => React.ReactNode;
  entities: string;
};

const ResultsDataQuery: React.FC<ResultsDataProps> = ({ entities, children }) => {
  const res = useQuery({
    query: `query getList {
        ${entities} { id }
      }`
  });

  if (res.fetching) return <React.Fragment>{"Loading..."}</React.Fragment>;
  if (res.error)
    return (
      <React.Fragment>{"Error. Please Refresh and Try Again."}</React.Fragment>
    );

  return <React.Fragment>{children(res.data)}</React.Fragment>;
};

export const ResultsData: React.FC<ResultsDataProps> = ({
  children,
  entities
}) => {
  if (!entities) return null;

  // const introspection = useIntrospectionContext();
  // const s = _.find(["name", entities], introspection.__schema.types);
  // console.log({entities});

  return <ResultsDataQuery entities={entities} children={children} />;
};

export default ResultsData;
