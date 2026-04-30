export type Category =
  | "Hatch"
  | "Sedan"
  | "SUV"
  | "Picape"
  | "Utilitário"
  | "Outros";

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: string;
  price: number;
  km: number;
  transmission: "Manual" | "Automático";
  fuel: "Flex" | "Gasolina" | "Diesel" | "Híbrido";
  category: Category;
  image: string;
  featured?: boolean;
}

export const vehicles: Vehicle[] = [
  {
    id: "1",
    name: "Honda Civic EXL",
    brand: "Honda",
    model: "Civic",
    year: "2021/2022",
    price: 134900,
    km: 32000,
    transmission: "Automático",
    fuel: "Flex",
    category: "Sedan",
    image: "/images/car-sedan.jpg",
    featured: true,
  },
  {
    id: "2",
    name: "Jeep Compass Limited",
    brand: "Jeep",
    model: "Compass",
    year: "2022/2023",
    price: 168500,
    km: 28500,
    transmission: "Automático",
    fuel: "Flex",
    category: "SUV",
    image: "/images/car-suv.jpg",
    featured: true,
  },
  {
    id: "3",
    name: "Volkswagen Polo TSI",
    brand: "Volkswagen",
    model: "Polo",
    year: "2023/2024",
    price: 92900,
    km: 12000,
    transmission: "Automático",
    fuel: "Flex",
    category: "Hatch",
    image: "/images/car-hatch.jpg",
    featured: true,
  },
  {
    id: "4",
    name: "Ford Ranger XLT 3.2",
    brand: "Ford",
    model: "Ranger",
    year: "2020/2021",
    price: 215000,
    km: 68000,
    transmission: "Automático",
    fuel: "Diesel",
    category: "Picape",
    image: "/images/car-pickup.jpg",
    featured: true,
  },
  {
    id: "5",
    name: "Toyota Corolla Cross XRE",
    brand: "Toyota",
    model: "Corolla Cross",
    year: "2022/2022",
    price: 154900,
    km: 41000,
    transmission: "Automático",
    fuel: "Flex",
    category: "SUV",
    image: "/images/car-suv2.jpg",
  },
  {
    id: "6",
    name: "Hyundai HB20S Platinum",
    brand: "Hyundai",
    model: "HB20S",
    year: "2023/2023",
    price: 89900,
    km: 18500,
    transmission: "Automático",
    fuel: "Flex",
    category: "Sedan",
    image: "/images/car-sedan2.jpg",
  },
  {
    id: "7",
    name: "Chevrolet Onix LTZ",
    brand: "Chevrolet",
    model: "Onix",
    year: "2022/2023",
    price: 79900,
    km: 25000,
    transmission: "Automático",
    fuel: "Flex",
    category: "Hatch",
    image: "/images/car-hatch.jpg",
  },
  {
    id: "8",
    name: "Fiat Toro Volcano",
    brand: "Fiat",
    model: "Toro",
    year: "2021/2022",
    price: 142900,
    km: 52000,
    transmission: "Automático",
    fuel: "Diesel",
    category: "Picape",
    image: "/images/car-pickup.jpg",
  },
];

export const categories = [
  {
    name: "Hatch" as const,
    count: vehicles.filter((v) => v.category === "Hatch").length,
  },
  {
    name: "Sedan" as const,
    count: vehicles.filter((v) => v.category === "Sedan").length,
  },
  {
    name: "SUV" as const,
    count: vehicles.filter((v) => v.category === "SUV").length,
  },
  {
    name: "Picape" as const,
    count: vehicles.filter((v) => v.category === "Picape").length,
  },
  {
    name: "Utilitário" as const,
    count: vehicles.filter((v) => v.category === "Utilitário").length,
  },
  {
    name: "Outros" as const,
    count: vehicles.filter((v) => v.category === "Outros").length,
  },
];

export const formatPrice = (n: number) =>
  n.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

export const formatKm = (n: number) => `${n.toLocaleString("pt-BR")} km`;

export const WHATSAPP = "5555996133031";
export const PHONE_DISPLAY = "(55) 3512-6370";
export const WHATSAPP_DISPLAY = "(55) 9 9613-3031";
export const EMAIL = "apautomoveisap@hotmail.com";
export const ADDRESS = "Rua Eugênio Marks, 40 - Centro, Santa Rosa - RS";

export const whatsappLink = (
  msg = "Olá! Vim pelo site e gostaria de mais informações.",
) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
