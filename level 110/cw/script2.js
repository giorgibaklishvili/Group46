const users = [
  { username: "luka", email: "luka@mail.com", city: "Tbilisi", age: 20 },
  { username: "giorgi", email: "gio@mail.com", city: "Batumi", age: 35 },
  { username: "shorena", email: "shorena@mail.com", city: "Kutaisi", age: 26 }
];

users
  .filter(u => u.age >= 18)
  .forEach(u => {
    document.getElementById("users").innerHTML +=
      <div><p><b>${u.username}</b> (${u.city}) - ${u.age} years</p></div>;
  });
