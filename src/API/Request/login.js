export async function loginPost(user, password) {
  let body = {
    username: user,
    password: password,
  };
  let heads = new Headers();
  heads.append("Content-Type", "application/json");

  let response = await fetch("http://localhost:8080/users/api-auth/", {
    method: "POST",
    body: JSON.stringify(body),
    headers: heads,
  })
    .then((res) => {
      res.status;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
}
