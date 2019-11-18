import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  line-height: 60px;
`;
