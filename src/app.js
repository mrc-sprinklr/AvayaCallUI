const JsSIP = require("JsSIP");

const socket = new JsSIP.WebSocketInterface("wss://trunk.zang.io:5065");
const configuration = {
  sockets: [socket],
  uri: "sip:sample12@sample12.sip.zang.io",
  password: "sample12",
};

const userAgent = new JsSIP.UA(configuration);

userAgent.on("connected", function (e) {
  console.log("connected");
});

userAgent.on("disconnected", function (e) {
  console.log("disconnected");
});

userAgent.start();

console.log("debug 1");

// const options = {
//   eventHandlers: {
//     progress: function (e) {
//       console.log("call is in progress");
//     },
//     failed: function (e) {
//       console.log("call failed with cause: " + e.data.cause);
//     },
//     ended: function (e) {
//       console.log("call ended with cause: " + e.data.cause);
//     },
//     confirmed: function (e) {
//       console.log("call confirmed");
//     },
//   },
//   mediaConstraints: { audio: true, video: false },
// };

// let session = userAgent.call(
//   "sip:sprinklr-sip@sprinklr.sip.zang.io",
//   options
// );

let text1 = "testing...";
userAgent.sendMessage("sip:sprinklr-sip@sprinklr.sip.zang.io", text1);

console.log("debug 2");
