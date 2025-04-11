import {
  View,
  SplitLayout,
  SplitCol,
  ModalCard,
  Button,
  Spacing,
  Text,
  ModalRoot,
} from "@vkontakte/vkui";
import { useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";
import { Mobile } from "./panels/Mobile.tsx";
import { Home } from "./panels/Home.tsx";
import { DEFAULT_VIEW_PANELS } from "./routes";
import { Adres } from "./panels/Adres.tsx";
import RestoransList from "./panels/RestoransList.tsx";
import React from "react";
import { useUnit } from "effector-react";
import { $activeModal, setActiveModal } from "./store/States.ts";


export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();
  const activeModal = useUnit($activeModal);

  const modal = (
    <ModalRoot activeModal={activeModal}>
      <ModalCard id="work_in_progress">
        <Text weight="2">
          В разработке!
        </Text>
        <Spacing size={10} />
        <Button
          onClick={() => setModal("")}
          size="l"
          stretched={true}
        >
          Ок
        </Button>
      </ModalCard>
    </ModalRoot>
  );

  return (
    <React.Fragment>
      {activeModal !== "" ?
      modal
      :
        <></>
      }
      <SplitLayout>
        <SplitCol>
          <View activePanel={activePanel}>
            <Home id="home" />
            <Mobile id="mobile" />
            <Adres id="adres" />
            <RestoransList id="restoranslist" />
          </View>
        </SplitCol>
      </SplitLayout>
    </React.Fragment>
  );
};

export const setModal = (modalId: string) => {
  setActiveModal(modalId);
};
