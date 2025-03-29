import { View, SplitLayout, SplitCol} from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import {Restorans} from "./panels/Restorans.tsx"
import { Home } from "./panels/Home.tsx";
import { DEFAULT_VIEW_PANELS } from './routes';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel}>
        <Home id="home"/>
        <Restorans id="restorans"/>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

