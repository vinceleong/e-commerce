import styled from "styled-components";
import { useRouter } from "next/router";

import CategoryItem from "components/CategoryItem";
import productCategories from "data/productCategories";
import Link from "next/link";

const ProductCategory: React.FC = () => {
    const router = useRouter();

    return (
        <Root>
            <div className="header">
                <span>Product Category</span>
                <div className="view-all-link" onClick={() => router.push("/category")}>
                    View All
                </div>
            </div>
            <div className="category-container">
                {productCategories.map((category) => (
                    <Link
                        key={category.value}
                        href={`/search?category=${category.value}`}
                    >
                        <CategoryItem
                            id={category.value}
                            name={category.name}
                            imageUrl={category.url}
                        />
                    </Link>
                ))}
            </div>
        </Root>
    );
};

const Root = styled.div(p => `
  .header {
    display: flex;
    justify-content: space-between;
  }

  .category-container {
    margin-top: 2rem;
    margin-bottom: 2rem;
    overflow-x: auto;
    display: flex;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  .view-all-link {
    color: ${p.theme.colors.primary};
    text-decoration: underline;
    cursor: pointer;
  }
`);


export default ProductCategory;
