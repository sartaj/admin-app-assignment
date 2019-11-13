import { Link } from "@reach/router";
import startCase from "lodash/startCase";
import React from "react";
import { Menu } from "semantic-ui-react";
import { useIntrospectionContext } from "../graph-introspection-context/graph-introspection-context";

const Config = require("../config.json");

type QueryArgs = {
  name: string;
  args: { name: string; type: { kind: string } }[];
};

const filterQueriesWithRequiredFields = (query: QueryArgs) => {
  const argsRequired = query.args.some(s => s.type.kind === "NON_NULL");
  return !argsRequired;
};

const filterQueriesThatEndWithConnection = (query: QueryArgs) =>
  !query.name.endsWith("Connection");

const filterConfigExcludedQueries = (query: QueryArgs) =>
  !Config.queriesExcludedFromNav.includes(query.name);

/*
    I couldn't find how to get a list of the entities, so I deduced it from the list of schema queries based on these criteria
*/
const filterQueriesToDisplay = (introspection: any) =>
  introspection.__schema.queryType.fields
    .filter(filterQueriesWithRequiredFields)
    .filter(filterQueriesThatEndWithConnection)
    .filter(filterConfigExcludedQueries);

export const EntitiesList: React.FC<{ entities?: string }> = ({ entities }) => {
  const introspection = useIntrospectionContext();
  const availableQueries = filterQueriesToDisplay(introspection);

  return (
    <Menu secondary vertical>
      {availableQueries.map(({ name }: { name: string }) => (
        <Link key={name} to={`/${name}`}>
          <Menu.Item name={startCase(name)} active={name === entities} />
        </Link>
      ))}
    </Menu>
  );
};

export default EntitiesList;
