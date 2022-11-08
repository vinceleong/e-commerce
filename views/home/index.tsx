import MainLayout from "layouts/MainLayout";
import ProductCategory from "./ProductCategory";

export default function Home() {
  return (
    <MainLayout>
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
    </MainLayout>
  );
}
