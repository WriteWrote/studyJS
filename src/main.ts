console.log('Hello World');

let ipAddress = document.querySelector('p.ip')?.textContent!;
console.log(ipAddress);

const connectButton = document.querySelector('button.connect-button');
connectButton?.addEventListener('click', () => {
  // todo connect
});

const disconnectButton = document.querySelector('button.disconnectButton');
disconnectButton?.addEventListener('click', () => {
  // todo disconnect
});
