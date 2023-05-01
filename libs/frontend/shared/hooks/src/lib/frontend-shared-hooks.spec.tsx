import { render } from '@testing-library/react';

import FrontendSharedHooks from './frontend-shared-hooks';

describe('FrontendSharedHooks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendSharedHooks />);
    expect(baseElement).toBeTruthy();
  });
});
