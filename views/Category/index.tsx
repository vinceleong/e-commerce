import styled from "styled-components";
import Link from "next/link";

import productCategories from "data/productCategories";
import CategoryItem from "components/CategoryItem";

const Category: React.FC = () => {
  return (
    <div>
      <CategoryContainer>
        {productCategories.map((category) => (
          <Link
            key={category.value}
            href={`/search?category=${category.value}`}
          >
            <CategoryItem
              id={category.value}
              imageUrl={category.url}
              name={category.name}
              size="sm"
              caterMobile={true}
            />
          </Link>
        ))}
      </CategoryContainer>
    </div>
  );
};

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1rem;
`;
export default Category;
