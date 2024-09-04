import axios from "axios";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOption";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch(() => {
        // TODO: handle error repsonse
      });
  }, [optionType]);

  // TODO: replace `null` with ToppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOption : null;

  const optionItems = items.map(({ imageName, imagePath }) => (
    <ItemComponent
      key={imageName}
      imageName={imageName}
      imagePath={imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}
