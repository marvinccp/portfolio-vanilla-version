import { dataProjects } from "./helpers/dataProjects.js";

// dataProjects.map( p => {

//     const { title, description, image, link } = p;

//     const div = document.createElement('div');
//     div.classList.add('card');

//     div.innerHTML = `
//         <img src="${image}" alt="">
//         <h3>${title}</h3>
//         <p>${description}</p>
//         <a href="${link}" target="_blank">Ver proyecto</a>
//     `;

//     document.querySelector('#projects').appendChild(div);
// }

// )

dataProjects.map((p) => {
  const { image, title } = p;

  //projects container
  const projectsContainer = document.querySelector(".projects-container");

  //image container
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  //image
  const projectsImages = document.createElement("img");
  projectsImages.src = image;

  projectsImages.addEventListener("click", () => {
    const modal = document.querySelector("#modal");
    const imageModal = document.querySelector("#image-modal");
    imageModal.src = image;
    modal.showModal();
  });

  imageContainer.appendChild(projectsImages);
  projectsContainer.appendChild(imageContainer);
});

const closeModalButton = document.getElementById("closeModal");
closeModalButton.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.close();
});
