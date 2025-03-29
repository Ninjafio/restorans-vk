import { FC } from 'react';
import {
  Panel,
  NavIdProps,
  Div,
  Text,
  Button,
  ButtonGroup,
} from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import defRes from '../assets/defRes.svg'; // Путь к изображению

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Home: FC<HomeProps> = ({ id}) => {
  const routeNavigator = useRouteNavigator();
  
  return (
    <Panel id={id}>
      <Text
          style={{
            margin: "0 auto",
            fontSize: 16,
            fontWeight: "800",
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: '60px', 
            marginBottom: '30px' 
          }}
        >
          Выберите ресторан
        </Text>

      <Div
          style={{ 
            backgroundImage: `url(${defRes})`,
            backgroundPosition: 'right bottom',
            backgroundSize: 340,
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px',
           }}>
   

        <Button mode="secondary" onClick={() => routeNavigator.push('restorans')} size="l" appearance="accent" stretched 
        style={{ 
          marginBottom: 50, 
          marginTop: 30,
          backgroundColor:'white',
          color:'black'
          }}>
            Выбрать ресторан
          </Button>
          <ButtonGroup mode="vertical" gap="m" style={{ minWidth: 195}}>
            <Button onClick={() => {}} size="l" appearance="accent" stretched>
            Посмотреть меню ресторана
          </Button>
          <Button onClick={() => {}} size="l" appearance="accent" stretched>
            Мои заказы
          </Button>
          <Button onClick={() => {}} size="l" appearance="accent" stretched>
            Изменить адрес
          </Button>
          <Button onClick={() => {}} size="l" appearance="accent" stretched>
            Изменить номер телефона
          </Button>
          </ButtonGroup>
          </Div>
    </Panel>
  );
};
