// 食材ごとの栄養データ（100gあたり）
const foodData = {
    "にんじん": { cal: 41, protein: 0.9, fat: 0.2, carb: 10 },
    "鶏むね肉": { cal: 165, protein: 31, fat: 3.6, carb: 0 },
    "たまご": { cal: 155, protein: 13, fat: 11, carb: 1.1 },
    "ごはん": { cal: 168, protein: 2.5, fat: 0.3, carb: 37 },
    "キャベツ": { cal: 23, protein: 1.3, fat: 0.1, carb: 5.2 }
};

// レシピデータ
const recipes = [
    {
        name: "にんじんとキャベツのサラダ",
        ingredients: ["にんじん", "キャベツ"],
        instructions: "にんじんとキャベツを千切りにして和えるだけ。"
    },
    {
        name: "鶏むね肉のグリル",
        ingredients: ["鶏むね肉"],
        instructions: "鶏むね肉に塩胡椒して焼くだけ！"
    },
    {
        name: "たまごかけごはん",
        ingredients: ["ごはん", "たまご"],
        instructions: "あつあつごはんに生たまごをかけて、醤油を垂らす。"
    }
];

let total = { cal: 0, protein: 0, fat: 0, carb: 0 };
let addedIngredients = [];

document.getElementById("food-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("food-name").value.trim();
    const weight = parseFloat(document.getElementById("food-weight").value);

    if (!foodData[name]) {
        alert("その食材はデータベースにありません。");
        return;
    }

    const factor = weight / 100;
    const food = foodData[name];

    total.cal += food.cal * factor;
    total.protein += food.protein * factor;
    total.fat += food.fat * factor;
    total.carb += food.carb * factor;

    const li = document.createElement("li");
    li.textContent = `${name}：${weight}g`;
    document.getElementById("food-list").appendChild(li);

    if (!addedIngredients.includes(name)) {
        addedIngredients.push(name);
    }

    updateSummary();
    updateRecipes();

    document.getElementById("food-form").reset();
});

function updateSummary() {
    const p = document.getElementById("summary");
    p.textContent = `カロリー: ${total.cal.toFixed(1)} kcal ｜たんぱく質: ${total.protein.toFixed(1)}g ｜脂質: ${total.fat.toFixed(1)}g ｜炭水化物: ${total.carb.toFixed(1)}g`;
}

function updateRecipes() {
    const recipeDiv = document.getElementById("recipe-list");
    recipeDiv.innerHTML = ""; // いったんリセット

    recipes.forEach(recipe => {
        const isMatch = recipe.ingredients.every(ing => addedIngredients.includes(ing));
        if (isMatch) {
            const recipeElem = document.createElement("div");
            recipeElem.classList.add("recipe");

            recipeElem.innerHTML = `
                <h3>🍳 ${recipe.name}</h3>
                <p><strong>材料:</strong> ${recipe.ingredients.join(", ")}</p>
                <p><strong>作り方:</strong> ${recipe.instructions}</p>
            `;
            recipeDiv.appendChild(recipeElem);
        }
    });
}
