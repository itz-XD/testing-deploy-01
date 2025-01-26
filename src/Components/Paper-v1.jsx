import React from 'react'
import Quest from './Quest'

const Paper = () => {
    const Que = [
        {
            Q: "What is the key to a happy life?",
            A: "Focus on gratitude and cherish the small moments. Happiness is not found in possessions but in connections and experiences.",
        },
        {
            Q: "How do I achieve my goals?",
            A: "Set clear, actionable steps. Stay consistent, be patient, and embrace failures as opportunities to grow.",
        },
        {
            Q: "What is the best way to handle challenges?",
            A: "Stay calm, break the problem into smaller parts, and tackle them one at a time. Challenges are stepping stones to growth.",
        },
        {
            Q: "How can I build strong relationships?",
            A: "Communicate openly, listen actively, and prioritize empathy and understanding. Treat others with kindness and respect.",
        },
        {
            Q: "How do I find purpose in life?",
            A: "Explore your passions, align your actions with your values, and contribute to something bigger than yourself.",
        },
        {
            Q: "What is the secret to lifelong learning?",
            A: "Stay curious, ask questions, and embrace new ideas. Never stop seeking knowledge or challenging your perspective.",
        },
        {
            Q: "How can I manage stress effectively?",
            A: "Practice mindfulness, stay physically active, and maintain a healthy work-life balance. Seek help when needed.",
        },
        {
            Q: "What is the importance of self-care?",
            A: "Taking care of your physical, emotional, and mental well-being is essential to be your best self for others.",
        },
        {
            Q: "How can I make a positive impact on the world?",
            A: "Start small. Act with kindness, give back to your community, and inspire others through your actions.",
        },
        {
            Q: "What should I remember every day?",
            A: "Life is fleeting. Make the most of every moment, appreciate the people around you, and always strive to be better."
        }
    ];

    return (
        <>
            <div className='paper'>
                {Que.map((quest, i) => (
                    <Quest num={i + 1} Q={quest.Q} A={quest.A} key={quest.Q} />
                ))}
            </div>
        </>
    )
}

export default Paper