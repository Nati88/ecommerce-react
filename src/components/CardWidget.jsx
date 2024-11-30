
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from 'react-bootstrap';

const CardWidget = () => {
    const cartCount = 5;
    return(
        <div style={{ display: "flex", alignItems: "center", color: "white" }}>
            <FaShoppingCart size={24} />
            <Badge bg="danger" style={{ marginLeft: "8px" }}>
                {cartCount}
            </Badge>
        </div>
    )
}
export default CardWidget;