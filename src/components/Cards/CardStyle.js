import styled from "styled-components";

export const Card = styled.div`
  //   max-width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s linear;

  &:hover {
    box-shadow: 2px 8px 45px rgba(0, 0, 0, 0.15);
    transform: translate3D(0, -2px, 0);
  }
`;

export const Image = styled.div`
  width: 100%;
  min-height: 11.2rem;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  img {
    width: 100%;
    align-self: stretch;
    object-fit: cover;
  }
`;

export const CardDetail = styled.div`
  padding: 0.5rem 2rem;
`;
