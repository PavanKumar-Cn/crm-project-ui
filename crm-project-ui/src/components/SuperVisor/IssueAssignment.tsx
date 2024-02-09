import {
  Box,
  Button,
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#BFD8AF" }}>
              <TableCell>Resident Contact</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Worker Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Issue Create Date</TableCell>
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
                  <IconButton aria-label="edit" onClick={handleOpen}>
                    <EditIcon />
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Duis mollis, est non commodo luctus, nisi erat
                          porttitor ligula.
                        </Typography>
                        <Box>
                          <Grid container spacing={2}>
                            <Grid item xs={6} md={6}>
                              {/* <Item>xs=6 md=8</Item> */}
                            </Grid>
                            <Grid item xs={6} md={6}>
                              {/* <Item>xs=6 md=4</Item> */}
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    </Modal>
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
