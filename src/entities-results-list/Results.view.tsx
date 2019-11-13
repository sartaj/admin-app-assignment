import React from "react";
import startCase from "lodash/startCase";
import { Card } from "semantic-ui-react";
import { navigate } from "@reach/router";

const View: React.FC<{ data: any; entities?: string; entityId?: string }> = ({
  data,
  entities,
  entityId
}) => (
  <div>
    <h1>{startCase(entities)}</h1>
    {entities &&
      data &&
      data[entities] &&
      data[entities].map((info: any) => (
        <Card
          key={info.id}
          onClick={() => {
            navigate(`/${entities}/${info.id}`);
          }}
        >
          {Object.keys(info).map((i: string) => (
            <Card.Content key={i}>
              <b>{i}</b>: {info[i]}
            </Card.Content>
          ))}
        </Card>
      ))}
  </div>
);

export default View;
