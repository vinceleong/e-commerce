import styled from "styled-components";

import ProductCategory from "./ProductCategory";

const Landing: React.FC = () => {
    return <div>
        <ProductCategory />
        <DummyContent color="gainsboro" />
        <DummyContent color="pink" />
    </div>
};

const DummyContent = styled.div<{ color: string }>(({ theme, ...p }) => `
    width: 100%;
    height: 25rem;
    background-color: ${p.color};
    margin-top: 2rem;
    border-radius: ${theme.borderRadius.md};
`)


export default Landing;
