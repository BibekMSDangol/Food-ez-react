import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    ListGroup,
    ListGroupItem,
  } from "reactstrap";
  
  function FoodDetails({ food }) {
    //   const bookId = useParams().bookId;
    //   const book = books.find((b) => b._id === bookId);
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{food.name}</CardTitle>
            <CardText>{food.price}</CardText>
          </CardBody>
          <ListGroup flush>
            {food.restaurant.map((restaurant) => {
              return (
                <ListGroupItem key={restaurant._id}>{restaurant.name}</ListGroupItem>
              );
            })}
          </ListGroup>
        </Card>
      </div>
    );
  }
  export default FoodDetails;
  