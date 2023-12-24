"use client"

import {useSpring, animated} from '@react-spring/web'

export default function MyComponent() {
    const [springs, api] = useSpring(() => ({
        from: {x: 0},
    }))

    const handleClick = () => {
        api.start({
            from: {
                x: 0,
            },
            to: {
                x: 300,
            },
            loop: true
        })
    }

    const stop = () => {
        api.stop()
    }

    const pause = () => {
        api.pause()
    }

    const resume = () => {
        api.resume()
    }

    return (
        <div>
            <animated.div
                style={{
                    width: 80,
                    height: 80,
                    background: '#ff6d6d',
                    borderRadius: 8,
                    ...springs,
                }}
            />
            <nav className={"flex gap-2"}>
                <button onClick={stop}>stop</button>
                <button onClick={handleClick}>start</button>
                <button onClick={pause}>pause</button>
                <button onClick={resume}>resume</button>
            </nav>
        </div>
    )
}
