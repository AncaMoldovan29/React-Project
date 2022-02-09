export const categories = [
  {
    id: "1",
    name: "books&audio-books",
  },
  {
    id: "2",
    name: "food",
  },
  {
    id: "3",
    name: "Fashion",
  },
  {
    id: "4",
    name: "Electronice",
  },
];

export const subcategories = [
  {
    id: "1",
    name: "books",
    categoryId: "1",
  },
  {
    id: "2",
    name: "audio-books",
    categoryId: "1",
  },
  {
    id: "3",
    name: "articles",
    categoryId: "1",
  },
  {
    id: "4",
    name: "bio food",
    categoryId: "2",
  },
  {
    id: "5",
    name: "haine copii",
    categoryId: "3",
  },
  {
    id: "6",
    name: "laptopuri",
    categoryId: "4",
  },
  {
    id: "7",
    name: "masina de spalat vase",
    categoryId: "4",
  },
  {
    id: "8",
    name: "aparate de cafea",
    categoryId: "4",
  },
];

export const products = [
  {
    id: "1",
    name: "atomic habits - book",
    description: "",
    subcategoryId: "2",
    rating: "",
    price: "30",
    discount: "",
    serialNumber: "",
  },
  {
    id: "2",
    name: "audio book- michelle obama",
    description: "",
    subcategoryId: "2",
    rating: "",
    price: "39",
    discount: "",
    serialNumber: "",
  },
  {
    id: "3",
    name: "fries",
    description: "",
    subcategoryId: "4",
    rating: "",
    price: "5",
    discount: "",
    serialNumber: "",
  },
  {
    id: "IL001",
    name: "Hotul de carti",
    description: "Este anul 1939. Germania nazista.Tara isi tine rasuflarea. ",
    subcategoryId: "1",
    rating: "4.83",
    price: "28",
    serialNumber: "9786066096133",
  },
  {
    id: "MG",
    name: "Laptop Apple MacBook Pro 14 (2021)",
    description:
      "Procesor Apple M1 Pro, 8 nuclee CPU and 14 nuclee GPU, 16GB, 512GB SSD, Silver, Int KB",
    subcategoryId: "6",
    rating: "4.6",
    price: "10800",
    serialNumber: "MKGR3ZE/A",
  },
  {
    id: "78777",
    name: "briosa",
    description: "este buna si dulce",
    subcategoryId: "4",
    rating: "5",
    price: "20",
    serialNumber: "HR1234",
  },
  {
    id: "AM",
    name: "Factfulness",
    description:
      "În Factfulness, Hans Rosling, fenomen internațional TED și specialist în domeniul sănătăţii globale – împreună cu doi dintre vechii săi colaboratori, Anna și Ola –, oferă o explicație nouă și radicală a motivelor pentru care se întâmplă acest lucru.",
    subcategoryId: "1",
    rating: "4",
    price: "55",
    serialNumber: "987",
  },
  {
    id: "AM233",
    name: "Espressor Nespresso De’Longhi Essenza Mini Black",
    description: "19 bari, 1260 W, 0.6 l, Negru + 14",
    subcategoryId: "8",
    rating: "4.83",
    price: "329,99",
    serialNumber: "EN85.B",
  },
  {
    id: "558787",
    name: "Philips",
    description:
      "Sistem de lapte LatteGo, 8 bauturi, display digital TFT, filtru AquaClean, rasnita ceramica, optiune cafea macinata, functie MEMO 2 profiluri, Negru",
    subcategoryId: "8",
    rating: "4.95",
    price: "2.649",
    serialNumber: "Seria 4300 EP4349/70",
  },
  {
    id: "BR",
    name: "Macbook Air M1",
    description:
      "Cel mai subtire si mai usor notebook-ul nostru, complet transformat de cipul Apple M1.",
    subcategoryId: "6",
    rating: "5",
    price: "4890",
    serialNumber: "mgnd3ze/a",
  },
  {
    id: "16565",
    name: "NT Dictionary",
    description: "a unique book",
    subcategoryId: "1",
    rating: "4.5",
    price: "120",
    serialNumber: "978-606-732-196-8",
  },
];

const history = [
  {
    id: "322",
    productId: "1",
    date: "01/10/2021-31/10/2021",
    discount: "20",
  },
  {
    id: "333",
    productId: "1",
    date: "01/11/2021-30/11/2021",
    discount: "50",
  },
];
const orders = [
  {
    id: "1111",
    userId: "1",
  },
  {
    id: "34444",
    userId: "2",
  },
];

export const CATEGORIES_DISCOUNT = [
    {
      id: '1',
      categoryId: '1',
      discount: '20%'
    },
    {
        id: '2',
        categoryId: '4',
        discount: '20%'
    },
];

export const PRODUCTS_DISCOUNT = [
    {
       id: '1',
       productId: '2',
       discount: '50%'
    },
    {
        id: '2',
        productId: 'MG',
        discount: '30%'
    },
];

export const STOCKS = [
    {
        id: '1',
        productId: '1',
        stock: 10,
    },
    {
        id: '2',
        productId: '2',
        stock: 5,
    },
    {
        id: '3',
        productId: '16565',
        stock: 7,
    },
    {
        id: '4',
        productId: 'IL001',
        stock: 2,
    },
    {
        id: '5',
        productId: 'AM',
        stock: 10,
    },
];

const users = [
  {
    id: "1",
    name: "Alina Vlad",
  },
  {
    id: "2",
    name: "Dacian",
  },
];

const products_order = [
  {
    id: "xxx",
    orderId: "1111",
    productId: "1",
  },
  {
    id: "xxb",
    orderId: "1111",
    productId: "2",
  },
  {
    id: "xxc",
    orderId: "34444",
    productId: "2",
  },
];

orders.filter((item) => item.userId === users[0].id);
