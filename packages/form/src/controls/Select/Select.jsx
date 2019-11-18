import React, { Component, Fragment } from 'react';
import { Global } from '@emotion/core';
import find from 'lodash/find';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import autobind from '@lskjs/autobind';
import ReactSelect from 'react-select';
import ReactAsyncSelect from 'react-select/lib/Async';
import cx from 'classnames';
import Up from 'react-icons2/mdi/chevron-up';
import Down from 'react-icons2/mdi/chevron-down';
import { getOptionValue, getReverseOptionValue, getNormalizedOptions, NULL_STRING } from './utils';
import globalStyles from './Select.styles';
import SingleValue from './SingleValue';
import Option from './Option';
import CollapsedValueContainer from './CollapsedValueContainer';
import CollapsedMultiValue from './CollapsedMultiValue';


class Select extends Component {
  state = {}
  componentDidMount() {
    const {
      loadOption, field, async, isMulti,
    } = this.props;
    const value = get(field, 'value');
    if (async && value && loadOption) {
      if (isMulti && !value.length) return;
      this.initOption();
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { state, props } = this;
    const prevValue = get(props, 'field.value');
    const nextValue = get(nextProps, 'field.value');
    const hasError = nextProps.field && nextProps.field.name && !!get(nextProps.form, `errors.${nextProps.field.name}`);
    const hadError = this.props.field && this.props.field.name && !!get(this.props.form, `errors.${this.props.field.name}`);
    if (!isEqual(hadError, hasError)) {
      return true;
    }
    // console.log(nextProps);
    if (!isEqual(nextValue, prevValue)) {
      return true;
    } else if (!isEqual(state.option, nextState.option)) {
      return true;
    }
    return false;
  }
  async initOption() {
    const { loadOption, field } = this.props;
    const { value } = field;
    const option = await loadOption(value);
    this.setState({ option, initOption: true }); // eslint-disable-line react/no-unused-state
  }
  @autobind
  async loadOptions(...args) {
    try {
      // console.log('loadOptions');
      const { loadOptions, ...props } = this.props;
      const options = await loadOptions(...args);

      // console.log({ options });
      return getNormalizedOptions(options, props);
    } catch (err) {
      if (__DEV__) console.error('Form2/Select loadOptions error', err); // eslint-disable-line no-console
      return [];
    }
  }
  @autobind
  compareVal(currentValue, nextValue) {
    if (currentValue.title > nextValue.title) {
      return 1;
    }
    if (currentValue.title < nextValue.title) {
      return -1;
    }
    return 0;
  }
  @autobind
  handleChange(option) {
    const { form, field, onChange } = this.props;
    this.setState({ option, initOption: false }); // eslint-disable-line react/no-unused-state
    let value;
    if (option && option.length) {
      value = option.map(item => getReverseOptionValue(item && item.value));
    } else {
      value = getReverseOptionValue(option && option.value);
    }
    if (form && field) {
      form.setFieldValue(field.name, value);
    }
    if (onChange) onChange(value);
  }
  render() {
    const {
      blurInputOnSelect = true,
      hideSelectedOptions = false,
      placeholder = '',
      value: propValue,
      field,
      form,
      sortable,
      async,
      options,
      collapsed,
      className,
      components = {},
      styles = {},
      isMulti,
      isHideSelected,
      ...props
    } = this.props;
    if (sortable) {
      options.sort(this.compareVal);
    }
    const normalizedOptions = getNormalizedOptions(options, props);
    let option;
    let value;
    if (!async) {
      value = getOptionValue(field ? field.value : propValue);
    }
    if (async) {
      ({ option } = this.state);
    } else if (!isMulti) {
      option = find(normalizedOptions, { value });
    } else if (isMulti) {
      if (Array.isArray(value)) {
        option = normalizedOptions.filter(el => value.includes(el.value));
      } else {
        option = [];
      }
    }
    const SelectComponent = async ? ReactAsyncSelect : ReactSelect;
    const hasError = field && field.name && !!get(form, `errors.${field.name}`);
    const collapsedComponents = {
      ValueContainer: CollapsedValueContainer,
      MultiValue: CollapsedMultiValue,
    };
    const nullOption = find(normalizedOptions, o => o.value === NULL_STRING);
    const defaultIsClearable = !props.required && !nullOption;
    const defaultIsSearchable = options && options.length > 10;
    // console.log({ defaultIsClearable }, props.required, !!nullOption, !props.required, !nullOption, nullOption, props.isClearable, normalizedOptions);
    return (
      <Fragment>
        <Global styles={globalStyles} />
        <SelectComponent
          blurInputOnSelect={blurInputOnSelect}
          // isClearable={defaultIsClearable}
          isSearchable={defaultIsSearchable}
          isClearable={defaultIsClearable}
          arrowRenderer={e => (e.isOpen ? <Up /> : <Down />)}
          error={hasError}
          classNamePrefix="react-select"
          cacheOptions={async}
          defaultOptions={async}
          closeMenuOnSelect={false}
          placeholder={placeholder}
          isMulti={isMulti}
          hideSelectedOptions={hideSelectedOptions}
          {...field}
          {...props}
          components={{
            SingleValue,
            Option,
            ...(collapsed ? collapsedComponents : {}),
            ...components,
          }}
          styles={{
            singleValue: base => ({
              ...base,
              position: 'relative',
              top: 'inherit',
              transform: 'inherit',
              flexWrap: 'nowrap',
            }),
            valueContainer: base => ({
              ...base,
              flexWrap: 'nowrap',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }),
            ...styles,
          }}
          className={cx({
            'lsk-form-select': true,
            [className]: !!className,
            'has-error': hasError,
          })}
          value={option || null}
          loadOptions={this.loadOptions}
          onChange={this.handleChange}
          options={async ? null : normalizedOptions}
        />
      </Fragment>
    );
  }
}

export default Select;
