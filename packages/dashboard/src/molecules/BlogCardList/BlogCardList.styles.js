import styled from '@emotion/styled';
import createDynamicTag from '@lskjs/utils/createDynamicTag';
import getTheme from '@lskjs/theme/getTheme';

const dynamicTag = createDynamicTag('article');

export const ImageContainer = styled(dynamicTag)`
  padding: 0;
  flex: 0 0 100%;
  max-width: 100%;
  height: 100%;
  padding: 0;
  max-height: 235px;
  overflow: hidden;
  /* background-color: ${p => getTheme(p.theme, 'colors.lighterPrimary')}; */
  @media screen and (min-width: 768px) {
    flex: 0 0 30%;
    max-width: 30%;
    height: inherit;
    padding: 0;
  }
`;

export const Body = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 26px;
  overflow: hidden;
  width: 100%;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  flex: 0 0 100%;
  max-width: 100%;
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;

// export const Image = styled('img')`
//   height: 100%;
//   width: 100%;
//   max-width: 100%;
//   object-fit: ${p => p.objectFit || 'cover'};
//   @media screen and (min-width: 768px) {
//     height: 100%;
//     border-radius: ${p => p.theme.borderRadius} 0 0 ${p => p.theme.borderRadius};
//   }
// `;

export const TagItem = styled('div')`
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  font-weight: 500;
  opacity: .8;
`;

export const Title = styled('h4')`
  font-size: 32px;
  font-weight: 300;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  line-height: 1.3125;
  margin: 16px 0 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Content = styled('div')`
  padding: 0;
  flex: 1;
  height: 46px;
  margin-bottom: 13px;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;

export const Author = styled('div')`
  padding-top: 24px;
  border-top: 1px solid rgba(0,0,0,.1);
  padding-top: 27px;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;


export const Wrapper = styled(dynamicTag)`
  border: 1px solid rgba(0,0,0,.1);
  background: ${p => getTheme(p.theme, 'colors.white')};
  border-radius: ${p => getTheme(p.theme, 'borderRadius')};
  overflow: hidden;
  display: flex;
  color: inherit;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 235px;
  }
`;
