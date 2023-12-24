"use client"

import {useTransition, animated} from '@react-spring/web'

export default function Page() {
    const [transitions, api] = useTransition([1, 2, 3], () => ({
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 1},
    }))

    return transitions((style, item) => (
        <animated.div className={'text-white'} style={style}>{item}</animated.div>
    ))
}
