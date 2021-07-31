import styled from "styled-components";

type ContainerProps = {
  radius: number;
  radiusUnit?: string;
};

const Container = styled.div<ContainerProps>`
  position: relative;
  width: ${(props) => `${props.radius}${props.radiusUnit ?? "em"}`};
  height: ${(props) => `${props.radius}${props.radiusUnit ?? "em"}`};
  padding: 0;
  margin: 0 auto;
  display: flex;
  align-self: center;
  border-radius: 50%;
`;

export { Container };
