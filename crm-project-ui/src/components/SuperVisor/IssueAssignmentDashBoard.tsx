import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";

import { openaxios } from "../../api/axios-usage";
import {
  I_ASSIGNMENT_BYID,
  I_ASSIGNMENT_BYSUPERVISORID,
} from "../../api/supervisor-urls";
import { useEffect, useState } from "react";
import IssueAssignment from "../../interfaces/Supervisor";
import useErrorHandler from "../../hooks/useErrorHandler";
import styled from "@emotion/styled";
import IssueAssignmentEdit from "./IssueAssignmentEditModal";
import { Link, useNavigate } from "react-router-dom";
import { WidthFull } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const IssueAssignmentDashBoard = () => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpenDialog = () => setOpen(true);
  const handleCloseDialog = () => setOpen(false);

  const errorHandler = useErrorHandler();

  let [assignments, setAssignments] = useState<IssueAssignment[]>([]);

  useEffect(() => {
    getIssueAssignments();
  }, []);

  async function getIssueAssignments() {
    await openaxios
      .get(I_ASSIGNMENT_BYSUPERVISORID + 3)
      .then((assignment) => {
        console.log(assignment.data);
        setAssignments(assignment.data);
      })
      .catch((err) => {
        console.log(err);
        errorHandler(err, undefined, false);
      });
  }

  const navigateToEdit = (data: IssueAssignment) => {
    console.log(data);
    console.log(typeof data);
    alert(data.buildingName + "1234");
    navigate("/supervisor/edit", { state: data });
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#BFD8AF" }}>
              <TableCell>Resident Contact</TableCell>
              <TableCell>Issue Description</TableCell>
              <TableCell>Worker Name</TableCell>
              <TableCell>Issue Status</TableCell>
              <TableCell>Issue Created Date</TableCell>
              <TableCell>Issue End Date</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assignments.map((row) => (
              <TableRow
                key={row.issueAssignmentId}
                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.customerPhNo}</TableCell>
                <TableCell>{row.issueDescription}</TableCell>
                <TableCell>{row.workerName}</TableCell>
                <TableCell>{row.issueStatusRefCode}</TableCell>
                <TableCell>
                  {new Date(row.issueAssignmentStartDate).toLocaleString()}
                </TableCell>
                <TableCell>
                  {row.issueAssignmentEndDate
                    ? row.issueAssignmentEndDate.toLocaleString()
                    : ""}
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-label="edit"
                    // LinkComponent={Link}
                    // to="/edit"
                    // state={{}}
                    // onClick={handleOpenDialog}
                    onClick={() => navigateToEdit(row)}
                  >
                    <EditIcon />
                    {/* <Dialog
                      open={open}
                      onClose={handleCloseDialog}
                      maxWidth="md"
                      fullWidth={true}
                    >
                      <DialogTitle>Issue Details</DialogTitle>
                      <DialogContent>
                        <IssueAssignmentEdit
                          issueAssignment={row}
                          handleCloseDialog={handleCloseDialog}
                        />
                      </DialogContent> 
                    </Dialog>*/}
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default IssueAssignmentDashBoard;
