node-logix
============

Nodejs package to handle PLC as Micro820 of Allen Bradley, the source base code original written in Python language and port to nodejs.

pylogix: https://github.com/dmroeder/pylogix - changelog 08/26/19

## Install package

```
  npm install node-logix
```

or

```
  yarn add node-logix
```

## Example with events, read and write tags

```js
const PLC = require("node-logix");

const comm = new PLC("192.168.100.9");

comm.on("connect", () => {
  console.log("PLC connected successful! ");
  comm
    .write("TEST_USINT", 127)
    .then(() => {
      return comm.read("TEST_USINT").then(console.log);
    })
    .catch(console.error);
});

comm.on("connect_error", e => {
  console.log("Fail to connect PLC", e);
});

comm.on("reconnect", () => {
  console.log("PLC reconnected");
});

comm.on("error", e => {
  console.log("plc error:", e.message);
});

comm.on("disconnect", reason => {
  console.log("PLC disconnected reason:", reason);
});

comm.on("inactivity", () => {
  console.log("PLC inactivty");
});

comm.on("reachable",()=>{
  console.log("PLC is port reachable")
})
```

## Default Options

**Micro800 default true**:

Change global option
```js
  PLC.defaultOptions = {
  Micro800: false,
  autoConnect: false,
  };
```