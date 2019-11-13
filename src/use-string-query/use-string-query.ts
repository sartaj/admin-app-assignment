import React from "react";
import axios from "axios";

import Config from '../config.json'

export const useQuery = ({
  query,
  variables
}: {
  query: string;
  variables?: Object;
}) => {
  const [fetching, updateFetching] = React.useState(true);
  const [error, updateError] = React.useState<any>(false);
  const [data, updateData] = React.useState<any>(null);
  React.useEffect(() => {
    updateFetching(true);
    updateData(true);
    axios
      .post(Config.url, {
        query,
        variables
      })
      .then(({ data }) => {
        updateData(data.data);
        updateFetching(false);
      })
      .catch(e => {
        updateError(e);
        updateFetching(false);
    });
  }, [query, variables]);
  return {
    fetching,
    error,
    data
  };
};
