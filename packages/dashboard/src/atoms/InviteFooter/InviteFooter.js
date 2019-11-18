import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  background-color: white;
  padding: 10px;
  border: 1px solid ${p => getTheme(p.theme, 'colors.border')};
  border-radius: 0 0 8px 8px;
  margin-bottom: 10px;
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
`;
