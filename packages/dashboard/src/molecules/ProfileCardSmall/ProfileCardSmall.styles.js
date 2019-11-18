import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('article')`
  border: 1px solid rgba(0,0,0,.1);
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  padding: 1rem .5rem;
  border-radius: ${p => getTheme(p.theme, 'borderRadius')};
  background-color: ${p => getTheme(p.theme, 'colors.white')};
  text-align: center;
  h4 {
    margin: 0;
    font-weight: 500px;
    font-size: 0.875rem;
    line-height: 1.625rem;
  }

  span {
    opacity: .8;
  }
`;
