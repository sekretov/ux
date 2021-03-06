import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import autobind from '@lskjs/autobind';
import Promise from 'bluebird';
import isFunction from 'lodash/isFunction';
import Dropzone from 'react-dropzone';
import cx from 'classnames';
import zoneStyle from './Files.styles';

@inject(s => ({
  upload: s.uapp.modules.upload,
  uapp: s.uapp,
}))
@observer
class Files extends Component {
  static propTypes = {
    value: PropTypes.any,
    dropText: PropTypes.string,
    buttonText: PropTypes.string,
    placeholder: PropTypes.string,
    validationState: PropTypes.oneOf(['success', 'warning', 'error']),
    info: PropTypes.string,
    onSubmit: PropTypes.func,
    onError: PropTypes.func,
    upload: PropTypes.object.isRequired,
    id: PropTypes.string,
    title: PropTypes.string,
    multiple: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.func,
    footer: PropTypes.func,
    type: PropTypes.string,
  }
  static defaultProps = {
    className: null,
    multiple: false,
    onSubmit: null,
    onError: null,
    value: null,
    info: null,
    dropText: null,
    buttonText: null,
    placeholder: null,
    validationState: null,
    id: null,
    title: null,
    children: null,
    footer: null,
    type: undefined,
  }
  constructor(props) {
    super(props);
    this.state = {
      // value: props.value,
      dragged: false,
    };
    this.zone = React.createRef();
  }
  // componentWillReceiveProps(next) {
  //   const { value } = this.props;
  //   if (value !== next.value) {
  //     this.setState({ value: next.value });
  //   }
  // }
  @autobind
  async onDrop(files = []) {
    const {
      onSubmit,
      upload,
      onError,
      multiple,
      uapp,
    } = this.props;
    if (!upload) return;
    let value = null;
    try {
      const res = await Promise.map(files, file => (
        upload.uploadFile(file)
      ));
      if (multiple) value = res.map(e => e.url);
      else value = res[0] && res[0].url;
      if (onSubmit) onSubmit(value);
    } catch (err) {
      if (uapp.onError) {
        uapp.onError(err);
      } else {
        console.error('Files.onDrop', '!onError', onError, err);
      }
    }
    this.setState({ dragged: false });
  }
  @autobind
  onDragged(dragged) {
    this.setState({ dragged });
  }
  @autobind
  remove({ src } = {}) {
    const { onSubmit } = this.props;
    if (onSubmit) {
      onSubmit({ // хуйня, но что поделать?
        type: 'remove',
        src,
      });
    }
  }
  @autobind
  removeAll() {
    const { onSubmit } = this.props;
    if (onSubmit) onSubmit(null);
  }

  render() {
    const { dragged } = this.state;
    const { value2 } = this.props;
    const {
      info,
      dropText,
      buttonText,
      validationState,
      multiple,
      showPreview,
      className,
      children,
      footer,
      type,
      id,
      title,
      ...otherProps
    } = this.props;
    const childrenProps = {
      validationState,
      refZone: this.zone,
      dragged,
      value: value2,
      info,
      buttonText,
      onRemoveAll: this.removeAll,
      onRemove: this.remove,
      dropText,
      multiple,
      showPreview,
      type,
      avatar: {
        id,
        title,
      },
    };
    return (
      <React.Fragment>
        <Dropzone
          {...otherProps}
          className={cx({
            [zoneStyle]: true,
            [className]: className,
          })}
          disableClick
          multiple={multiple}
          ref={this.zone}
          onDrop={this.onDrop}
          onDragEnter={() => this.onDragged(true)}
          onDragLeave={() => this.onDragged(false)}
        >
          {isFunction(children) ? children(childrenProps) : children}
        </Dropzone>
        {isFunction(footer) ? footer(childrenProps) : footer}
      </React.Fragment>
    );
  }
}

export default Files;
