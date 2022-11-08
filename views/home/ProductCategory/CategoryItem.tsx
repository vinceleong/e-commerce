import styled from "styled-components";
import { motion } from "framer-motion";

const CategoryName = styled.h1`
  color: white;
`;

const Category = styled(motion.div)<{ imageUrl: string }>`
  flex: 0 0 auto;
  width: 300px;
  height: 400px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-right: 2rem;
  border-radius: ${(props) => props.theme.borderRadius(5)};
  cursor: pointer;
  background-color: pink;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
    url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
`;

interface Props {
  imageUrl: string;
  name: string;
  id: string;
}

const CategoryItem: React.FC<Props> = ({ imageUrl, name }) => {
  return (
    <Category imageUrl={imageUrl}>
      <CategoryName>{name}</CategoryName>
    </Category>
  );
};

export default CategoryItem;
