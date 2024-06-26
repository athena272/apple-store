import { GetStaticProps, NextPage } from "next"
import { ReactNode, useEffect, useState } from "react"
import { Col, Container, Row } from "reactstrap"

type ApiResponse = {
    name: string
    timestamp: Date
}

export const getStaticPrpos: GetStaticProps = async () => {
    const staticData = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json())

    return {
        props: {
            staticData
        },
        revalidate: (60 * 20) // 60 seconds * 20
    }
}

const Static: NextPage = (props: { children?: ReactNode, staticData?: ApiResponse }) => {
    const [clientSideData, setClientSideData] = useState<ApiResponse>()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(`/api/hello`).then(res => res.json())
        setClientSideData(data)
    }

    return (
        <Container tag="main">
            <h1 className="my-5">
                Como funcionam as renderizações do Next.js
            </h1>

            <Row>
                <Col>
                    <h3>
                        Gerado estaticamente durante o build:
                        <p>
                            {props.staticData?.timestamp.toString()}
                        </p>
                    </h3>
                </Col>

                <Col>
                    <h3>
                        Gerado no cliente:
                        <p>
                            {clientSideData?.timestamp.toString()}
                        </p>
                    </h3>
                </Col>
            </Row>
        </Container>
    )
}

export default Static