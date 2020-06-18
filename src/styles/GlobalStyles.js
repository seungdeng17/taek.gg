import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    color: ${({ theme }) => theme.color.nomalFont};
    position: relative;
    font-family: 'Noto Sans KR', sans-serif;
  }

  button, input {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyles