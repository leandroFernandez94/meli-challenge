import styled from "styled-components";

const DescriptionColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px;
`;
const Title = styled.span`
  font-size: 28px;
  margin-bottom: 32px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 32px;
`;

type Props = {
  description: string;
};

export default function DetailsBody(props: Props) {
  return (
    <DescriptionColumn>
      <Title>Descripcion del producto</Title>
      <Description>{props.description}</Description>
    </DescriptionColumn>
  );
}
