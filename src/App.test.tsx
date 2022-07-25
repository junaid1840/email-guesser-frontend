import React from 'react';
import { render, RenderResult, screen} from '@testing-library/react';
import { App } from './App';

describe("App - ", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<App />);
  });

  it('Should renders Email Guesser heading', () => {
    const linkElement = screen.getByText(/Email Guesser/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should render Find Email Form', async () => {
    const findEmailForm = await component.getByTestId("find-email-form")
    expect(findEmailForm).toBeInTheDocument();
  });

  it('should render Search List table', async () => {
    const searchListTable = await component.getByTestId("search-list-table")
    expect(searchListTable).toBeInTheDocument();
  });
})
