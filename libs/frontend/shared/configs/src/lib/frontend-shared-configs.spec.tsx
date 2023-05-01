import { render } from '@testing-library/react';

import FrontendSharedConfigs from './frontend-shared-configs';

describe('FrontendSharedConfigs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendSharedConfigs />);
    expect(baseElement).toBeTruthy();
  });
});
