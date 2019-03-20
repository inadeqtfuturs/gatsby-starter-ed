import React, { Component } from 'react';
import { Link } from 'gatsby';

import style from './styles/menu';

class NarrativeMenu extends Component {
  constructor(props) {
    super(props);

    this.toggleClass= this.toggleClass.bind(this);
    this.state = {
      activeIndex: 0,
    }
  }

  toggleClass(index, e) {
    this.setState({ activeIndex: index });
  }

  render() {
    const { title, chapters,
          themeStyle=style } = this.props;
    /* sanitize */
    // console.log(chapters)
    // const menuArray = chapters.replace(/(<ul>|<li>|<\/ul>|<\/li>|<a href="|\r\n|\n|\r)/g, "").split("</a>").slice(0, -1).map(item => {
    //  return item.split("\">")
    // });
    // console.log(menuArray)
    return (
      <nav className={themeStyle}>
        <Link to={'/'}>Home</Link>
        <a href={'#title'}>{title}</a>
        <section dangerouslySetInnerHTML={{ __html: chapters }} />
      </nav>
    )
  }
}

export default NarrativeMenu      