import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';
import BsButton from 'antd/lib/button';

export const Box = styled('div')`
  position: relative;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: ${p => getTheme(p.theme, 'borderRadius')};
  background-color: ${p => getTheme(p.theme, 'colors.white')};
  ${p => (p.transparent && `
    background-color: transparent;
  `)}
`;

export const Title = styled('div')`
  font-size: 1.25rem;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  font-weight: 300;
  margin: 0 auto;
`;

export const Content = styled('div')`
  display: flex;
  justify-content: space-between;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 300;
`;

export const Button = styled(BsButton)`
  height: auto;
  padding: .6em 3.5em;
  text-transform: uppercase;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  letter-spacing: .5px;
  line-height: 2;
  font-size: .75rem;
`;

export const Body = styled('div')`
  padding: 1.25rem;
  border-radius: 0 0 ${p => getTheme(p.theme, 'borderRadius')} ${p => getTheme(p.theme, 'borderRadius')};
`;
