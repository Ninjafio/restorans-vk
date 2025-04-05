import { FC } from 'react';
import {
  Panel,
  NavIdProps,
  Div,
  Text,
  Banner,
  Group,
  Cell,
  IconButton,
} from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { Icon16ChevronOutline} from '@vkontakte/icons';
import {Icon28SettingsOutline} from '@vkontakte/icons'
import defRes from '../assets/defRes.svg'; // Путь к изображению

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Home: FC<HomeProps> = ({ id}) => {
  const routeNavigator = useRouteNavigator();
  //const [activePanel, setActivePanel] = React.useState('panel1'); Некиту для роутинга
  
  return (
    //<View activePanel={activePanel}> И это тоже
    <Panel id={id}>
      
        
    <Div style={{
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center',
      flexDirection:'column',
      }}>
       <Div style={{display: 'flex', 
            justifyContent: 'right',
            width:400,}}>
        <IconButton label="Удалить">
          < Icon28SettingsOutline width={40} height={40} style={{marginRight:0,}}/>
        </IconButton>
        </Div>
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
          Выберите ресторан
        </Text>
      <Div 
      style={{
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        width:300,
      }}>
           <Group style={{ minWidth: 315, fontSize:'14', color: '#fff', height:370, paddingTop:25, borderRadius:10,
        border: '2px solid #E8E8E8',}}>
            <Banner onClick={() => routeNavigator.push('adres')}
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
           <Cell
            className="custom-cell"
            chevron="auto"
            after={<Icon16ChevronOutline fill="E8E8E8" width={20} height={20}/>}
            //style={{ fill:Red}}
            //onClick={() => setActivePanel('panel2')} И этот хайп
          >
            Посмотреть меню ресторана
          </Cell>

          <Cell
            chevron="auto"
            after={<Icon16ChevronOutline fill="#E8E8E8" width={20} height={20}/>}
            //onClick={() => setActivePanel('panel2')} И этот хайп
          >
            Мои заказы
          </Cell>
          
          <Cell
            chevron="auto"
            after={<Icon16ChevronOutline fill="#E8E8E8" width={20} height={20}/>}
            //onClick={() => setActivePanel('panel2')} И этот хайп
          >
            Изменить адрес
          </Cell>

          <Cell
            chevron="auto"
            after={<Icon16ChevronOutline fill="#E8E8E8" width={20} height={20}/>}
            //onClick={() => setActivePanel('panel2')} И этот хайп
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
