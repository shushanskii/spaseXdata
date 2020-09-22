import React from 'react';
import { GlobalStyle } from "components/theme/globalStyles";

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      { name: 'dark', value: '#0a0c0f' },
    ],
  }
}
