import { data } from "@/src/constants/how-it-works-data";
import HowItWorksCard from "../HowItWorksCard";
import { HowItWorksContainer, HowItWorksList, HowItWorksTitle } from "./styles";

const HowItWorks = () => {
  return (
    <HowItWorksContainer>
      <HowItWorksTitle>COMO FUNCIONA ?</HowItWorksTitle>
      <HowItWorksList>
        {data.map((item) => (
          <HowItWorksCard key={item.title} data={item} />
        ))}
      </HowItWorksList>
    </HowItWorksContainer>
  );
};

export default HowItWorks;
