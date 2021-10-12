import { render, screen } from '@testing-library/react';

import CustomerCard from '../components/CustomerCard';

test('wrong prop types still render in customer card', () => {
  render(
    <CustomerCard
      id={1}
      name={'testname'}
      since={'testsince'}
      revenue={'testrevenue'}
    />
  );

  expect(screen.getByText(/1/i)).toBeTruthy();
});
