import { ReactNode } from "react";

export interface HowItWorksCardItemType {
  icon: ReactNode;
  title: string;
  description: string;
}

export const data: HowItWorksCardItemType[] = [
  {
    icon: <img src="./illustrations/illustration2.svg" />,
    title: "Escolhe um bicicleta perfeita",
    description:
      "We’re a small team of passionate cycling enthusiasts who believe bikes can unlock some of the biggest challenges facing Cities and a world of possibility for our members.",
  },
  {
    icon: <img src="./illustrations/illustration1.svg" />,
    title: "Faz o pagamento",
    description:
      "We’re a small team of passionate cycling enthusiasts who believe bikes can unlock some of the biggest challenges facing Cities and a world of possibility for our members.",
  },
  {
    icon: <img src="./illustrations/illustration3.svg" />,
    title: "Espere ser entrega no seu endereço",
    description:
      "We’re a small team of passionate cycling enthusiasts who believe bikes can unlock some of the biggest challenges facing Cities and a world of possibility for our members.",
  },
];
