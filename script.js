const form = document.getElementById("form");

form?.addEventListener("submit", async e => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));
  const users = JSON.parse(localStorage.getItem("users")) || [];

  users.push(data);
  localStorage.setItem("users", JSON.stringify(users));

  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(data)
  });

  alert("Registered Successfully!");
  location.href = "list.html";
});