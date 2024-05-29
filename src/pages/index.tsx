import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { Button, Container } from "reactstrap";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Apple Store</title>
        <meta name="description" content="Conheça o mundo inovador da Apple e compre seu iPhone, iPad, Apple Watch, Mac e Apple TV. Explore acessórios, entretenimento e suporte especializado." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/appleFav.png" type="image/x-icon" />
      </Head>

      <Header />

      <main>
        <Container className="py-5 text-center">
          <h1 className="mt-5 display-1">
            O melhor jeito de comprar o que você ama
          </h1>
          <p className="my-4 fs-3">
            Conheça o mundo inovador da Apple e compre seu iPhone, iPad, Apple Watch, Mac e Apple TV. Explore acessórios, entretenimento e suporte especializado.
          </p>
          <Link href="/products">
            <Button color="dark" className="px-4 pb-2">
              Conheça nossos produtos!
            </Button>
          </Link>
        </Container>
      </main>
    </>
  );
}
