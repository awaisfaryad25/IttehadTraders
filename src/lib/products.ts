export type Product = {
  name: string;
  sizes: string[];
  note?: string;
};

export type Category = {
  slug: string;
  title: string;
  tagline: string;
  items: Product[];
};

export const categories: Category[] = [
  {
    slug: "containers",
    title: "Karahi Containers",
    tagline: "Plastic containers for karahi & takeaway meals",
    items: [
      { name: "Karahi Container", sizes: ["500ml", "750ml", "1000ml", "1500ml", "2000ml", "3000ml"] },
    ],
  },
  {
    slug: "bowls",
    title: "Bowls & Dip Sauce",
    tagline: "For raita, fruit chaat, and dip sauces",
    items: [
      { name: "Bowl (Raita / Fruit Chaat)", sizes: ["10oz", "14oz", "16oz"] },
      { name: "Dip Sauce Cup", sizes: ["1oz", "2oz"] },
    ],
  },
  {
    slug: "glasses",
    title: "Glasses",
    tagline: "Disposable glasses for drinks & beverages",
    items: [
      { name: "Dom Glass", sizes: ["8oz", "10oz", "12oz", "16oz"] },
      { name: "Crystal Glass", sizes: ["250ml", "4oz"] },
      { name: "Soft Drink Glass", sizes: ["Standard"] },
    ],
  },
  {
    slug: "cups",
    title: "Cups",
    tagline: "Coffee, chai, handle & paper cups",
    items: [
      { name: "Coffee Cup", sizes: ["6oz", "8oz"] },
      { name: "Chai Cup", sizes: ["Standard"] },
      { name: "Handle Cup", sizes: ["Standard"] },
      { name: "Paper Cup", sizes: ["Standard"] },
      { name: "Paper Cup (Coated)", sizes: ["Standard"] },
    ],
  },
  {
    slug: "thermopol",
    title: "Thermopol Items",
    tagline: "Cups, plates, biryani boxes & foam packaging",
    items: [
      { name: "Thermopol Cup", sizes: ["Standard"] },
      { name: "Thermopol Plate", sizes: ["Standard"] },
      { name: "Biryani Box", sizes: ["Standard"] },
      { name: "LP Series Box", sizes: ["LP-9", "LP-19", "LP-22"] },
      { name: "W-150", sizes: ["Standard"] },
    ],
  },
  {
    slug: "fastfood",
    title: "Fast Food Packaging",
    tagline: "F-series boxes for burgers, fries & fast food",
    items: [
      { name: "Fast Food Box", sizes: ["F1", "F2", "F3", "F4"] },
      { name: "Food Pack", sizes: ["Standard"] },
    ],
  },
  {
    slug: "bags-wrap",
    title: "Bags & Wrap",
    tagline: "Shopping bags, cling film & foil",
    items: [
      { name: "Shopper / Shopping Bag", sizes: ["Standard"] },
      { name: "Cling Film / Food Wrap", sizes: ["Standard"] },
      { name: "Aluminum Foil", sizes: ["Standard"] },
    ],
  },
  {
    slug: "cutlery-tissue",
    title: "Cutlery & Tissue",
    tagline: "Spoons, forks, straws & tissue — all types",
    items: [
      { name: "Spoon", sizes: ["Standard"] },
      { name: "Fork", sizes: ["Standard"] },
      { name: "Straw", sizes: ["Standard"] },
      { name: "Tissue", sizes: ["All Types"] },
    ],
  },
];
