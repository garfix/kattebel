import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import App from './App';
import { getRoute } from './page/routes'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('creates a route', (done) => {

    let route = getRoute('/user/1');

    expect(route).toMatch("/kattebel/user/1");
    done();
});

it('has props', (done) => {

    class HelloWorld extends React.Component {
        render() {
            return <div>{this.props.children}</div>
        }
    }

    const hello = TestUtils.renderIntoDocument(<HelloWorld>Hello Node!</HelloWorld>);

    expect(TestUtils.scryRenderedDOMComponentsWithTag(hello, "div").length).toBe(1);

    done();
});