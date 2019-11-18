import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  padding: 10px 15px;
  max-width: 380px;
  margin: 10px auto;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
