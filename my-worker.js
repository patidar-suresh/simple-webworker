
addEventListener('message', (event) => {
  CpuIntensiveCalc(event.data);
});
function CpuIntensiveCalc(duration) {
  const before = new Date();
  let count = 0;
  while (true) {
    count++;
    const now = new Date();
    if (now.valueOf() - before.valueOf() > duration) {
      break;
    }
  }    
  postMessage(count);
}