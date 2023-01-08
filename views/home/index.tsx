import ProductCategory from "./ProductCategory";

const Home: React.FC = () => {
  return (
    <div>
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
  );
}

export default Home;
