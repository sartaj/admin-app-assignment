import React from "react";
import { Card } from "semantic-ui-react";

export const AddressCard: React.FC<{
  address1: string;
  address2: string;
  city: string;
  state: string;
}> = ({ address1, address2, city, state }) => (
  <React.Fragment>
    <Card.Content>
      <p>{`${address1} ${address2}`}</p>
      <p>{`${city}, ${state}`}</p>
    </Card.Content>
  </React.Fragment>
);

export default AddressCard;
