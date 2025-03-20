function time() {
  const now = new Date();
  let hours = now.getHours() % 12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let current_time =
   `${hours>=10?hours:'0'+hours}:${minutes>=10?minutes:'0'+minutes}:${seconds>=10?seconds:'0'+seconds}`;
  document.getElementById("clock").innerHTML =  current_time;
}

time();
setInterval(time, 1000);
