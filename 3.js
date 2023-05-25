const setTimeoutPromise = (f, ms) =>
  // new Promise((resolve, reject) => setTimeout(() => resolve(f()), ms));
  new Promise((resolve, reject) => setTimeout(() => reject(f()), ms));

const f = async () => {
  try {
    await setTimeoutPromise(()=>new Error(), 500);
  } catch (err) {
    console.log(`error here:${err}`);
  }
};
f();
