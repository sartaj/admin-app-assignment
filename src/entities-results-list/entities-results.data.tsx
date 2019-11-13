import React from "react";
import { Loader } from 'semantic-ui-react';
import { useQuery } from "../use-string-query";

import Config from '../config.json'

export type ResultsDataProps = {
  children: (data: any) => React.ReactNode;
  entities: string;
};

const ResultsDataQuery: React.FC<ResultsDataProps> = ({ entities, children }) => {
  const config = Config as { resultsCard: { [key: string]: { data: string[], component: string }} } 
  const query = config.resultsCard.hasOwnProperty(entities) ? `
    query getList {
      ${entities} { __typename, id, ${config.resultsCard[entities].data.join(', ')} }
    }
  ` : `
    query getList {
      ${entities} { __typename, id }
    }
  `

  const res = useQuery({
    query
  });

  if (res.fetching) return <Loader active size='medium' />
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

  return <ResultsDataQuery entities={entities} children={children} />;
};

export default ResultsData;
