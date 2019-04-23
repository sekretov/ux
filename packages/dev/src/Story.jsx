import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import defaultTheme from '@lskjs/theme';
import Performance from './Performance';
import State from './State';

class Story extends Component {
  componentDidMount() {
    window.story = this;
    if (window.parent) window.parent.story = this;
  }
  render() {
    const {
      children, devtools, locale = 'en', theme = defaultTheme, style, state = {},
    } = this.props;
    const user = {};
    const api = {
      fetch: (...args) => console.log('api.get', ...args),
    };
    const t = a => (a === 'locale' ? locale : a);
    const i18 = { t };
    const config = {};
    const uapp = {
      i18,
      user,
      t,
      config,
      api,
      modules: {
        upload: {
          uploadFile: async e => ({ url: e.name }),
        },
        billing: {
          stores: {
            Transactions: {
              getCardTokenSign: () => {},
            },
          },
        },
      },
      onError: e => console.error(e),
      provide: () => ({
        t,
        config,
        i18,
        user,
        uapp,
        api,
      }),
    };
    return (
      <Performance>
        <ThemeProvider theme={theme}>
          <Provider
            uapp={uapp}
            {...uapp.provide()}
          >
            <div
              style={{
                border: '30px #eee solid',
                // width: '80%',
                // fontFamily: 'Gotham Pro',
                // padding: '10px',
                ...style,
              }}
            >
              <State {...state}>
                {children}
              </State>
              {devtools && <DevTools />}
            </div>
          </Provider>
        </ThemeProvider>
      </Performance>

    );
  }
}

export default Story;