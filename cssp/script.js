function apicall() {
  console.log("working");
  fetch("https://randomuser.me/api/").then((response) => {
    console.log("data fetched");
    response.json().then((response1) => {
      //   console.log(JSON.stringify(response1));
      makecard(response1);
    });
  });

  console.log("done");
}

function makecard(res) {
  const data = getData(res);
  const fullname = data.full;
  const thumbnail = data.thumb;

  let body = document.querySelector("body");
  let container = document.createElement("div");
  let image = document.createElement("img");
  let source = document.createAttribute("src");
  source.value = thumbnail;
  image.setAttributeNode(source);
  body.appendChild(container);
  container.appendChild(image);
  let textnode = document.createTextNode(fullname);
  let span = document.createElement("span");
  span.appendChild(textnode);
  container.appendChild(span);
}

function getData(res) {
  const results = res.results;
  const user = results[0];
  const name = user.name;
  const first = name.first;
  const last = name.last;
  const full = first + " " + last;
  const pic = user.picture;
  const thumb = pic.medium;
  console.log(thumb);
  return { full, thumb };
}
