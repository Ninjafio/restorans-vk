import { FC } from "react";
import {
  Panel,
  NavIdProps,
  Div,
  Text,
  Banner,
  Group,
  Cell,
  IconButton,
} from "@vkontakte/vkui";
import { UserInfo } from "@vkontakte/vk-bridge";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { Icon16ChevronOutline } from "@vkontakte/icons";
import defRes from "../assets/defRes.svg"; // Путь к изображению
import { useUnit } from "effector-react";
import { $selectedRestoran } from "../store/States";
import { setModal } from "../App";

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Home: FC<HomeProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();
  const selectedRestoran = useUnit($selectedRestoran);

  return (
    //<View activePanel={activePanel}> И это тоже
    <Panel id={id}>
      <Div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {selectedRestoran !== null ? (
          <Text
            style={{
              margin: "0 auto",
              fontSize: 20,
              fontWeight: "800",
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            {selectedRestoran.name}
          </Text>
        ) : (
          <Text
            style={{
              margin: "0 auto",
              fontSize: 20,
              fontWeight: "800",
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            Выберите ресторан
          </Text>
        )}
        <Div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 300,
          }}
        >
          <Group
            style={{
              minWidth: 315,
              fontSize: "14",
              color: "#fff",
              height: 370,
              paddingTop: 25,
              borderRadius: 10,
              border: "2px solid #E8E8E8",
            }}
          >
            {selectedRestoran !== null ? (
              <Banner
                onClick={() => routeNavigator.push("restoranslist")}
                style={{
                  backgroundImage: `url(${selectedRestoran.imageBg})`,
                  backgroundPosition: "center",
                  backgroundSize: 340,
                  backgroundRepeat: "no-repeat",
                  borderRadius: "10px",
                  width: 260,
                  height: 130,
                  marginBottom: 25,
                  marginLeft: 15,
                }}
              ></Banner>
            ) : (
              <Banner
                onClick={() => routeNavigator.push("restoranslist")}
                style={{
                  backgroundImage: `url(${defRes})`,
                  backgroundPosition: "center",
                  backgroundSize: 340,
                  backgroundRepeat: "no-repeat",
                  borderRadius: "10px",
                  width: 260,
                  height: 130,
                  marginBottom: 25,
                  marginLeft: 15,
                }}
              ></Banner>
            )}

            <Cell
              className="custom-cell"
              chevron="auto"
              after={
                <Icon16ChevronOutline fill="E8E8E8" width={20} height={20} />
              }
              //style={{ fill:Red}}
              onClick={() => setModal("work_in_progress")}
            >
              Посмотреть меню ресторана
            </Cell>

            <Cell
              chevron="auto"
              after={
                <Icon16ChevronOutline fill="#E8E8E8" width={20} height={20} />
              }
              onClick={() => setModal("work_in_progress")}
            >
              Мои заказы
            </Cell>

            <Cell
              chevron="auto"
              after={
                <Icon16ChevronOutline fill="#E8E8E8" width={20} height={20} />
              }
              onClick={() => routeNavigator.push("adres")}
            >
              Изменить адрес
            </Cell>

            <Cell
              chevron="auto"
              after={
                <Icon16ChevronOutline fill="#E8E8E8" width={20} height={20} />
              }
              onClick={() => routeNavigator.push("mobile")}
            >
              Изменить номер телефона
            </Cell>
          </Group>
        </Div>
      </Div>
    </Panel>
    //</View>
  );
};
