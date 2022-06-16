import { useEffect } from 'react';
import ARWebControl from './arWebControl';

function ARContral({ ip, port, userName, credential, wsport, loaded }: any) {
  const load = (event: any, control: any) => {
    if (event.detail.loadingStatus) {
      setTimeout(() => {
        control.setControlsVisibility([(ARWebControl as any).ARControls.BUTTONS_EXIT_MIN]);
      }, 1000);
    }
  };
  useEffect(() => {
    const control: any = new ARWebControl('ar-div-show-pro', 0, ip, port, userName, credential, '', 8888);

    setTimeout(() => {
      control && control.setupControl();
    }, 2000);

    window.addEventListener(
      'ar_loaded',
      (event: any) => {
        load(event, control);
        loaded();
      },
      1500
    );

    return () => {
      window.onbeforeunload = () => {
        control && control.setWindowStatus(2);
      };
      window.removeEventListener('ar_loaded', (event: any) => {
        load(event, control);
      });
    };
  }, []);

  return <div id="ar-div-show-pro" style={{ width: '100%', height: '100vh' }} />;
}

export default ARContral;
