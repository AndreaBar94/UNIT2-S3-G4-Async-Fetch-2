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
				imgElement.setAttribute("src", photo.src.large);
				imgElement.setAttribute("alt", photo.alt);
				svgElement.replaceWith(imgElement);
				let title = card.querySelector(".card-title");
				title.innerHTML = photo.alt;
				let photographer = card.querySelector(".card-text");
				photographer.innerHTML = `This photograph was taken by ${photo.photographer}`;
				let small = card.querySelector("small");
				small.textContent = `${photo.id}`;

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
				imgElement.setAttribute("src", photo.src.large);
				imgElement.setAttribute("alt", photo.alt);
				svgElement.replaceWith(imgElement);
				let title = card.querySelector(".card-title");
				title.innerHTML = photo.alt;
				let photographer = card.querySelector(".card-text");
				photographer.innerHTML = `This photograph was taken by ${photo.photographer}`;
				let small = card.querySelector("small");
				small.textContent = `${photo.id}`;

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
			imgElement.setAttribute("src", photo.src.large);
			imgElement.setAttribute("alt", photo.alt);
			svgElement.replaceWith(imgElement);
			let title = card.querySelector(".card-title");
			title.innerHTML = photo.alt;
			let photographer = card.querySelector(".card-text");
			photographer.innerHTML = `This photograph was taken by ${photo.photographer}`;
			let small = card.querySelector("small");
			small.textContent = `${photo.id}`;

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
