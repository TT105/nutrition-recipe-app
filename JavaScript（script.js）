// 食材ごとの栄養データ（100gあたり）
const foodData = {
    "にんじん":     { cal: 41, protein: 0.9, fat: 0.2, carb: 10 },
    "鶏むね肉":     { cal: 165, protein: 31, fat: 3.6, carb: 0 },
    "たまご":       { cal: 155, protein: 13, fat: 11, carb: 1.1 },
    "ごはん":       { cal: 168, protein: 2.5, fat: 0.3, carb: 37 },
    "キャベツ":     { cal: 23, protein: 1.3, fat: 0.1, carb: 5.2 },
    "ごま油":       { cal: 896, protein: 0, fat: 99.8, carb: 0 }
};

let total = { cal: 0, protein: 0, fat: 0, carb: 0 };

document.getElementById("food-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("food-name").value.trim();
    const weight = parseFloat(document.getElementById("food-weight").value);

    if (!foodData[name]) {
        alert("その食材はデータベースにありません。");
        return;
    }

    if (weight <= 0 || isNaN(weight)) {
        alert("使用量は正の数を入力してください。");
        return;
    }

    const factor = weight / 100;
    const food = foodData[name];

    total.cal     += food.cal * factor;
    total.protein += food.protein * factor;
    total.fat     += food.fat * factor;
    total.carb    += food.carb * factor;

    const li = document.createElement("li");
    li.textContent = `${name}：${weight}g`;
    document.getElementById("food-list").appendChild(li);

    updateSummary();

    document.getElementById("food-form").reset();
});

function updateSummary() {
    const p = document.getElementById("summary");
    p.textContent = `カロリー: ${total.cal.toFixed(1)} kcal ｜たんぱく質: ${total.protein.toFixed(1)}g ｜脂質: ${total.fat.toFixed(1)}g ｜炭水化物: ${total.carb.toFixed(1)}g`;
}

// 🍽️ 手動のレシピデータ
const recipes = [
  {
    name: "野菜炒め",
    ingredients: ["にんじん", "キャベツ", "ごま油"],
    steps: ["材料を切る", "フライパンで炒める", "塩で味付けする"]
  },
  {
    name: "親子丼",
    ingredients: ["鶏むね肉", "たまご", "ごはん"],
    steps: ["鶏肉を炒める", "卵でとじる", "ごはんにのせる"]
  },
  {
    name: "キャベツスープ",
    ingredients: ["キャベツ", "たまご", "塩"],
    steps: ["キャベツを煮る", "溶き卵を加える", "塩で味を整える"]
  }
];

// 🧠 入力された食材でレシピを提案する
document.getElementById("suggest-button").addEventListener("click", function () {
  const inputtedFoods = Array.from(document.querySelectorAll("#food-list li"))
    .map(li => li.textContent.split("：")[0]);

  const matchedRecipes = recipes.filter(recipe =>
    recipe.ingredients.every(ingredient => inputtedFoods.includes(ingredient))
  );

  const container = document.getElementById("recipe-suggestions");
  container.innerHTML = "";

  if (matchedRecipes.length === 0) {
    container.innerHTML = "<p>該当するレシピが見つかりませんでした。</p>";
  } else {
    matchedRecipes.forEach(recipe => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>材料:</strong> ${recipe.ingredients.join(", ")}</p>
        <p><strong>作り方:</strong><br>${recipe.steps.join("<br>")}</p>
        <hr>
      `;
      container.appendChild(div);
    });
  }
});
