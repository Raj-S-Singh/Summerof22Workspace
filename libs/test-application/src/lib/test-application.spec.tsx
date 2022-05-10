import { render } from '@testing-library/react';

import TestApplication from './test-application';

describe('TestApplication', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestApplication />);
    expect(baseElement).toBeTruthy();
  });
});
