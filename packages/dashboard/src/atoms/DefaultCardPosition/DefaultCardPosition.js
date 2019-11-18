import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('span')`
  text-align: center;
  color: ${p => getTheme(p.theme, 'colors.secondary')};
  display: block;
  font-size: 14px;
`;
