import styled from '@emotion/styled';
import Avatar from '@lskjs/ui/Avatar';
import createdynamicTag from '@lskjs/utils/createDynamicTag';
import removeProps from '@lskjs/utils/removeProps';
import getTheme from '@lskjs/theme/getTheme';

const dynamicTag = createdynamicTag('article');
const filteredTag = removeProps(dynamicTag, ['fixHeight']);

export const ProfileCardItem = styled(filteredTag)`
  border: 1px solid rgba(0,0,0,.1);
  color: rgba(0,0,0,.65);
  display: block;
  padding: 1rem;
  border-radius: ${p => getTheme(p.theme, 'borderRadius')};
  background-color: ${p => getTheme(p.theme, 'colors.white')};
  text-align: center;
  height: ${p => (p.fixHeight ? `${p.fixHeight}px` : 'auto')};
  overflow: hidden;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  transition: border-color .2s ease-out;

  &:hover {
    color: inherit;
    border-color: ${p => getTheme(p.theme, 'colors.primary')};
  }
  > h4 {
    margin: 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: inherit;
  }
  > h4 + span {
    display: block;
    opacity: .8;
    margin-bottom: 14px;
    font-size: 14px;
    line-height: 24px;
    color: inherit;
  }
  > p {
    font-size: 14px;
    color: inherit;
  }
  > div {

  }
`;

export const ProfileCardAvatar = styled(Avatar)`
  box-shadow: 0 0 0 5px rgba(0,0,0,.1), 0 0 10px hsla(0,0%,100%,.2);
  background-color: ${p => (!p.img ? 'rgba(0, 0, 0, 0)' : p.backgroundColor)};
  border-radius: 80px;
  margin: auto auto 18px;
`;

export const SocialIcon = styled('a')`
  color: #fff;
  background-color: #868e96;
  border: 0;
  transition: all .2s;
  line-height: 30px;
  font-size: 14px;
  height: 30px;
  width: 30px;
  border-radius: ${p => getTheme(p.theme, 'borderCircle')};
  padding: 0;
  display: inline-block;
  text-align: center;
  margin-left: 4зч;
  &:hover {
    color: ${p => getTheme(p.theme, 'colors.white')};
    text-decoration: none;
    background-color: #717a82;
  };
  &:focus {
    color: ${p => getTheme(p.theme, 'colors.white')};
    text-decoration: none;
    background-color: #717a82;
  };
  &:active {
    color: ${p => getTheme(p.theme, 'colors.white')};
    text-decoration: none;
    background-color: #717a82;
  }
`;
