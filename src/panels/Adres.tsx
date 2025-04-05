import { FC } from 'react';
import {
  Panel,
  NavIdProps,
  Div,
  Text,
  Group,
  Button,
  Input,
} from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

/*<PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
      </PanelHeader>*/ //Навигация

export const Adres: FC<NavIdProps> = ({ id}) => {
 // const routeNavigator = useRouteNavigator(); //Навигация
  
  return (
    <Panel id={id}>
     
      
    <Div style={{
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center',
      flexDirection:'column',
      }}>
        <Text
          style={{
            margin: "0 auto",
            fontSize: 20,
            fontWeight: "800",
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: '30px', 
            marginBottom: '40px' 
          }}
        >
          Адрес
        </Text>
      <Div 
      style={{
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        width:300,
      }}>
           <Group style={{ minWidth: 315, fontSize:'14', height:310, paddingTop:25, borderRadius:10,
        border: '2px solid #E8E8E8'}}>


           
            <Text 
            style={{
              margin: "0 auto",
              fontSize: 18,
              fontWeight: "400",
              display: 'flex', 
              justifyContent: 'center', 
              marginTop: '30px', 
              marginBottom: '40px' 
            }}>
              Укажите адрес
            </Text>
          <Div
          style={{
            display: 'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems: 'center',
            width:300,
            gap: 18,
          }}>
            <Input
            align='center'
          id="example"
          //before={before}
          //after={after}
          type="text"
          //align={align}
          defaultValue="Челябинск"
          //disabled={disabled}
          readOnly
          style={{borderRadius:20, height:30, width:250, border: '1px solid #E8E8E8', fontSize: 9, }}
        />

       <Input
          id="example"
          //before={before}
          //after={after}
          type="text"
          //align={align}
          defaultValue="Начните вводить улицу..."
          //disabled={disabled}
          style={{borderRadius:20, height:30, width:250, border: '1px solid #E8E8E8', fontSize: 9, }}
        />

        <Button
        style={{
          height:40, width:250, fontSize: 9,borderRadius:20, fontWeight: 400, background: '#ADADAD'
        }}>Показать на карте</Button>
           </Div>
           </Group>
           <Button 
           style={{
            height:44, width:120, background: '#ADADAD', marginTop: 34,
           }}>
            Продолжить
           </Button>
      </Div>
    </Div>
    </Panel>
  );
};