import React from 'react';
import {render, act, fireEvent} from '@testing-library/react';

import ComponentButton from '../ComponentButton.jsx';

describe('ComponentButton test', () => {
  afterEach(() => jest.clearAllMocks());

  describe('given disabled is false', () => {
    let wrappper;
    beforeEach(() => {
      wrappper = render(
        <ComponentButton
          disabled={false}
        />
      );
    })

    test('Should render ComponentButton', () => {
      const {container} = wrappper;
  
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
      const {getByText} = wrappper;
  
      await act(async () => {
        fireEvent.click(getByText('Click me to show secret'));
      })
  
      expect(getByText('My secret message')).toBeInTheDocument();
    });
  })
  
  describe('given disabled is true', () => {
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
});