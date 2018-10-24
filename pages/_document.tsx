import Document, { Head, Main, NextScript } from 'next/document'

const Eruda = () => <div>
  <script type="text/javascript" src="//cdn.jsdelivr.net/npm/eruda"></script>
  <script dangerouslySetInnerHTML={{ __html: `eruda.init()` }} />
</div>

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1.0 user-scalable=no" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
        {process.env.DEPLOY_ENV !== 'prd' && <Eruda />}
      </html>
    )
  }
}
