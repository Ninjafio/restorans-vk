import { FC } from 'react';
import {
  Panel,
  NavIdProps,
  Div,
  Text,
  Group,
  Button,
  Input,
  Banner,
  PanelHeader,
  PanelHeaderBack,
} from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import defRes from '../assets/defRes.svg'; // Путь к изображению

export interface MobileProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Mobile: FC<NavIdProps> = ({ id}) => {
  const routeNavigator = useRouteNavigator();
  
  return (
    <Panel id={id}>
         <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
          <Text>Номер телефона</Text>
         </PanelHeader>
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
            marginTop: '40px', 
            marginBottom: '40px' 
          }}
        >
          Номер телефона
        </Text>
      <Div 
      style={{
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        width:300,
      }}>
           <Group style={{ minWidth: 315, fontSize:'14', height:370, paddingTop:25, borderRadius:10,
        border: '2px solid #E8E8E8'}}>
            
          <Div
          style={{
            display: 'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems: 'center',
            width:300,
            gap: 18,
          }}>
            <Banner
          style={{ 
            backgroundImage: `url(${defRes})`,
            backgroundPosition: 'center',
            backgroundSize: 340,
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px',
            width: 260,
            height: 130,
            marginBottom: 25,
            marginLeft: 15,
           }}></Banner>
       <Div style={{display: 'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems: 'center',}}>
       <Input
          id="example"
          //before={before}
          //after={after}
          type="text"
          //align={align}
          defaultValue="+7 XXX (XXX) XX-XX"
          //disabled={disabled}
          style={{borderRadius:20, height:30, width:250, border: '1px solid #E8E8E8', fontSize: 9, }}
        />
       <Div style={{display:'flex'}}>
        <Text style={{color:'red'}}>*</Text>
        <Text>Введите номер телефона на который будет сделан заказ</Text></Div> 
        </Div>
           </Div>
           </Group>

           <Button 
           style={{
            height:44, width:120, background: '#ADADAD', marginTop: 34,
           }}
           onClick={() => routeNavigator.back()}>
            Продолжить
           </Button>
      </Div>
    </Div>
    </Panel>
  );
};