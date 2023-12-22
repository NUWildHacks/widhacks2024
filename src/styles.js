import styled from 'styled-components';

export const mobile = `@media (max-width: 768px)`;

export const textFont = 'Cormorant Unicase';
export const decorativeFont = "'UnifrakturMaguntia', cursive";

export const Bold = styled.span`
  font-weight: 700;
  font-size: 1.2em;
`;

export const Decorative = styled.span`
  font-family: ${decorativeFont};
  font-size: 1.5em;
`;
