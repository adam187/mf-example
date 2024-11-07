import someFunctionFromHost from "host/someFileFromHost";

console.log("someFunctionFromHost@remote", someFunctionFromHost);

function someFunctionFromRemote() {
  someFunctionFromHost();
  console.log("Hello from remote");
}

export default someFunctionFromRemote;
