import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Context } from '../main';

const BrandBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <Row className="d-flex">
            {device.brands.map(brand => (
                <Col key={brand.id}>
                    <Card
                        style={{ cursor: 'pointer' }}
                        className="p-3"
                        onClick={() => device.setSelectedBrand(brand)}
                        border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    >
                        {brand.name}
                    </Card>
                </Col>
            ))}
        </Row>
    );
});

export default BrandBar;
