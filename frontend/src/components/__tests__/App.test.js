import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';

import App from '../../App';

const movieHeading = process.env.FAIL_TEST ? 'WRONG_HEADING' : 'Movie List';

test('renders Movie List heading', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
  expect(result.props.children[0].props.children).toEqual(movieHeading);
});
