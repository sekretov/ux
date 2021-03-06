import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  > .ant-btn:not(:last-child) {
   margin-right: 8px;
  }
`;
