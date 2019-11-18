import styled from '@emotion/styled';
import { css } from '@emotion/core';
import createDynamicTag from '@lskjs/utils/createDynamicTag';
import getTheme from '@lskjs/theme/getTheme';

const dynamicTag = createDynamicTag('a');

export const CardImage = styled(dynamicTag)`
  display: block;
  text-decoration: none;
  padding: 30px 15px;
  height: 300px;
  border-radius: ${p => getTheme(p.theme, 'borderRadius')} ${p => getTheme(p.theme, 'borderRadius')} 0 0;
  background-color: rgba(0,0,0, .035);
  text-align: center;
`;

export const ItemCard = styled('div')`
  position: relative;
  transition: 0.2s linear;
  border-radius: ${p => getTheme(p.theme, 'borderRadius')};
  &:hover {
    box-shadow: 0 0 15px rgba(0,0,0, .1);
  }
`;

export const Image = styled('img')`
  max-width: 100%;
  max-height: 100%;
`;

export const CardBody = styled('div')`
  position: relative;
  padding: 30px 15px;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  border-radius: 0 0 ${p => getTheme(p.theme, 'borderRadius')} ${p => getTheme(p.theme, 'borderRadius')};
  color: ${p => (getTheme(p.theme, 'colors.darkGray'))};
  background-color: ${p => getTheme(p.theme, 'colors.white')};
`;

export const CardTitle = styled('title')`
  font-size: 16px;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  display: block;
`;

export const TitleLink = styled(dynamicTag)`
  color: ${p => (getTheme(p.theme, 'colors.darkGray'))};
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  font-weight: 500;
  text-decoration: none;
`;

export const TitleSp = styled('span')`
  display: block;
  font-size: 12px;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  opacity: .5;
`;

export const CardPrice = styled('div')`
  position: absolute;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  top: 30px;
  right: 15px;
`;

export const StrikeTroughItem = styled('div')`
  display: block;
  color: ${p => getTheme(p.theme, 'colors.gray600')};
  ${p => (p.oldPrice && css`
    opacity: .5;
    text-decoration: line-through;
  `)}
`;
