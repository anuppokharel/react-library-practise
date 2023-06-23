import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import CustomModal from "../../components/Modal";
import { useNoticeData } from "../../context/NoticeContext";
import Form from "./Form";
import BasicTable from "./Table";

const Notice = () => {
  const { state: data, dispatch } = useNoticeData();
  const [modal, setModal] = useState(false);
  const [noticeToBeUpdated, setNoticeToBeUpdated] = useState(null);

  const toggleModal = () => {
    modal && setNoticeToBeUpdated(null);

    setModal(!modal);
  };

  return (
    <Container maxWidth="sm" sx={{ margin: "0 auto 10.25px auto" }}>
      <Typography align="center" fontSize="24px">
        Notice
      </Typography>
      <Box display="flex" justifyContent="flex-end" margin="10.25px 0">
        <Button variant="contained" onClick={toggleModal}>
          Create Notice
        </Button>
      </Box>
      {data.noticeData.length > 0 ? (
        <BasicTable
          data={data}
          dispatch={dispatch}
          setNoticeToBeUpdated={setNoticeToBeUpdated}
          setModal={setModal}
        />
      ) : (
        <Typography align="center" fontSize="20px" fontWeight="bold">
          No notice published!
        </Typography>
      )}

      {/* React Strap  */}

      <Box>
        <CustomModal
          isOpen={modal}
          toggle={toggleModal}
          size="lg"
          modalHeader={noticeToBeUpdated ? "Edit Notice" : "Create Notice"}
          modalBody={
            <Form
              noticeToBeUpdated={noticeToBeUpdated}
              setNoticeToBeUpdated={setNoticeToBeUpdated}
              dispatch={dispatch}
              toggleModal={toggleModal}
            />
          }
        />
      </Box>
    </Container>
  );
};

export default Notice;
