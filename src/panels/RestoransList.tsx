import {
  Card,
  CardGrid,
  NavIdProps,
  Panel,
  Image,
  Spacing,
  Text,
  Div,
} from "@vkontakte/vkui";
import { FC } from "react";
import RestList from "../components/restList/RestList";

const RestoransList: FC<NavIdProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <Div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <RestList />
      </Div>
    </Panel>
  );
};

export default RestoransList;
