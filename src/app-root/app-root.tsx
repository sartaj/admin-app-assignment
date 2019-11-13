import { RouteComponentProps, Router } from "@reach/router";
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Grid } from "semantic-ui-react";
import EntitiesNavigation from "../entities-navigation";
import Results from "../entities-results-list";
import Details from "../entity-details";
import { IntrospectionProvider } from "../graph-introspection-context";


const Route: React.FC<RouteComponentProps<{
  entities?: string;
  entityId?: string;
}>> = ({ entities, entityId }) => {
  const [resultsTypeName, updateResultsTypeName] = React.useState<string>("");

  return (
    <Grid style={{ padding: "2rem" }}>
      <Grid.Column width={2}>
        <EntitiesNavigation entities={entities} />
      </Grid.Column>
      <Grid.Column width={5} style={{ paddingLeft: "5rem" }}>
        <Results
          entities={entities}
          entityId={entityId}
          updateResultsTypeName={updateResultsTypeName}
        />
      </Grid.Column>
      <Grid.Column width={7}>
        <Details
          entities={entities || ""}
          entityId={entityId}
          resultsTypeName={resultsTypeName}
        />
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
        <Route path="/:entities/:entityId" />
      </Router>
    </IntrospectionProvider>
  );
};

export default App;
