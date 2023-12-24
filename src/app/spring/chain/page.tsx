"use client"

import {useSpring, animated, useChain, SpringRef} from '@react-spring/web';

export default function MyComponent() {
    // 애니메이션에 사용할 스타일 객체들
    const spring1 = useSpring({opacity: 1, from: {opacity: 0}});
    const spring2 = useSpring({x: 200, from: {x: 0}});
    const spring3 = useSpring({scale: 1.5, from: {scale: 1}});

    // 애니메이션의 실행 순서를 정의하는 배열
    const animations = [spring1, spring2, spring3] as SpringRef[];

    // useChain 훅을 사용하여 애니메이션들을 순차적으로 실행
    useChain(animations);

    return (
        <>
            <animated.div style={spring1}>첫 번째 애니메이션</animated.div>
            <animated.div style={spring2}>두 번째 애니메이션</animated.div>
            <animated.div style={spring3}>세 번째 애니메이션</animated.div>
        </>
    );
}
