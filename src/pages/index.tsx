import ARWebControl from './arWebControl';

export const ARWebControlFun = (props: Array<String>) => {
  const control: any = new ARWebControl('ar-container', props.join(','));
  console.log(444, control);
  control && control.setupControl();
};

export default function HIK() {
  return <div id="ar-container" style={{ width: '100%', height: '100vh', background: 'red' }} />;
}
