import styled, { css } from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';
import createDynamicTag from '@lskjs/utils/createDynamicTag';

export const Wrapper = styled('div')`
  .dropdown-menu {
    display: none;
    border: 1px solid #c3c3c3;
    list-style: none;
    padding: 5px;
    margin: 0px;
    width: 150px;
    position: absolute;
    background: #fff;
  }
  .dropdown-menu.menu-open {
    display: contents;
    width: auto;
  }
  position: relative;
`;

const dynamicTag = createDynamicTag('div');
export const Block = styled(dynamicTag)`
  display: flex;
  align-items: center;
  padding: 15.5px 12px;
  ${p => (p.gap && css`
    padding: ${p.gap}px;
  `)}
  border-radius: 0;
  ${p => (p.active && css`
    * {
      color: ${getTheme(p.theme, 'colors.primary')};
    }
  `)}
  &:hover {
    background-color: ${p => getTheme(p.theme, 'colors.lighterPrimary')};
    > div > svg {
      color: ${p => getTheme(p.theme, 'colors.primary')};
    }
  }
`;

export const IconWrapper = styled('div')`
  margin-right: 8px;
  color: ${p => getTheme(p.theme, 'colors.gray')};
`;
