import React from 'react';
import {render, act, fireEvent} from '@testing-library/react';

import ComponentButton from '../ComponentButton.jsx';

describe('ComponentButton test', () => {
  afterEach(() => jest.clearAllMocks());

  test('Should render ComponentButton', () => {
    const {container} = render(
      <ComponentButton
        disabled={false}
      />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          <button
            type="button"
          >
            <span>
              Click me to show secret
            </span>
          </button>
          <div />
        </div>
      </div>
    `);
  });

  test('Should show secret message if button is clicked', async () => {
    const {getByText} = render(
      <ComponentButton
        disabled={false}
      />
    );

    await act(async () => {
      fireEvent.click(getByText('Click me to show secret'));
    })

    expect(getByText('My secret message')).toBeInTheDocument();
  });

  test('Should disable button if disable param is true', () => {
    const {container, getByText} = render(
      <ComponentButton
        disabled={true}
      />
    );

    expect(getByText('Click me to show secret').closest('button')).toBeDisabled();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          <button
            disabled=""
            type="button"
          >
            <span>
              Click me to show secret
            </span>
          </button>
          <div />
        </div>
      </div>
    `);
  });
});