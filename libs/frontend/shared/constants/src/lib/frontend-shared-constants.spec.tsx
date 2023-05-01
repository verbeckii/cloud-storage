import { render } from '@testing-library/react';

import FrontendSharedConstants from './frontend-shared-constants';

describe('FrontendSharedConstants', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendSharedConstants />);
    expect(baseElement).toBeTruthy();
  });
});
