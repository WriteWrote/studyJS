// import * as Guacamole from 'guacamole-common-js';

export class GuacamoleRemoteConnector {
  constructor(
    private container: HTMLElement,
    private websocket: WebSocket,
    private connectionParams: Record<string, string>,
  ) {}

  async connect(): Promise<void> {}

  async disconnect(): Promise<void> {}
}
