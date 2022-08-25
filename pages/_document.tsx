import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="pop-up-modal" />
          <div id="slide-up-modal" />
          <div id="toast" />
        </body>
      </Html>
    );
  }
}
