// Import Component
import Component from './Component.js';

// Article is a child object of Component
class Article extends Component {

  constructor (title, author, content) {
    // Send what it gets to its parent object
    this.props = {};
    this.props.title = new Component (title);
    this.props.author = author;
    this.props.content = content;
  }

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    return (`
      <Article>
        ${this.props.title.render()}
        <span>${this.props.author}</span>
        <div>${this.props.text}</div>
      </Article>`;
  }

}

export default Article;
