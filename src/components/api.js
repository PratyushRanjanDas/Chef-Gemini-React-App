import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = ` You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page. `;

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_Gemini_APIkey});

export async function getRecipeFromGemini(ingredients) {

    const ingredientsList = ingredients.join(" , ");
    console.log(ingredientsList);
    
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [
            {
                role:"user",
                text:`${SYSTEM_PROMPT} \n\n ${ingredientsList}`
            }
        ],
    });
    console.log(response.text);
    return response.text;
}
getRecipeFromGemini();
