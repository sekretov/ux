import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export const Title = styled('h4')`
  text-align: center;
  color: ${p => getTheme(p.theme, 'colors.black')};
`;

export const Subtitle = styled('span')`
  text-align: center;
  color: ${p => getTheme(p.theme, 'colors.secondary')};
  display: block;
  padding-bottom: 28px;
`;

export const IconWrapper = styled('div')`
  text-align: center;
  font-size: 42px;
  padding-top: 28px;
  padding-bottom: 28px;
  color: ${p => getTheme(p.theme, 'colors.darkGray')};
`;

export const ActionsWrapper = styled('div')`
  display: flex;
  justify-content: center;
`;
