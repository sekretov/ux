import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import autobind from 'core-decorators/lib/autobind';

// import getBlock from './Input.styles';
import getBlock from './Input.styles';
import {
  InputBox,
  LeftWrapper,
  RightWrapper,
} from './InputStyle.styles';

class Input extends PureComponent {
  static propTypes = {
    displayRate: PropTypes.number,
    validationState: PropTypes.oneOf(['success', 'warning', 'error']),
    componentClass: PropTypes.any,
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    styleName: PropTypes.string,
    leftIcon: PropTypes.any,
    rightIcon: PropTypes.any,
  }
  static defaultProps = {
    validationState: null,
    componentClass: 'input',
    block: false,
    disabled: false,
    styleName: null,
    displayRate: null,
    leftIcon: null,
    rightIcon: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.Block = getBlock(props.componentClass);
    let debounceValue = 100;
    if (typeof props.debounce === 'number') {
      debounceValue = props.debounce;
    }
    this.onChange = debounce((...args) => {
      if (props.onChange) {
        props.onChange(...args);
      }
    }, debounceValue);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.componentClass !== this.props.componentClass) {
      this.Block = getBlock(nextProps.componentClass);
    }
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  @autobind
  handleChange(e) {
    let value = e;
    if (!(typeof e === 'number' || typeof e === 'string') && e) {
      value = e.target ? e.target.value : e;
    }
    const { displayRate } = this.props;
    if (typeof displayRate === 'number') {
      value /= displayRate;
    }
    this.setState({ value });
    this.onChange(value);
  }

  render() {
    const {
      className,
      block,
      validationState,
      componentClass,
      disabled,
      displayRate,
      innerRef,
      leftIcon,
      rightIcon,
      ...otherProps
    } = this.props;
    const { value } = this.state;
    const { Block } = this;

    return (
      <InputBox>
        <If condition={leftIcon}>
          <LeftWrapper>
            {leftIcon}
          </LeftWrapper>
        </If>
        <Block
          iconLeft={leftIcon}
          iconRight={rightIcon}
          innerRef={innerRef}
          validationState={validationState}
          block={block}
          disabled={disabled}
          className={className}
          {...otherProps}
          value={typeof displayRate === 'number' ? value * displayRate : value}
          onChange={this.handleChange}
        />
        <If condition={rightIcon}>
          <RightWrapper>
            {rightIcon}
          </RightWrapper>
        </If>
      </InputBox>
    );
  }
}

export default Input;