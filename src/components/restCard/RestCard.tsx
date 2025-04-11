import React from "react";
import { IRest } from "../../types/type";
import { CardGrid, Card, Image, Spacing, Text } from "@vkontakte/vkui";

interface RestCardProps {
  rest: IRest;
  onClick: () => void;
}

const RestCard: React.FC<RestCardProps> = ({ onClick, rest }) => {
  return (
    <div>
      <CardGrid size="l">        
        <Card
          mode="shadow"
          style={{
            marginTop: 45,
            display: "flex",
            flexDirection: "column",
            fontSize: 14,
            fontWeight: "600",
            gap: 8,
            cursor: "pointer",
          }}
          onClick={onClick}
        >
          <Image
            noBorder
            src={rest.imageBg}
            style={{ width: "100%", height: 145 }}
          />
          <Spacing size={2} />
          <Text style={{ paddingLeft: 16 }}>{rest.name}</Text>
          <Spacing size={12} />
        </Card>
      </CardGrid>
    </div>
  );
};

export default RestCard;
