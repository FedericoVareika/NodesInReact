import { useState } from 'react'

function MovingDot() {
    const [ position, setPosition ] = useState({
        x: 0,
        y: 0,
    });

    return (
        <>
            <div
                onPointerMove={e => {
                    setPosition({x: e.clientX, y: e.clientY});
                    // console.log("hello");
                }}
                style={{
                    // position: "center",
                    width: "100pt",
                    height: "100pt",
                }}
            >
                <div style={{
                        position: 'absolute',
                        backgroundColor: 'red',
                        borderRadius: '50%',
                        transform: `translate(${position.x}px, ${position.y}px)`,
                        left: -10,
                        top: -10,
                        width: 20,
                        height: 20,
                      }} />
            </div>
        </>
    );
}

export default MovingDot 
