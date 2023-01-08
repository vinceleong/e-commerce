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
        >
            Some other section
        </div>
        <div
            style={{
                width: "100%",
                height: "25rem",
                backgroundColor: "pink",
                marginTop: "2rem",
            }}
        >
            Some other section
        </div>
    </div>
};

export default Landing;
