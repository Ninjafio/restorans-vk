import React from "react";

import { useUnit } from "effector-react";
import { $fetchedRestorans, setSelectedRestoran } from "../../store/States";
import RestCard from "../restCard/RestCard";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { IRest } from "../../types/type";

const RestList: React.FC = () => {
    const fetchedRests = useUnit($fetchedRestorans);
    const routeNavigator = useRouteNavigator();
    const handleCardClick = (Rest: IRest) => {
      setSelectedRestoran(Rest);
      routeNavigator.back();
    }

  return (
    <div>
        {fetchedRests.map((Rest) => (
          <RestCard onClick={() => handleCardClick(Rest)} key={Rest.id} rest={Rest} />
        ))}
    </div>
  )
};

export default RestList;