import { Box, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useOutlet } from "react-router-dom";
import Item from "../../components/Item";
import { useBookData } from "../../context/BookContext";
import { useNoticeData } from "../../context/NoticeContext";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [active, setActive] = useState(1);

  const outlet = useOutlet();

  const { state: bookData } = useBookData();
  const { state: noticeData } = useNoticeData();
  console.log();

  return (
    <Box display="flex" height="72vh">
      <Box display="flex" flexDirection="column" flexBasis="15%">
        <Link
          className={`${styles.sidebar} ${active === 1 && styles.active}`}
          onClick={() => setActive(1)}
          to="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className={`${styles.sidebar} ${active === 2 && styles.active}`}
          onClick={() => setActive(2)}
          to="/dashboard/books"
        >
          Book List
        </Link>
        <Link
          className={`${styles.sidebar} ${active === 3 && styles.active}`}
          onClick={() => setActive(3)}
          to="/dashboard/notice"
        >
          Notice
        </Link>
      </Box>

      <Box flexBasis="85%" sx={{ overflowY: "scroll" }}>
        {outlet ? (
          outlet
        ) : (
          <Container maxWidth="md">
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Item>
                    <Typography>Total Books</Typography>
                    <span>{bookData.bookData.length}</span>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <Typography>Total Notice</Typography>
                    <span>{noticeData.noticeData.length}</span>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <Typography>Total Users</Typography>
                    <span>1</span>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Container>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
