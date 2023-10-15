import React, { useState, createContext, useEffect, useCallback } from 'react';
import WsService from '../services/wsService';
import { getAllConfig } from '../services/configApi';

export const ConfigContext = createContext();

const defaultConfig = {
  "timezone": "US/Eastern",
  "timeMode": "true",
  "is12h": true,
  "brightnessStart": "7",
  "brightnessEnd": "19",
  "brightnessIdle": "3",
};

const ConfigProvider = (props) => {

  const [showModal, setModalState] = useState(false);
  const [timezone, setTimezone] = useState(defaultConfig.timezone);
  const [is12h, setIs12h] = useState(defaultConfig.is12h);
  const [brightnessTimeStart, setBrightnessTimeStart] = useState(defaultConfig.brightnessStart);
  const [brightnessTimeEnd, setBrightnessTimeEnd] = useState(defaultConfig.brightnessEnd);
  const [brightnessIdle, setBrightnessIdle] = useState(defaultConfig.brightnessIdle);

  const data = {
    timezone, setTimezone,
    is12h, setIs12h,
    brightnessTimeStart, setBrightnessTimeStart,
    brightnessTimeEnd, setBrightnessTimeEnd,
    brightnessIdle, setBrightnessIdle,
    showModal, setModalState
  };

  useEffect(() => {
    WsService.initWsConnection(setConfigHooks);
    loadConfig();
  }, []);

  const loadConfig = useCallback(() => {
    getAllConfig().then((res) => {
      Object.keys(res).forEach((key) => {
        setConfigHooks(JSON.stringify({"configName" : key, "configValue" : res[key]}));
      });
    });
   }, []);

  const setConfigHooks = (config) => {
    config = JSON.parse(config);
    switch (config.configName) {
      case ('timeMode'):
        setIs12h(config.configValue === 'true');
        break;
      case ('timezone'):
        setTimezone(config.configValue);
        break;
      case ('brightnessStart'):
        setBrightnessTimeStart(config.configValue);
        break;
      case ('brightnessEnd'):
        setBrightnessTimeEnd(config.configValue);
        break;
      case ('brightnessIdle'):
        setBrightnessIdle(config.configValue);
        break;
    }
  }

  return (
    <ConfigContext.Provider value={data}>
      {props.children}
    </ConfigContext.Provider>
  )
}

export default ConfigProvider;
