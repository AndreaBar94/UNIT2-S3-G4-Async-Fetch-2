//load images
let btn = document.getElementById("loadBtn");
let btn2 = document.getElementById("load2ndBtn");
let searchbar = document.getElementById("searchbar").value;
let searchBtn = document.getElementById("searchBtn");

let getImg = async () => {
	try {
		let loadedImg = await fetch("https://api.pexels.com/v1/search?query=nature", {
			headers: new Headers({
				Authorization: "gPDGxuK3N0faAq0l1IS4BFo1aOBkRp6MbfCWNDFi5bQT6OqORIZu7GII",
			}),
		});
		let elements = await loadedImg.json();
		let photos = elements.photos;
		console.log(photos);

		btn.addEventListener("click", () => {
			let cards = document.querySelectorAll(".card");
			cards.forEach((card, index) => {
				let photo = photos[index];
				let svgElement = document.querySelector(".card-img-top");
				let imgElement = document.createElement("img");
				imgElement.setAttribute("src", photo.src.landscape);
				imgElement.setAttribute("alt", photo.alt);
				svgElement.replaceWith(imgElement);
				let title = card.querySelector(".card-title");
				title.innerHTML = photo.alt;
				let photographer = card.querySelector(".card-text");
				photographer.innerHTML = `This photograph was taken by ${photo.photographer}`;
				let small = card.querySelector("small");
				small.textContent = `${photo.id}`;

				let viewBtn = card.querySelector(".btn-group button:nth-child(1)");
				viewBtn.setAttribute("data-toggle", "modal");
				viewBtn.setAttribute("data-target", `#exampleModal-${index}`);

				viewBtn.addEventListener("click", () => {
					let modalBox = document.createElement("div");

					modalBox.innerHTML = `
                        <div class="modal fade" id="exampleModal-${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">${photo.photographer}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img class="img-fluid" src="${photo.src.landscape}" alt="${photo.alt}">
                            </div>
                            <div class="modal-footer">
                            <a href="${photo.photographer_url}" >${photo.photographer_url}</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    `;

					document.body.insertAdjacentElement("beforeend", modalBox);
				});

				let deleteBtn = card.querySelector(".btn-group button:nth-child(2)");
				deleteBtn.textContent = "Hide";
				deleteBtn.addEventListener("click", () => {
					card.remove();
				});
			});
		});
	} catch (error) {
		console.log(error);
	}
};
getImg();

let getImg2 = async () => {
	try {
		let loadedImg = await fetch("https://api.pexels.com/v1/search?query=city", {
			headers: new Headers({
				Authorization: "gPDGxuK3N0faAq0l1IS4BFo1aOBkRp6MbfCWNDFi5bQT6OqORIZu7GII",
			}),
		});
		let elements = await loadedImg.json();
		let photos = elements.photos;
		console.log(photos);

		btn2.addEventListener("click", () => {
			let cards = document.querySelectorAll(".card");
			cards.forEach((card, index) => {
				let photo = photos[index];
				let svgElement = document.querySelector(".card-img-top");
				let imgElement = document.createElement("img");
				imgElement.setAttribute("src", photo.src.landscape);
				imgElement.setAttribute("alt", photo.alt);
				svgElement.replaceWith(imgElement);
				let title = card.querySelector(".card-title");
				title.innerHTML = photo.alt;
				let photographer = card.querySelector(".card-text");
				photographer.innerHTML = `This photograph was taken by ${photo.photographer}`;
				let small = card.querySelector("small");
				small.textContent = `${photo.id}`;

				let viewBtn = card.querySelector(".btn-group button:nth-child(1)");
				viewBtn.setAttribute("data-toggle", "modal");
				viewBtn.setAttribute("data-target", `#exampleModal-${index}`);

				viewBtn.addEventListener("click", () => {
					let modalBox = document.createElement("div");

					modalBox.innerHTML = `
                        <div class="modal fade" id="exampleModal-${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">${photo.photographer}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img class="img-fluid" src="${photo.src.landscape}" alt="${photo.alt}">
                            </div>
                            <div class="modal-footer">
                            <a href="${photo.photographer_url}" >${photo.photographer_url}</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    `;

					document.body.insertAdjacentElement("beforeend", modalBox);
				});

				let deleteBtn = card.querySelector(".btn-group button:nth-child(2)");
				deleteBtn.textContent = "Hide";
				deleteBtn.addEventListener("click", () => {
					card.remove();
				});
			});
		});
	} catch (error) {
		console.log(error);
	}
};
getImg2();

let getNewImages = async (searchValue) => {
	try {
		let loadedImg = await fetch("https://api.pexels.com/v1/search?query=" + searchValue, {
			headers: new Headers({
				Authorization: "gPDGxuK3N0faAq0l1IS4BFo1aOBkRp6MbfCWNDFi5bQT6OqORIZu7GII",
			}),
		});
		let elements = await loadedImg.json();
		let photos = elements.photos;
		console.log(photos);

		let cards = document.querySelectorAll(".card");
		cards.forEach((card, index) => {
			let photo = photos[index];
			let svgElement = document.querySelector(".card-img-top");
			let imgElement = document.createElement("img");
			imgElement.setAttribute("src", photo.src.landscape);
			imgElement.setAttribute("alt", photo.alt);
			svgElement.replaceWith(imgElement);
			let title = card.querySelector(".card-title");
			title.innerHTML = photo.alt;
			let photographer = card.querySelector(".card-text");
			photographer.innerHTML = `This photograph was taken by ${photo.photographer}`;
			let small = card.querySelector("small");
			small.textContent = `${photo.id}`;

			let viewBtn = card.querySelector(".btn-group button:nth-child(1)");
			viewBtn.setAttribute("data-toggle", "modal");
			viewBtn.setAttribute("data-target", `#exampleModal-${index}`);

			viewBtn.addEventListener("click", () => {
				let modalBox = document.createElement("div");

				modalBox.innerHTML = `
                        <div class="modal fade" id="exampleModal-${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">${photo.photographer}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img class="img-fluid" src="${photo.src.landscape}" alt="${photo.alt}">
                            </div>
                            <div class="modal-footer">
                            <a href="${photo.photographer_url}" >${photo.photographer_url}</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    `;

				document.body.insertAdjacentElement("beforeend", modalBox);
			});

			let deleteBtn = card.querySelector(".btn-group button:nth-child(2)");
			deleteBtn.textContent = "Hide";
			deleteBtn.addEventListener("click", () => {
				card.remove();
			});
		});
	} catch (error) {
		console.log(error);
	}
};
searchBtn.addEventListener("click", () => {
	let searchValue = document.querySelector("#searchbar").value;
	getNewImages(searchValue);
});
