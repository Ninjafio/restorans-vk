import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  HOME: 'home',
  RESTORANS: 'restorans',
  ADRES: 'adres',
  MOBILE: 'mobile'
} as const;

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, '/', []),
      createPanel(DEFAULT_VIEW_PANELS.RESTORANS, `/${DEFAULT_VIEW_PANELS.RESTORANS}`, []),
      createPanel(DEFAULT_VIEW_PANELS.ADRES, `/${DEFAULT_VIEW_PANELS.ADRES}`, []),
      createPanel(DEFAULT_VIEW_PANELS.MOBILE, `/${DEFAULT_VIEW_PANELS.MOBILE}`, []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
