const { db, collection, addDoc } =  require("../../firebase");

const addChatPrompt = async (topic, questions) => {
    if (!topic.trim() || questions.length < 1) {
        console.error("Invalid input: Topic and at least one question are required.");
        return;
    }

    try {
        // Create a new Firestore document with topic and questions
        await addDoc(collection(db, "chat_prompts"), {
            topic: topic.toLowerCase(), // Store topic in lowercase for easier searches
            q1: questions[0] || "",
            q2: questions[1] || "",
            q3: questions[2] || "",
            q4: questions[3] || "",
            q5: questions[4] || "",
            timestamp: new Date() // Optional: Track when this prompt was added
        });

        console.log("Chat prompt added successfully!");
    } catch (error) {
        console.error("Error adding chat prompt:", error);
    }
};

addChatPrompt("I want to learn about Chinese culture.", [
    "Great! You're interested in Chinese culture. What is your current level of knowledge about Chinese culture? (Beginner, Intermediate, Expert)",
    "Which aspects of Chinese culture interest you the most? (e.g., history, traditions, language, festivals, food, philosophy, modern lifestyle, arts, etc.)",
    "What is your main goal for learning about Chinese culture? (e.g., personal interest, academic research, travel preparation, business relations, cultural appreciation, etc.)",
    "How much time can you dedicate to exploring Chinese culture each week?",
    "Do you have any specific preferences or constraints? (e.g., focus on traditional vs. modern culture, learning through books vs. videos, emphasis on a specific dynasty, interest in cultural fusion, etc.)"
]);