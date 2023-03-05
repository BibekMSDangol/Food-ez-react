import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, Badge } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
import foodService from "../services/foodService";

const Foods = ({ foods, setFoods }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  useEffect(() => {
    foodService
      .getAll()
      .then((res) => {
        console.log(res.data);
        setFoods(res.data.allFood);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleAdd = (e) => {
    e.preventDefault();
    console.log(price, name);
    foodService
      .create({ name, price })
      .then((res) => setFoods(foods.concat(res.data)))
      .catch((err) => console.log(err));
  };
  const handleDelete = (foodId) => {
    if (window.confirm(`Do you really want to delete book with ig ${foodId}`)) {
      foodService
        .remove(foodId)
        .then((res) => {
          console.log(res.data);
          setFoods(foods.filter((f) => f._id !== foodId));
        })
        .catch((err) => console.log);
    }
  };
  return (
    <div>
      <h2>List of Foods</h2>
      <ListGroup>
        {foods.map((food) => {
          return (
            <ListGroupItem>
              <ListGroupItemHeading key={food._id}>
                {food.name}{" "}
                <Badge pill color="clear">
                  {/* <Link to = {`/food/${food._id}`}>{food.reviews.length} reviews </Link> */}
                </Badge>
              </ListGroupItemHeading>
              <ListGroupItemText>{food.price}</ListGroupItemText>
              <Button color="success">Edit</Button>
              <Button
                color="danger"
                onClick={() => {
                  handleDelete(food._id);
                }}
              >
                Delete
              </Button>
            </ListGroupItem>
          );
        })}
      </ListGroup>{" "}
      <Form >
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter a food item name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            id="price"
            name="price"
            placeholder="Enter the price"
            type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </FormGroup>
        <Button color="primary" onClick={handleAdd}>Add Food</Button>
      </Form>
    </div>
  );
};

export default Foods;
