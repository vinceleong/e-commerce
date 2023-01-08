export interface VariationCategory {
  name: string;
  id: number;
  variations: Variation[];
}

export interface Variation {
  name: string;
  id: number;
}

const variations: VariationCategory[] = [
  {
    id: 1,
    name: "Model",
    variations: [
      {
        id: 1,
        name: "H1",
      },
      {
        id: 2,
        name: "H7",
      },
      {
        id: 3,
        name: "H11",
      },
      {
        id: 4,
        name: "H12",
      },
    ],
  },
  {
    id: 2,
    name: "Color",
    variations: [
      {
        id: 5,
        name: "Red + White",
      },
      {
        id: 6,
        name: "Blue",
      },
      {
        id: 7,
        name: "White",
      },
    ],
  },
  {
    id: 3,
    name: "Size",
    variations: [
      {
        id: 8,
        name: "S",
      },
      {
        id: 9,
        name: "M",
      },
      {
        id: 10,
        name: "L",
      },
    ],
  },
];

export default variations;
