import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export default function UserTable({ Users }) {
  return (
    <>
      {
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Role</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Users.map((user) => (
                <StyledTableRow key={Math.random()}>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell>{user.email}</StyledTableCell>
                  {user.role === "user" ? (
                    <StyledTableCell>
                      <PersonIcon />
                    </StyledTableCell>
                  ) : (
                    <StyledTableCell>
                      <AdminPanelSettingsIcon />
                    </StyledTableCell>
                  )}
                  <StyledTableCell>
                    {
                      <>
                        <StyledTableCell onClick={() => alert("Edit")}>
                          <EditIcon sx={{ cursor: "pointer" }} />
                        </StyledTableCell>
                        <StyledTableCell onClick={() => alert("Delete")}>
                          <DeleteIcon sx={{ cursor: "pointer" }} />
                        </StyledTableCell>
                      </>
                    }
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </>
  );
}
