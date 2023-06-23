import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export default function BasicTable({
  setModal,
  setNoticeToBeUpdated,
  data,
  dispatch,
}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>#</b>
            </TableCell>
            <TableCell>
              <b>Title</b>
            </TableCell>
            <TableCell align="right">
              <b>Description</b>
            </TableCell>
            <TableCell align="right">
              <b>Status</b>
            </TableCell>
            <TableCell align="right">
              <b>Actions</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.noticeData.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <b>{index + 1}</b>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">
                {row.status ? "Available" : "Not Available"}
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ margin: "0 0 5px 0" }}
                  onClick={() => {
                    setModal(true);
                    setNoticeToBeUpdated(row);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this notice?"
                      ) === true
                    ) {
                      dispatch({ type: "DELETE", payload: row });
                      toast.success("Notice deleted successfully!");
                    }
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
