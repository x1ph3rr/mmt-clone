export type Offer = {
  id: number;
  img: string;
  category: string;
  title: string;
  subtitle: string;
};

export const offersData: Offer[] = [
  {
    id: 1,
    img: "/icons/offer1.jpg",
    category: "INTL FLIGHTS",
    title: "FOR YOUR YEAR-END TRIPS:",
    subtitle: "Grab Up to 45% OFF* on flights, hotels & more",
  },
  {
    id: 2,
    img: "/icons/offer2.jpg",
    category: "INTL HOTELS",
    title: "Grab Up to 45% OFF*",
    subtitle: "on Villas & Homestays in India",
  },
  {
    id: 3,
    img: "/icons/offer3.jpg",
    category: "INTL HOTELS",
    title: "Grab Up to 40% OFF*",
    subtitle: "on international hotels",
  },
  {
    id: 4,
    img: "/icons/offer4.jpg",
    category: "INTL HOTELS",
    title: "Grab Up to 45% OFF*",
    subtitle: "on hotels in India",
  },
  {
    id: 5,
    img: "/icons/offer5.jpg",
    category: "INTL FLIGHTS",
    title: "Grab Up to 50% OFF*",
    subtitle: "on domestic flights",
  },
  {
    id: 6,
    img: "/icons/offer6.jpg",
    category: "INTL HOTELS",
    title: "Flat Deals",
    subtitle: "on popular cities worldwide",
  },
];

// export const sideOfferData = [
//   {
//     id: 5,
//     img: "/icons/offer5.jpg",
//     category: "INTL FLIGHTS",
//     title: "Grab Up to 50% OFF*",
//     subtitle: "on domestic flights",
//   },
//   {
//     id: 6,
//     img: "/icons/offer6.jpg",
//     category: "INTL HOTELS",
//     title: "Flat Deals",
//     subtitle: "on popular cities worldwide",
//   },
// ];
