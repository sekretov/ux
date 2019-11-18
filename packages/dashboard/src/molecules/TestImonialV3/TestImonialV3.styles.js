import styled from '@emotion/styled';
import Avatar from '@lskjs/ui/Avatar';
import getTheme from '@lskjs/theme/getTheme';

export const Wrapper = styled('div')`
  text-align: center;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;

export const AvatarItem = styled(Avatar)`
  max-width: 100px;
  margin-bottom: 16px;
  border-radius: ${p => getTheme(p.theme, 'borderCircle')};
  max-width: 80px;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;

export const Citation = styled('blockquote')`
  &:before {
    content: none;
  }
  &:after {
    content: none;
  }
  margin: 0 0 3px;
  font-size: 20px;
  opacity: .9;
  border-left: 0;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;

export const Author = styled('p')`
  font-size: 16px;
  opacity: .54;
  margin-bottom: 0;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;

