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
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    foodService
      .getAll()
      .then((res) => {
        console.log(res.data);
        setFoods(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleAdd = (e) => {
    e.preventDefault();
    console.log(author, title);
    foodService
      .create({ title, author })
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
                {book.title}{" "}
                <Badge pill color="clear">
                  <Link to = {`/food/${food._id}`}>{food.reviews.length} reviews </Link>
                </Badge>
              </ListGroupItemHeading>
              <ListGroupItemText>{food.author}</ListGroupItemText>
              <Button color="success">Edit</Button>
              <Button
                color="danger"
                onClick={() => {
                  handleDelete(book._id);
                }}
              >
                Delete
              </Button>
            </ListGroupItem>
          );
        })}
      </ListGroup>{" "}
      <Form onSubmit={handleAdd}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Enter a book title here"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="author">Author</Label>
          <Input
            id="author"
            name="author"
            placeholder="Enter book author here"
            type="text"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </FormGroup>
        <Button color="primary">Add Food</Button>
      </Form>
    </div>
  );
};

export default Foods;
