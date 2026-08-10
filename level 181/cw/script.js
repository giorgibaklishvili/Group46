const $ = id => document.getElementById(id);
const calc = () => {
  const b = +$('b').value, p = +$('p').value || 1, t = +$('t').value;
  $('r').innerText = p > 0 ? +((b + (b * t / 100)) / p).toFixed(2) : 0;
};
$('b').oninput = $('p').oninput = $('t').oninput = calc;