const promise = new Promise((resolve, reject) => {
  console.log("Pending")
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("Promise fulfilled")
    } else {
      reject("Promise rejected")
    }
  }, 3000)
})

promise
  .then((value) => {
    console.log(`${value}`);
  })
  .catch((error) => {
    console.error(error);
  })

console.log("There is promise")