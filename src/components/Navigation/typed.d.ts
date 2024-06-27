export type TMenuList = Array<{
  label: string;
  href: string;
}>

export type TIconButtonItem = {
  icon: React.ComponentType<SvgIconProps>;
  href: string;
}
export type TIconButtonList = Array<TIconButtonItem>