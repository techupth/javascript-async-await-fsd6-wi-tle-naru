// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

async function isJohnProfile() {
  const JohnProfile = await getJohnProfile();
    console.log(JohnProfile);
  }
isJohnProfile();
