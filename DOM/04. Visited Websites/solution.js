function solve() {
  const links = document.querySelectorAll('a');
  const sites = document.querySelectorAll('p');

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      e.preventDefault()
      let count = parseInt(sites[i].innerHTML.replace(/^\D+/g, ''));
      sites[i].innerHTML = `visited ${++count} times`;
    });
  }
}