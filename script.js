document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const name = item.querySelector("h2").innerText;
      const price = item.querySelector("strong").innerText;
      const popularity = item
        .querySelector("p:nth-child(2)")
        .innerText.split(": ")[1];

      alert(`Item: ${name}\nPrice: ${price}\nPopularity: ${popularity}`);
    });
  });
});
