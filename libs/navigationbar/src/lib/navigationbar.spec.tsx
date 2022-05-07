import { render } from '@testing-library/react';

import Navigationbar from './navigationbar';

describe('Navigationbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navigationbar />);
    expect(baseElement).toBeTruthy();
  });
});
