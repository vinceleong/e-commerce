import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
  imageUrl: string;
  name: string;
  id: string;
  size?: "sm" | "md";
  caterMobile?: boolean;
}

const CategoryItem: React.FC<Props> = ({
  imageUrl,
  name,
  size = "md",
  caterMobile = false,
}) => {
  const itemSize = {
    sm: 0.75,
    md: 1,
  };

  return (
    <Category
      imageUrl={imageUrl}
      size={itemSize[size]}
      caterMobile={caterMobile}
    >
      {size === "md" && <h1 className="name-md">{name}</h1>}
      {size === "sm" && <h2 className="name-sm">{name}</h2>}
    </Category>
  );
};

interface StyleProps {
  imageUrl: string;
  size: number;
  caterMobile: boolean;
}

const Category = styled(motion.div)<StyleProps>((p) => `
  flex: 0 0 auto;
  width: ${p.caterMobile ? "100%" : p.size * 300 + "px"};
  height: ${p.caterMobile ? "100px" : p.size * 400 + "px"};
  padding-left: 1rem;
  padding-right: 1rem;
  margin-right: 2rem;
  border-radius: ${p.theme.borderRadius.md};
  cursor: pointer;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
    url(${p.imageUrl});
  background-size: cover;
  background-position: center center;
  ${p.theme.size.md(`
    width: ${p.size * 300}px;
    height: ${p.size * 400}px;
  `)}

  .name-md {
    color: white;
  }

  .name-sm {
    color: white;
    padding-top: 1rem;
  }
`);

export default CategoryItem;
