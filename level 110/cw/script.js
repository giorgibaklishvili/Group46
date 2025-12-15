const users = [
  { username: "nino", email: "nino@mail.com", city: "Tbilisi", age: 29 },
  { username: "giorgi", email: "gio@mail.com", city: "Batumi", age: 34 },
  { username: "maia", email: "maia@mail.com", city: "Kutaisi", age: 28 }
];

users.forEach(u =>
  document.getElementById("users").innerHTML +=
    <div><p><b>${u.username}</b> (${u.city}) - ${u.age} years</p></div>
);
