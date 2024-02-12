import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const FavouritesAgency = () => {
  const favoriteList = useSelector((state) => state.favorites.content);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <div className="text-center">
          <h1>Lista delle aziende favorite</h1>
        </div>
        {favoriteList.map((company, index) => {
          return (
            <div className="d-flex justify-content-center">
              <Col key={index} sm={12} className="my-3">
                <div>
                  <h5>{company.company_name}</h5>
                </div>
              </Col>
              <Button
                className="mb-2 py-0"
                variant="danger"
                onClick={() => {
                  dispatch({ type: "REMOVE_FAVORITE", payload: company._id });
                }}>
                DELETE
              </Button>
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default FavouritesAgency;
