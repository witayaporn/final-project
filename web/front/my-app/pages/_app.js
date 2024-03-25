import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
      <Layout>
        <div className="content">
          <Component {...pageProps} />
        </div>
      </Layout>
  )
}
