import React, { Component } from 'react';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import filter from 'lodash/filter';
import { Badge } from 'antd';
import theme from '@lskjs/theme';
import getTheme from '@lskjs/theme/getTheme';
// import If from 'react-if';
import isEmpty from '@lskjs/utils/isEmpty';
import T from '@lskjs/ui/T';
import withResponsive from '@lskjs/button/withResponsive';
import FilterIcon from './FilterIcon';
import { contextToProps } from './List.context';
import { FilterButtonWrapper } from './List.styles';

@contextToProps('List', 'isFilterModal')
@inject('listStore')
@observer
class FilterButton extends Component {
  render() {
    const {
      List, listStore,
    } = this.props;
    // console.log('lsk-ux FilterButton', listStore.filter);
    const badge = listStore.hasFilter ? listStore.getActiveFilter : 0;
    const ResponsiveButton = withResponsive(List.Button);
    const Button = props => (
      <ResponsiveButton
        icon={<FilterIcon />}
        paint="primary"
        size="small"
        view="text"
        bordered
        {...props}
      />
    );
    return (
      <FilterButtonWrapper>
        {/*  className={isFilterModal ? 'd-none d-md-flex' : null} */}
        <Badge count={badge}>
          <Button
            size="small"
            // className={listStore.showFilter ? filterButtonStyle : null}
            style={listStore.showFilter ? { backgroundColor: getTheme(theme, 'colors.lighterPrimary') } : {}}
            onClick={listStore.toggleFilter}
          >
            <T name="lskList.filterButton" />
          </Button>
        </Badge>
      </FilterButtonWrapper>
    );
  }
}

export default FilterButton;
