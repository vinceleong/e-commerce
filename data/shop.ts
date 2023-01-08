export interface Shop {
  name: string;
  imageUrl?: string;
  lastActive: Date;
  location: string;
}

const shop: Shop = {
  name: "Vince Store",
  imageUrl:
    "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  lastActive: new Date(),
  location: "Selangor",
};

export default shop;
