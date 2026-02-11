const Groq = require("groq-sdk");
const Fitness = require("../../Model/Fitness/Fitness")
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

module.exports.Fitness = async (req, res) => {
    const {
      name,
      age,
      gender,
      height,
      weight,
      goal,
      level,
      location,
      dietary,
    } = req.body;
    console.log(req.body);
    
    if(!name || !age||!gender||!height||!weight||!goal||!level||!location||!dietary){
        return res.json({message:"Fill all the Fields"})
    }else{
    const userData = new Fitness(
        req.body
    )
    await userData.save()
    }
const prompt = `
You are a professional fitness trainer and nutritionist.

User Profile:
Name: ${name}
Age: ${age}
Gender: ${gender}
Height: ${height} cm
Weight: ${weight} kg
Goal: ${goal}
Fitness Level: ${level}
Workout Location: ${location}
Diet Preference: ${dietary}

Generate:
1. 7-day workout plan
2. 7-day diet plan
3. 5 lifestyle tips
4. 1 motivational quote

Use headings and bullet points.
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    res.json({
      success: true,
      plan: completion.choices[0].message.content,
    });
  }