import { FC } from 'react';
import {
  Panel,
  PanelHeader,
  NavIdProps,
  Div,
  PanelHeaderBack
} from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Restorans: FC<NavIdProps> = ({ id}) => {
  const routeNavigator = useRouteNavigator();
  
  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
      </PanelHeader>
      <Div>
      </Div>
    </Panel>
  );
};