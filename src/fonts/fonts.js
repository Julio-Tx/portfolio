import { createGlobalStyle } from 'styled-components';

import OpenSans from './OpenSans-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Open Sans';
        src: local('Open Sans'), local('OpenSans'),
        url(${OpenSans}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;
