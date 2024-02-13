// Sync (đồng bộ): Nào viết trước thì chạy trước
// Async (bất đồng bộ):
// Các method Async: setInterval, setTimeout, fetch, file reading,...

// Callback: sử dụng để xử lý async

// Callback hell: callback lồng callback, callback sau cần data của callback trước để thực thi
// setTimeout(function (data) {
//   data = 0;
//   console.log(data + 1);
//   setTimeout(function () {
//     console.log(2);
//     setTimeout(function () {
//       console.log(3);
//       setTimeout(function () {
//         console.log(4);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Obj Promise
var promise = new Promise(
  // Executor
  function (resolve, reject) {
    // Handle Logic
    // Success -> call resolve()
    // Failed -> call reject()
    // If don't call resolve() or reject() -> memory leak
    resolve(123);
  }
);
// State Promise
// 1. Pending => Memory leak
// 2. Fulfilled => resolve()
// 3. Rejected => reject()

// Giá trị là tham số của resolve(data) sẽ là tham số của callback(data) trong then block và tương tự với reject

// promise
//   .then(function (data) {
//     // Is called when call resolve()
//     console.log(data);
//   })
//   .catch(function (params) {
//     // Is called when call reject()
//   })
//   .finally(function () {
//     // Always is called
//   });

// Promise chain
// output của then trước sẽ là tham số của then sau
promise
  .then(function (data) {
    // Is called when call resolve()
    console.log(data);
    return data;
  })
  .then(function (data) {
    // Is called when call resolve()
    console.log(data);
    return data;
  })
  .then(function (data) {
    // Is called when call resolve()
    console.log(data);
  })
  .catch(function (params) {
    // Is called when call reject()
  })
  .finally(function () {
    // Always is called
  });
// Promise.resolve() => always return resolve();
// Promise.reject() => always return reject()
// Promise.all(): chạy 2 promise ko phục thuộc vào nhau song song
