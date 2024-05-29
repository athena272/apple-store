import Header from "@/components/Header"
import { NextPage } from "next"
import Head from "next/head";
import { Container } from "reactstrap"

const Cart: NextPage = () => {
    return (
        <>
            <Head>
                <title>Carrinho</title>
                <meta name="description" content="Meu carrinho de compras. Conheça o mundo inovador da Apple e compre seu iPhone, iPad, Apple Watch, Mac e Apple TV. Explore acessórios, entretenimento e suporte especializado." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/appleFav.png" type="image/x-icon" />
            </Head>

            <Header />

            <main>
                <Container className="mb-5">
                    <h1 className="my-5">
                        Carrinho
                    </h1>

                </Container>
            </main>
        </>
    )
}

export default Cart