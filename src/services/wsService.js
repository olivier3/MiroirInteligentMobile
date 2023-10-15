import {Stomp} from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { defaultLink } from '../defaultLink';

class WsService {
  constructor() {
    this.client = null;
  }
  static initWsConnection(fc) {
    const sock = new SockJS(defaultLink.api + 'ws');
    this.client = Stomp.over(function() {return sock});
    this.client.connect({}, (frame) => {
      console.log('connected to Stomp');
      this.client.subscribe('/config/public', (message) => {
        if (message.body != 'Invalid config values')
          fc(message.body);
      });
    });
  }

  static sendConfig(jsonData) {
    if (this.client != null) {
      this.client.send('/app/send', {}, jsonData);
    }
  }
}

export default WsService;
