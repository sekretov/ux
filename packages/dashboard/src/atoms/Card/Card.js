import styled from '@emotion/styled';
import createDynamicTag from '@lskjs/utils/createDynamicTag';

const dynamicTag = createDynamicTag('div');
export default styled(dynamicTag)`
  text-decoration: none;
  background-color: #efefef;
  padding: 16px;
  display: block;
`;
