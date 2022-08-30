import styled from "styled-components";

const StyledButton = styled.button`
  text-transform: uppercase;
  background-color: transparent;
  /* padding: 10px 40px; */
  border: 1px solid #000;
  height: 40px;
  width: 150px;
  letter-spacing: 5px;
  font-weight: 500;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    color: #fff;
    background-color: #000;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const SeeAllButton = () => {
  return (
    <>
      <StyledButton>See All</StyledButton>
    </>
  );
};

export { SeeAllButton };
