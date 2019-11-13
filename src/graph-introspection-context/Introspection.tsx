import React from "react";
import { useQuery } from "../use-string-query";

const query = `
  query IntrospectionQuery {
    __schema {
      queryType {
        fields {
          name
          description
          args {
            name
            type {
              name
              kind
            }
          }
        }
      }
      types {
        ...FullType
      }
    }
  }

  fragment FullType on __Type {
    kind
    name
    description
    fields(includeDeprecated: true) {
      name
      description
      args {
        ...InputValue
      }
      type {
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    inputFields {
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    enumValues(includeDeprecated: true) {
      name
      description
      isDeprecated
      deprecationReason
    }
    possibleTypes {
      ...TypeRef
    }
  }

  fragment InputValue on __InputValue {
    name
    description
    type {
      ...TypeRef
    }
    defaultValue
  }

  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const IntrospectionContext = React.createContext({
  __schema: {
    queryType: {
      fields: [
        {
          name: ""
        }
      ]
    },
    types: {
      name: ""
    }
  }
});

type IntrospectionData = {
  __schema: {
    queryType: {
      fields: {
        name: string;
      }[];
    };
    types: {
      name: string
    }
  };
};

export const useIntrospectionContext = (): IntrospectionData =>
  React.useContext<IntrospectionData>(IntrospectionContext);

export const IntrospectionProvider: React.FC = ({ children }) => {
  const res = useQuery({
    query
  });
  if (res.fetching) return <React.Fragment>{"Loading..."}</React.Fragment>;
  if (res.error) return <React.Fragment>{"NetworkError"}</React.Fragment>;
  return (
    <IntrospectionContext.Provider value={res.data}>
      {children}
    </IntrospectionContext.Provider>
  );
};
