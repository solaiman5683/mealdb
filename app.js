const loadMeal = () => {
	const search = document.getElementById('search');
	const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`;
	fetch(url)
		.then(res => res.json())
		.then(data => displayMeal(data.meals));
	search.value = '';
};

const displayMeal = data => {
    const mealsDiv = document.getElementById('meals');
    mealsDiv.textContent = "";
	data.forEach(meal => {
		console.log(meal.strMeal);
		const div = document.createElement('div');
		div.classList.add('col');
		div.innerHTML = `
            <div class="card shadow">
				<img src="${meal.strMealThumb}" class="card-img-top"/>
				<div class="card-body">
					<h2 class="card-title">${meal.strMeal}</h2>
					<p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
				</div>
			</div>
        `;
		mealsDiv.appendChild(div);
	});
};

document.getElementById('search').addEventListener('keydown', e => {
	if (e.keyCode == 13) {
		loadMeal();
	}
});
