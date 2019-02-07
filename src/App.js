import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CssReset, GlobalCss, Themes } from './style';
import {
  Header,
  Container,
  Banner,
  Button,
} from './components'

export default () => {
  return (
    <ThemeProvider theme={Themes.default}>
      <div>
        <CssReset />
        <GlobalCss />

        <Header />
        <Container>
          <Banner src="https://via.placeholder.com/768x200?text=I'm a banner" />
          <Button>Click me!</Button>
        </Container>
      </div>
    </ThemeProvider>
  );
}
