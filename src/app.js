const JsSIP = require("JsSIP");

const socket = new JsSIP.WebSocketInterface("wss://sample12.sip.zang.io:6065");

// const configuration = {
//   sockets: [new JsSIP.WebSocketInterface(`wss://${sipDomain}:${sipPort}`)],
//   uri: `sip:${sipNumber}@${sipDomain}`,
//   authorization_user: `${sipNumber}`,
//   password: `${sipNumber}`,
//   registrar_server: `sip:${sipDomain}`,
//   session_timers: false,
//   connection_recovery_max_interval: CONNECTION_RECOVERY_MAX_INTERVAL,
//   connection_recovery_min_interval: CONNECTION_RECOVERY_MIN_INTERVAL,
// };

// const userAgent = new JsSIP.UA(configuration);
