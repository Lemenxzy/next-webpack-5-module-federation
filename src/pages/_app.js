import andCSS from 'antd/dist/antd.css';
import Head from "next/head";
import { GlobalModule } from '../utils/windowKey';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
            <script>
                {
                    typeof window !== 'undefined' ?
                        GlobalModule()
                        :
                        null
                }
            </script>
        </Head>
        <div suppressHydrationWarning>
            {typeof window === 'undefined' ? <div>加载中</div> : <Component {...pageProps} />}
        </div>
    </>
  );
}
