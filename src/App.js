import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, Container, Button, CssReset, GlobalCss, Themes } from '@monorepo-demo/monorepo_demo-design_system';
import { Banner } from './components'

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
