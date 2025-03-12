const { db, collection, query, where, getDocs, addDoc, setDoc } =  require("../../firebase");
const { v4: uuidv4 } = require("uuid"); // Import UUID for unique IDs
const {doc} = require("firebase/firestore");

const addChatPrompt = async (topic, questions) => {
    if (!topic.trim() || questions.length < 1) {
        console.error("Invalid input: Topic and at least one question are required.");
        return;
    }

    try {
        // Create a new Firestore document with topic and questions
        const topicId = uuidv4();
        await setDoc(doc(db, "chat_prompts", topicId), {
            topicId,
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

addChatPrompt("I want to learn about applying makeup.", [
    "Great! You're interested in applying makeup. What is your current experience level in makeup? (Beginner, Intermediate, Expert)",
    "What type of makeup are you most interested in? (e.g., everyday natural look, glam makeup, professional makeup artistry, bridal makeup, special effects, etc.)",
    "What is your main goal for learning makeup? (e.g., improving personal skills, becoming a makeup artist, feeling more confident, experimenting with different looks, etc.)",
    "How much time can you dedicate to practicing makeup each week?",
    "Do you have any specific preferences or constraints? (e.g., focus on eye makeup, learning budget-friendly makeup, minimal product use, cruelty-free brands, online courses only, mentorship, etc.)"
]);