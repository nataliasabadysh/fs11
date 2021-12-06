import styled from "styled-components";

export const LayoutWrapper = styled.div`
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 26px 20px;
  max-width: 1240px;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#cbcbcb"};
`;
