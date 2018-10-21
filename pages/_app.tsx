import App, { Container } from 'next/app'
import React from 'react'

interface InitialPropsModal {
  Component: any,
  ctx: any
}

export default class RootApp extends App {
  static async getInitialProps({ Component, ctx }: InitialPropsModal) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return <Container>
      <Component {...pageProps} />
    </Container>
  }
}
