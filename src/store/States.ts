import { createEffect, createEvent, createStore } from "effector";
import { fetchRestorans } from "../service/restoransService";
import { IRest } from "../types/type";

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
  export const $selectedRestoran = createStore<IRest | null>(null);
  export const $activeModal = createStore<string>("");

  export const setFetchedRestorans = createEvent<IRest>();
  export const setSelectedRestoran = createEvent<IRest>();
  export const setActiveModal = createEvent<string>();

  $selectedRestoran.on(setSelectedRestoran, (_, state) => state);
  $activeModal.on(setActiveModal, (_, state) => state);
