import { createEffect, createEvent, createStore } from "effector";
import { fetchRestorans } from "../service/restoransService";

export const loadRestoransFx = createEffect(async () => {
    try {
      const FethRestorans = await fetchRestorans();
      console.log(FethRestorans);
      return FethRestorans;
    } catch (error) {
      console.error(error);
      return [];
    }
  });
  loadRestoransFx();

  export const $fetchedRestorans = createStore<IRest[]>([]).on(
    loadRestoransFx.doneData,
    (_, FethFilms) => FethFilms
  );

  export const setFetchedRestorans = createEvent<IRest>();