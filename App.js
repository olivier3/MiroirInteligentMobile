import Navigator from './src/Navigator';

//Il faut laisser cette ligne, si non, l'application ne se lance pas.
import * as encoding from 'text-encoding';
import ConfigProvider from 'miroirPackage/Contexts/ConfigContext';
import { useState } from 'react';
import LogInScreen from './src/screens/LogInScreen';
import Main from './src/components/Main';

export default function App() {

  return (
    <ConfigProvider>
      <Main/>
    </ConfigProvider>
  );
};
