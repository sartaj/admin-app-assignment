import React from "react";
import { useQuery } from "../use-string-query";
import { useIntrospectionContext } from "../Introspection/Introspection";
import _ from "lodash/fp";

export type ResultsDataProps = {
  children: (data: any) => React.ReactNode;
  entities: string;
};

export const ResultsData: React.FC<ResultsDataProps> = ({
  children,
  entities
}) => {
  const query = `
    query getList {
        addresses { state }
    }
  `;

  // const introspection = useIntrospectionContext();
  // const s = _.find(["name", entities], introspection.__schema.types);
  // console.log({entities});
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
  console.log(res.data);
  return <React.Fragment>{children(res.data)}</React.Fragment>;
};

export default ResultsData;
