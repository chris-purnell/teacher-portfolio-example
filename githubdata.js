let githubData = async () => await fetch("https://api.github.com/users/chris-purnell")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayGithubData(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error))

  githubData();

  let displayGithubData = (data) => {
      const image = data.avatar_url
      const hireable = data.hireable === null ? 'HIRE ME' : 'DONT HIRE ME'
      const name = data.login

      document.getElementById('main-avatar').src = image
      document.getElementById('hireable').innerHTML = hireable
      document.getElementById('my-name').innerHTML = name.replace('-', ' ').toUpperCase()
  }