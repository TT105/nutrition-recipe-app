async function getChatGPTRecipes(ingredients) {
  const apiKey = "YOUR_API_KEY"; // ←テスト用にここに直接書く（本番は絶対NG）
  const prompt = `
あなたは料理の専門家です。
次の食材で作れるレシピを考えてください：
${ingredients.join(", ")}
JSON形式で、name, ingredients, steps を含めてください。
`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();

  try {
    // ChatGPTの返却をJSONとしてパース
    return JSON.parse(data.choices[0].message.content).recipes;
  } catch (e) {
    console.error("JSON parse error:", e, data.choices[0].message.content);
    return [];
  }
}

// レシピ表示用
async function updateRecipes() {
  const ingredients = Array.from(document.querySelectorAll("#food-list li"))
                           .map(li => li.textContent.split("：")[0]);

  const recipes = await getChatGPTRecipes(ingredients);

  const container = document.getElementById("recipe-list");
  container.innerHTML = "";

  recipes.forEach(r => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${r.name}</h3>
                     <p>材料: ${r.ingredients.join(", ")}</p>
                     <p>作り方: ${r.steps.join(" → ")}</p>`;
    container.appendChild(div);
  });
}
