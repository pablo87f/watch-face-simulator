import styled from "styled-components";

type ContainerProps = {
  top?: string;
  left?: string;
  width?: string;
  height?: string;
  rotation?: string;
  translateX?: string;
  translateY?: string;
};

const ItemContainer = styled.div<ContainerProps>`
  display: block;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0px;
  padding: 0px;

  transform: translateX(${(props) => props.translateX})
    translateY(${(props) => props.translateY})
    rotate(${(props) => props.rotation});

  transition: transform 0.15s ease-in-out;
`;

export { ItemContainer };
