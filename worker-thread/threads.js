const { isMainThread, Worker, workerData } = require("worker_threads");

if (isMainThread) {
  console.log(`Main! thread is ${process.pid}`);
  new Worker(__filename, {
    workerData: [7, 6, 2, 9],
  });
  new Worker(__filename, {
    workerData: [1, 2, 5, 15],
  });
} else {
  console.log(`Worker! thread is ${process.pid}`);
  console.log(`${workerData} Sorted is  ${workerData.sort()}`);

}
