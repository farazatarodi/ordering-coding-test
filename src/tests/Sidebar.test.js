import { render, screen } from '@testing-library/react';

import Sidebar from '../components/Sidebar';

import { BrowserRouter as Router } from 'react-router-dom';

test('sidebar includes our three links', () => {
  render(
    <Router>
      <Sidebar />
    </Router>
  );

  expect(screen.getAllByRole('link', /side-item/i)).toHaveLength(3);
});
