import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

import isEmptyLodash from 'lodash/isEmpty';
import forEach from 'lodash/forEach';


const isEmpty = val => val !== true && isEmptyLodash(val);

const DefaultTags = ({ listStore, Tag }) => {
  const tags = [];
  if (!isEmpty(listStore.search)) {
    tags.push({
      key: '_search',
      id: '_search',
      children: listStore.search,
      onClose: () => listStore.setSearch(undefined),
    });
  }

  forEach(toJS(listStore.filter), (value, key) => {
    // console.log(key, value, isEmpty(value));
    if (isEmpty(value)) return;
    tags.push({
      key,
      id: key,
      children: `${key}: ${value}`,
      onClose: () => listStore.setFilter({
        ...listStore.filter,
        [key]: undefined,
      }),
    });
  });
  // console.log(listStore, { tags });

  return tags.map(tag => <Tag key={tag.key} {...tag} />);
};
export default observer(DefaultTags);
