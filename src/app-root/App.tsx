import React from "react";
import "semantic-ui-css/semantic.min.css";
import EntitiesNavigation from "../EntitiesNavigation";
import { Router, RouteComponentProps } from "@reach/router";
import Results from "../Results";
import { Grid } from "semantic-ui-react";
import { IntrospectionProvider } from "../Introspection/Introspection";

const Details: React.FC<
  RouteComponentProps<{ entities: string; entityId: string }>
> = props => {
  return (
    <div>
      <h1>{props.entityId}</h1>
    </div>
  );
};

const Route: React.FC<
  RouteComponentProps<{ entities: string; entityId: string }>
> = ({ entities, entityId }) => {
  return (
    <Grid style={{ padding: "2rem" }}>
      <Grid.Column width={2}>
        <EntitiesNavigation entities={entities} />
      </Grid.Column>
      <Grid.Column width={6} style={{ paddingLeft: "5rem" }}>
        <Results entities={entities} entityId={entityId} />
      </Grid.Column>
      <Grid.Column width={2}>
        <Details entities={entities} entityId={entityId} />
      </Grid.Column>
    </Grid>
  );
};
const App: React.FC = () => {
  return (
    <IntrospectionProvider>
      <Router>
        <Route path="/" />
        <Route path="/:entities" />
        <Route path="/:entityId" />
      </Router>
    </IntrospectionProvider>
  );
};

export default App;
