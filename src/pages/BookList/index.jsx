import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import CustomModal from "../../components/Modal";
import { useBookData } from "../../context/BookContext";
import Form from "./Form";
import BasicTable from "./Table";

const BookList = () => {
  const { state: data, dispatch } = useBookData();
  const [modal, setModal] = useState(false);
  const [bookToBeUpdated, setBookToBeUpdated] = useState(null);

  const toggleModal = () => {
    modal && setBookToBeUpdated(null);
    setModal(!modal);
  };

  return (
    <Container maxWidth="sm" sx={{ margin: "0 auto 10.25px auto" }}>
      <Typography fontSize="24px" textAlign="center">
        Books
      </Typography>
      <Box display="flex" justifyContent="flex-end" margin="10.25px 0">
        <Button variant="contained" onClick={toggleModal}>
          Create New Book
        </Button>
      </Box>
      {data.bookData.length > 0 ? (
        <BasicTable
          setModal={setModal}
          setBookToBeUpdated={setBookToBeUpdated}
          data={data}
          dispatch={dispatch}
        />
      ) : (
        <Typography align="center" fontSize="20px" fontWeight="bold">
          No books found!
        </Typography>
      )}

      {/* React Strap  */}

      <Box>
        <CustomModal
          isOpen={modal}
          toggle={toggleModal}
          size="lg"
          modalHeader={bookToBeUpdated ? "Edit Book" : "Create a new Book"}
          modalBody={
            <Form
              bookToBeUpdated={bookToBeUpdated}
              dispatch={dispatch}
              setBookToBeUpdated={setBookToBeUpdated}
              toggleModal={toggleModal}
            />
          }
        />
      </Box>
    </Container>
  );
};

export default BookList;
