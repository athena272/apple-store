import { GetServerSideProps, NextPage } from "next"
import { ReactNode, useEffect, useState } from "react"
import { Col, Container, Row } from "reactstrap"

type ApiResponse = {
    name: string
    timestamp: Date
}

export const getServerSideProps: GetServerSideProps = async () => {
    const serverSideData: ApiResponse = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json())

    return {
        props: {
            serverSideData
        }
    }
}
  
const Dynamic: NextPage = (props: { serverSideData?: ApiResponse, children?: ReactNode }) => {
    const [clientSideData, setClientSideData] = useState<ApiResponse>()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("/api/hello").then(res => res.json())
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
                        Gerado no servidor:
                        <p>
                            {props.serverSideData?.timestamp.toString()}
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

export default Dynamic