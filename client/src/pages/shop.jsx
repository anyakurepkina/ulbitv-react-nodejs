import { Col, Container, Row } from 'react-bootstrap';
import BrandBar from '../components/brand-bar';
import DeviceList from '../components/device-list';
import TypeBar from '../components/type-bar';

const Shop = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;
