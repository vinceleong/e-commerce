import styled from "styled-components";

import ProductCategory from "./ProductCategory";

const Landing: React.FC = () => {
    return <div>
        <ProductCategory />
        <div
            style={{
                width: "100%",
                height: "25rem",
                backgroundColor: "gainsboro",
            }}
        />
        <div
            style={{
                width: "100%",
                height: "25rem",
                backgroundColor: "pink",
                marginTop: "2rem",
            }}
        />
    </div>
};

export default Landing;
