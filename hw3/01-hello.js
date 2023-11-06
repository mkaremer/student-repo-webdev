// Add your code here
//Get main and h1 elements from html file by their IDs
const main = document.getElementById("main");
const h1 = document.getElementById("header1");

// Create the section element with the "container" class
const section = document.createElement("section");
section.className = "container";

// Create the image (img) element
const img = document.createElement("img");
img.className = "img";
img.src = "../images/moses.jpg";
img.width = "200";
img.alt = "Moses's photo";

//add styles
img.style.display = 'block';
img.style.margin = 'auto';
img.style.borderRadius = '50%';

// Create the paragraph (p) element with the "bio" class
const p = document.createElement("p");
p.className = "bio";
p.textContent =
  "My name is Moses and I will be taking CS 463/563. Intro to Web " +
  "Development this quarter. This is my first quarter as a graduate " +
  "student at PSU. I'm taking this class to increase my skills in webDev. " +
  "I'm from Portland and I have been living here for about 9 years now. I " +
  "love Portland city because people here are friendly.";

  //add styles
p.style.margin = 'auto';
p.style.width = '300px';
p.style.textAlign = 'center';

//change the font weight of first sentence of p
const firstSentence = p.textContent.split(".")[0];
const firstSentenceElement = document.createElement("span");
firstSentenceElement.textContent = firstSentence;
firstSentenceElement.style.fontWeight = "bold";
p.innerHTML = p.innerHTML.replace(firstSentence, firstSentenceElement.outerHTML);


// Append the elements to build the hierarchy
section.appendChild(h1);
section.appendChild(img);
section.appendChild(p);
main.appendChild(section);
document.body.appendChild(main);
