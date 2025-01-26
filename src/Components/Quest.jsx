import React, { useState } from 'react'

const Quest = ({ num, Q, curOpen, onOpen, children }) => {
    // const [isOpen, setIsOpen] = useState(false)

    const isOpen = num === curOpen;

    function handleToggle() {
        // setIsOpen(!isOpen)
        onOpen(isOpen ? null : num)
    }
    return (
        <>
            {/* <div className='quest' onClick={(e) => handleQuests(e.target.value)}> */}
            <div className={`quest ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
                <span className='que'>{num} : </span>
                <span className='que'>{Q}</span>
                <h1 className='plusMinus'>{isOpen ? '-' : '+'}</h1>
                {isOpen && <div className='ans-div'>
                    <span className='ans'>{children}</span>
                </div>}
            </div>
        </>
    )
}

export default Quest