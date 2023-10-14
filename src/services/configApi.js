import axios from 'axios';
import { defaultLink } from '../defaultLink';

const axiosInst = axios.create({
  baseURL: defaultLink.api,
});

export async function getAllConfig() {
  let configList = {};
  await axiosInst.get('/config/').then((res) => {
    res.data.forEach(element => {
      configList[element.configName] = element.configValue;
    });
  }).catch((err) => {
    console.log(err);
  });
  return configList;
}
