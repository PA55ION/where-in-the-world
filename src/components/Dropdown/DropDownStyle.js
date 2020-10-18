import styled from "styled-components";


export const Select = styled.select`
  max-width: 100%;
  height: 50px;
  padding: 10px 12px;
  margin: 1.5rem;
  width: 55%;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  font-family: "Nunito Sans", sans-serif;
  background: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.text};
  border: ${({ theme }) => theme.toggleBorder};
  @media (min-width: 638px) {
    width: 200px;
    margin: -5px 0 0 20px;
    padding-right: 20px;
    position: absolute;
    right: 7%;
    white-space: nowrap;
}
@media (min-width: 814px) {
    right: 3%;
}
`;