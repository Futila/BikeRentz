import { HowItWorksCardItemType } from "@/src/constants/how-it-works-data";
import {
  CardIcon,
  CardText,
  CardTitle,
  HowItWorksCardContainer,
} from "./styles";

interface HowItWorksCardProps {
  data: HowItWorksCardItemType;
}

const HowItWorksCard = ({ data }: HowItWorksCardProps) => (
  <HowItWorksCardContainer>
    <CardIcon>{data.icon}</CardIcon>
    <CardTitle>{data.title}</CardTitle>
    <CardText>{data.description}</CardText>
  </HowItWorksCardContainer>
);

export default HowItWorksCard;
