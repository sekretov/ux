import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: transparent;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  border-color: #1890ff;
  width: 2.5rem;
  display: inline-block;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
