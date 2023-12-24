"use client"

import {useSprings, animated} from '@react-spring/web'

function MyComponent() {
    const [springs, api] = useSprings(
        2,
        () => ({
            from: {opacity: 0},
            to: {opacity: 1},
        }),
        []
    )

    return (
        <div>
            {springs.map((props, index) => (
                <animated.div key={props.toString()} style={props}>Hello World</animated.div>
            ))}
        </div>
    )
}
