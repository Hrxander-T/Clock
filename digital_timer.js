async function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img); // Resolve the promise when the image loads
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`)); // Reject on error
    img.src = src;
  });
}

// Usage example
async function main() {
  

let load= await loadImage('/img/white_vase.webp');
  

function time() {
  const now = new Date();
  let hours = now.getHours() % 12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let current_time =
    `${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds}`;
  document.getElementById("clock").innerHTML = current_time;
}

time();
setInterval(time, 1000);
}
main()


