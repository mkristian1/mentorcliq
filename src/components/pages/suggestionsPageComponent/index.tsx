import cn from "classnames";
import { Container } from "react-bootstrap";
import { useAppSelector } from "../../../hooks/toolkit";
import Employess from "../../employees";

const SuggestionsPageComponent = () => {
    return (
        <Container>
            <div className={cn('shadow-sm p-5 rounded')}>
                <Employess />
            </div>
        </Container>
    );
}

export default SuggestionsPageComponent;
