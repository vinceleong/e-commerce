export interface DeliveryAddress {
  name: string;
  phoneNumber: string;
  address: string;
}

const deliveryAddresses: DeliveryAddress[] = [
  {
    name: "Stella",
    phoneNumber: "+601111931731",
    address: "18, Jalan merbuk 3, petaling jaya, 47170, Selangor",
  },
];

export default deliveryAddresses;
