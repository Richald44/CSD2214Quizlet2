function waitingFn(timeInMs){
const futureTime = Date.now()+timeInMs;
while(futureTime>Date.now()){
//waiting
}
}

waitingFn(3000);

console.log("fuction called has just ended");
