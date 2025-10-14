import Button from "react-bootstrap/Button";
import "./Footer.css";

function MyFooter({ author, email, linkGithub }) {
  return (
    <footer>
      <p>Author: {author}</p>
      <p>Created by: {email}</p>
      <p>&copy; {new Date().getFullYear()} {author}. All rights reserved</p>
      <Button variant="link" href="https://github.com/Ngocquang0911/FER202/tree/main/Slot9/ex1">
        My Link Github: Movie Management Project
      </Button>
    </footer>
  );
}

export default MyFooter;
