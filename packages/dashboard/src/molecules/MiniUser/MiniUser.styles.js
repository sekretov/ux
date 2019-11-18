import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';
import createDynamicTag from '@lskjs/utils/createDynamicTag';

const dynamicTag = createDynamicTag('div');

export const Title = styled('div')`
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  font-size: 13px;
  letter-spacing: -0.1px;
  text-align: left;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const AvatarWrapper = styled('div')`
  margin-right: 8px;
  flex-shrink: 0;
  display: flex;
  > div {
    display: flex !important;
  }
`;

export const Block = styled(dynamicTag)`
  display: flex;
  align-items: center;
  overflow: hidden;
  color: ${p => getTheme(p.theme, 'colors.main')};
  ${p => (p.normal && `
    ${Title} {
      font-size: 13px;
      line-height: 1.43;
      color: ${getTheme(p.theme, 'colors.main')};
    }
  `)}
  ${p => (p.tiny && `
    ${Title} {
      font-size: 10px;
      line-height: 1.8;
      text-align: left;
      color: ${getTheme(p.theme, 'colors.main')};
    }
    ${AvatarWrapper} {
      margin-right: 4px;
      > div {
        margin-top: -4px;
      }
    }
  `)}
`;
