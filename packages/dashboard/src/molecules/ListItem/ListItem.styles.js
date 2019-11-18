import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  width: 100%;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  .list-item__datetime {
    
  }
`;
