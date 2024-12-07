import { createGlobalStyle } from "styled-components";
import { rgba } from "polished";
import { Lato } from 'next/font/google';

const lato = Lato({ subsets: ['latin'], weight: '400' });


const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;

    ::-webkit-scrollbar {
			width: 0.5vw;
			min-width: 6px;
		}
		
		::-webkit-scrollbar-track {
			background-color: ${({ theme }) => rgba(theme.color.primary, 0.1)};
		}
		
		::-webkit-scrollbar-thumb {
			background-color: ${({ theme }) => rgba(theme.color.primary, 0.5)};
			border-radius: 5px;
		}
		
		::-webkit-scrollbar-thumb:hover {
			background-color: ${({ theme }) => rgba(theme.color.primary, 1)};
		}
  };

  *, ::after, ::before {
    box-sizing: inherit;
  };

  body {
    font-family: ${lato.style.fontFamily}, sans-serif;
    margin: 0;
    padding: 0;
    /* user-select: none; */
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: scroll;
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.mineShaft};
    background-size: cover;
    background-position: center ; 
    background-repeat: no-repeat; 
    background-attachment: fixed; 
    color: ${({ theme }) => theme.color.white};
    letter-spacing: 0.5px;
  };
`;

export default GlobalStyle;
