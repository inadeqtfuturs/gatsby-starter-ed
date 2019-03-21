import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { cx } from 'emotion'

import Header from './header'
import Main from './main'
import Sidebar from './sidebar'
import ToggleButton from './toggleButton';
import ThemeWrapper from './themeWrapper';


import './styles/variables';
import './styles/global';
import style from './styles/layout';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  
  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { children, themeStyle=style, 
            title, chapters } = this.props;

    return (
      <StaticQuery
        query={layoutQuery}
        render={data => (
          <ThemeWrapper
            theme={data.site.siteMetadata.theme}>
            <div className={themeStyle}>
              <Sidebar
                open={this.state.isOpen}
                toggle={() => this.toggleMenu()}
                sidebar={data.site.siteMetadata.sidebar}
                title={title}
                chapters={chapters}
              />
              <ToggleButton
                open={this.state.isOpen}
                toggle={() => this.toggleMenu()} />
              <div className={cx('wrap', [this.state.isOpen ? 'open' : 'close'])}>
                <Header
                  title={data.site.siteMetadata.title}
                  sub={data.site.siteMetadata.subtitle}
                />
                <Main>
                  {children}
                </Main>
              </div>
            </div>
          </ThemeWrapper>
        )}
      />
    )
  }  
}

export default Layout;

const layoutQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
        theme
        sidebar {
          ...SidebarInfo
        }
      }
    }
  }
  
  fragment SidebarInfo on SiteSiteMetadataSidebar {
    description
    licence
  }
`