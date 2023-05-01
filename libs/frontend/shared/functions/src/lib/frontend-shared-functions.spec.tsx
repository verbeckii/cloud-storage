import { render } from '@testing-library/react';

import FrontendSharedFunctions from './frontend-shared-functions';

describe('FrontendSharedFunctions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendSharedFunctions />);
    expect(baseElement).toBeTruthy();
  });
});
