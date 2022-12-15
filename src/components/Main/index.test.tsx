import { render, screen } from '@testing-library/react';
import { Main } from './index';

describe('Main component', () => {
  beforeEach(() => {
    render(<Main />);
  });

  it("should render 'Main' text", () => {
    const mainElement = screen.getByText(/main/i);
    expect(mainElement).toBeInTheDocument();
  });
});
