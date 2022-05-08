import { render } from '@testing-library/react';

import ConfigurationBox from './configuration-box';

describe('ConfigurationBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConfigurationBox />);
    expect(baseElement).toBeTruthy();
  });
});
