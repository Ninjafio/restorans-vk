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
        <CardGrid size="l" style={{ paddingBottom: 0 }}>
          <Card
            mode="shadow"
            style={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              marginTop: 45,
              display: "flex",
              flexDirection: "column",
              fontSize: 14,
              fontWeight: "600",
              gap: 8,
              cursor: "pointer",
            }}
            onClick={() => {}}
          >
            <Image noBorder style={{ width: "100%", height: 145 }} />
            <Spacing size={2} />
            <Text style={{ paddingLeft: 16 }}>Вечер со смехом</Text>
            <Spacing size={12} />
          </Card>
        </CardGrid>
      </Div>
    </Panel>
  );
};

export default RestoransList;
