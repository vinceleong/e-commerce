import styled from "styled-components";
import { useState } from "react";

const Test: React.FC = () => {

    const [count, setCount] = useState(0);

    return <Root>
        <button onClick={() => setCount(count - 1)}>-</button>
        <Count isOdd={count % 2 !== 0}>{count}</Count>
        <span className="count" data-is-odd={count % 2 === 0}>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
    </Root>
}

const Root = styled.div(({ theme }) => `
    display: flex;
    align-items: center;

    .count {
        padding-left: 1rem;
        padding-right: 1rem;
        background-color: ${theme.colors.primary};
    }

    .count[data-is-odd=true] {
        background-color: ${theme.colors.secondary};
    }
`)

const Count = styled.span<{ isOdd: boolean }>(({ theme, isOdd }) => `
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: ${isOdd ? theme.colors.primary : theme.colors.secondary}
`)

export default Test;