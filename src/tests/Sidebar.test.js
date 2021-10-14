import { render, screen } from '@testing-library/react';

import Sidebar from '../components/Sidebar';

import { BrowserRouter as Router } from 'react-router-dom';

import renderer from 'react-test-renderer';

test('sidebar includes our three links', () => {
  render(
    <Router>
      <Sidebar />
    </Router>
  );

  expect(screen.getAllByRole('link', /side-item/i)).toHaveLength(3);
});

test('renders correclty', () => {
  const tree = renderer
    .create(
      <Router>
        <Sidebar />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
