import React, { useEffect, useState } from 'react';
import Quest from './Quest';

const Paper = () => {
    const [Que, setQue] = useState([]); // State to store advice

    // Fetch multiple advice slips dynamically
    async function fetchAdvice(count) {
        const advices = [];
        for (let i = 0; i < count; i++) {
            try {
                const response = await fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`);
                const data = await response.json();
                advices.push({
                    Q: `Advice #${i + 1}`,
                    A: data.slip.advice,
                });
            } catch (error) {
                console.error('Error fetching advice:', error);
            }
        }
        setQue(advices); // Update state with fetched advice
    }

    useEffect(() => {
        fetchAdvice(10); // Fetch 10 pieces of advice when the component mounts
    }, []);

    const [curOpen, setCurOpen] = useState(null)

    return (
        <div className="paper">
            {Que.map((quest, i) => (
                <Quest curOpen={curOpen} onOpen={setCurOpen} num={i + 1} Q={quest.Q} key={quest.Q} >
                    {quest.A}
                </Quest>
            ))}
        </div>
    );
};

export default Paper;
