import { OKXUniversalConnectUI, THEME } from "@okxconnect/ui";

const okxUniversalConnectUI = await OKXUniversalConnectUI.init({
  dappMetaData: {
    icon: "https://static.okx.com/cdn/assets/imgs/247/58E63FEA47A2B7D7.png",
    name: "OKX Connect Demo"
  },
  actionsConfiguration: {
    returnStrategy: 'tg://resolve',
    modals:"all",
    tmaReturnUrl:'back'
  },
  language: "en_US",
  uiPreferences: {
    theme: THEME.LIGHT
  },
});

export { okxUniversalConnectUI };