import ARWebControl from './arWebControl';

export const ARWebControlFun = (props: Array<String>) => {
  const control: any = new ARWebControl(props.join(','));
  control && control.setupControl();
};
