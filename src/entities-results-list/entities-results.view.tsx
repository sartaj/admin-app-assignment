import React from "react";
import startCase from "lodash/startCase";
import { Card } from "semantic-ui-react";
import { navigate } from "@reach/router";
import Config from "../config.json";
import customResultsCards from "../custom-results-cards/index";


const filterExcluded = (i: string) => !(i === "__typename");

const EntityCardContents: React.FC<{data: any, entities: string}> = ({ data, entities }) => {
  const config = Config as {
    resultsCard: { [key: string]: { data: string[]; component: string } };
  };

  const isCustom = config.resultsCard.hasOwnProperty(entities!)

  if (!isCustom)
    return (
      <React.Fragment>
        {Object.keys(data)
          .filter(filterExcluded)
          .map((i: string) => (
            <Card.Content key={i}>
              <b>{i}</b>: {data[i]}
            </Card.Content>
          ))}
      </React.Fragment>
    );
    else {
      const c = customResultsCards as { [name: string]: any}
      const Component = c[config.resultsCard[entities].component]
      return <Component {...data} />
    }
};

const EntityResultsView: React.FC<{ data: any; entities?: string; entityId?: string }> = ({
  data,
  entities,
  entityId
}) => {

  return (
    <div>
      <h1>{startCase(entities)}</h1>
      {entities &&
        data &&
        data[entities] &&
        data[entities].map((info: any) => (
          <Card
            fluid
            raised={entityId === info.id}
            color={entityId === info.id ? "blue" : undefined}
            key={info.id}
            onClick={() => {
              navigate(`/${entities}/${info.id}`);
            }}
          >
            <EntityCardContents data={info} entities={entities} />
          </Card>
        ))}
    </div>
  );
};

export default EntityResultsView;
