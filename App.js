import Navigator from './src/Navigator';

//Il faut laisser cette ligne, si non, l'application ne se lance pas.
import * as encoding from 'text-encoding';
import ConfigProvider from 'miroirPackage/Contexts/ConfigContext';
import { useState } from 'react';
import LogInScreen from './src/screens/LogInScreen';

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <ConfigProvider>
      {isLogged ? <Navigator /> : <LogInScreen setIsLogged={setIsLogged}/>}
    </ConfigProvider>
  );
};
