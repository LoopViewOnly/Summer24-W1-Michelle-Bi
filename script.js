console.log("micheal");
const streakbox = document.getElementById("streak");
const imgbox = document.getElementById("images");
const img1 = document.createElement("img");
const s = Number(localStorage.getItem("streak")) ?? 0;
streakbox.textContent = "streak" + s;

img1.src = "https://thispersondoesnotexist.com/";
img1.onclick = () => {
  alert("You lost  :(");
  location.reload();
  localStorage.setItem("streak",s-s);
  
};

//create img2
const img2 = document.createElement("img");
const id = Math.floor((Math.random() * 6 + 1) * 10000);
img2.src = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
img2.onclick = () => {
  alert("You won!!!!!!!!!!!!!!!!!!! :)");

  location.reload();
  localStorage.setItem("streak",s+1);
};

if (Math.random() > 0.5) {
  imgbox.append(img1);
  imgbox.append(img2);
} else {
  imgbox.append(img2);
  imgbox.append(img1);
}
