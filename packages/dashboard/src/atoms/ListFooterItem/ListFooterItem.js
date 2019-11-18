import styled from '@emotion/styled';
import createDynamicTag from '@lskjs/utils/createDynamicTag';
import getTheme from '@lskjs/theme/getTheme';

const dynamicTag = createDynamicTag('a');

export default styled(dynamicTag)`
  display: block;
  padding: .75rem;
  text-align: center;
  color: rgba(0, 0, 0, .65);
  transition: all .2s;
  background-color: transparent;
  text-decoration: none;
  border: none;
  outline: none;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  &:hover {
    color: rgba(0,0,0,.87);
    background-color: rgba(33,37,41,.03);
  }
`;
