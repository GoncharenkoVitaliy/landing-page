// для сброса ошибки не нахождения модулей при подключении картинки
// картинку прийдется подключить через import

declare module "*.scss" {
  const css: { [key: string]: string };
  export default css;
}
declare module "*.sass" {
  const css: { [key: string]: string };
  export default css;
}
declare module "react-markup";
declare module "*.webp";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";

declare module 'react-copy-to-clipboard';