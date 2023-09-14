import styled from "styled-components";

export const WeatherBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WeatherWrap = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & ${WeatherBottom} {
  }
`;
