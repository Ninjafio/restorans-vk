import React from "react";

import { useUnit } from "effector-react";
import { $fetchedRestorans } from "../store/States";

const RestList: React.FC = () => {

  
    const fetchedRests = useUnit($fetchedRestorans);

  return (
    <div>
        {fetchedFilm.map((film) => (
          <FilmCard onClick={() => handleCardClick(film)} key={film.id} film={film} />
        ))}
    </div>
  )
};

export default RestList;