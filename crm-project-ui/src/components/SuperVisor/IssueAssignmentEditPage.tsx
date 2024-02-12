import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import IssueAssignment from "../../interfaces/Supervisor";
import { useState } from "react";

const IssueAssignmentEditPage = () => {
  const navigate = useNavigate();
  let locaction = useLocation();
  let ass = locaction.state as IssueAssignment;

  const [issueAssignment, setIssueAssignment] = useState(ass);
  const [formErrors, setFormErrors] = useState({
    workerName: {
      error: false,
      msg: "",
    },
    remarks: {
      error: false,
      msg: "",
    },
  });
  function alertSupervisor() {
    switch (true) {
      case formErrors.remarks.msg !== "" && formErrors.workerName.msg !== "": {
        alert(formErrors.remarks.msg + "\n" + formErrors.workerName.msg);
        break;
      }
      case formErrors.remarks.msg !== "": {
        alert(formErrors.remarks.msg);
        break;
      }
      case formErrors.workerName.msg !== "": {
        alert(formErrors.workerName.msg);
        break;
      }
    }
  }
  const handleUpdateIssueAssignmen = () => {
    let validationFlag = false;
    if (
      issueAssignment.workerName === null ||
      issueAssignment.workerName === undefined ||
      issueAssignment.workerName === ""
    ) {
      formErrors["workerName"].error = true;
      formErrors["workerName"].msg = "Provide Worker Name";
      validationFlag = true;
    }
    if (
      issueAssignment.remarks === null ||
      issueAssignment.remarks === undefined
    ) {
      formErrors["remarks"].error = true;
      formErrors["remarks"].msg = "Add Remarks";
      validationFlag = true;
    }

    if (validationFlag) {
      setFormErrors(() => {
        return { ...formErrors };
      });
      alertSupervisor();
      return;
    } else {
      alert(JSON.stringify(issueAssignment));
      console.error(" issue alert : " + JSON.stringify(issueAssignment));
    }
  };

  const showData = (data: IssueAssignment) => {
    console.log(
      "Issue Assignment data  " + data.issueAssignmentStartDate.toLocaleString()
    );
    // console.log("location : --------" + locaction.state);
  };

  const inputChangeHandle = (name: string, value: any) => {
    setIssueAssignment((preValues) => {
      // console.log("preValues......" + JSON.stringify(preValues));
      return { ...preValues, [name]: value };
    });
  };
  return (
    <>
      <Box
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // padding: "auto",
          paddingLeft: "10%",
        }}
      >
        <FormControl
          sx={{ width: "100%", alignItems: "center", blockOverflow: "auto" }}
        >
          <Paper
            elevation={2}
            square={false}
            sx={{
              width: "100%",
              height: "80vh",
              // alignContent: "center",
              padding: "1%",
            }}
          >
            <Stack padding={0}>
              <h1>Issue Assignment </h1>
            </Stack>
            <Divider />

            <Box
              sx={{
                display: "flex",
                // justifyContent: "center",
                flexDirection: "column",
                p: 0,
                // paddingRight: 5,
                overflowY: "auto",
                flexGrow: 1,
                maxHeight: "80%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  marginY: 2,
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  paddingLeft={5}
                  sx={{ textAlign: "start" }}
                >
                  Resident Details
                </Typography>
                <Divider />
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ md: 3 }}
                  rowGap={2}
                  textAlign={"left"}
                  paddingY={2}
                  paddingLeft={8}
                  // paddingLeft={5}
                  // padding={"20px"}
                >
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-read-only-input"
                      label="Contact Number"
                      name="customerPhNo"
                      value={ass.customerPhNo}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-read-only-input"
                      label="Tower "
                      name="tower"
                      value={ass.tower}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-read-only-input"
                      label="Flat Number "
                      name="flatNumber"
                      value={ass.flatNumber}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Divider />
              <Box
                sx={{
                  width: "100%",
                  marginY: 2,
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  paddingLeft={5}
                  sx={{ textAlign: "start" }}
                >
                  Issue Details
                </Typography>
                <Divider />
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ md: 3 }}
                  rowGap={2}
                  textAlign={"left"}
                  paddingY={2}
                  paddingLeft={8}
                  // paddingLeft={5}
                  // padding={"20px"}
                >
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-read-only-input"
                      label="Issue Related To"
                      name="issueTypeName"
                      value={ass.issueTypeName}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    {" "}
                  </Grid>

                  <Grid item xs={8}>
                    <TextField
                      id="outlined-read-only-input"
                      label="Issue Description "
                      name="issueDescription"
                      value={ass.issueDescription}
                      fullWidth
                      multiline
                      rows={2}
                      InputProps={{
                        readOnly: true,
                      }}
                      // sx={{
                      //   width: "80%",
                      // }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="outlined-read-only-input"
                      label="Issue Status"
                      value={ass.issueStatusRefCode}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Divider />
              <Box
                sx={{
                  width: "100%",
                  marginY: 2,
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  paddingLeft={5}
                  sx={{ textAlign: "start" }}
                >
                  Fill Details
                </Typography>
                <Divider />
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ md: 3 }}
                  rowGap={2}
                  textAlign={"left"}
                  paddingY={2}
                  paddingLeft={8}
                >
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required
                      name="workerName"
                      label="Worker Name"
                      onChange={(event) =>
                        inputChangeHandle(
                          event.currentTarget.name,
                          event.currentTarget.value
                        )
                      }
                      error={formErrors.workerName.error}
                    />
                  </Grid>

                  <Grid item xs={8}>
                    <TextField
                      required
                      type="string"
                      name="remarks"
                      label="Remarks"
                      multiline
                      rows={3}
                      fullWidth
                      onChange={(event) =>
                        inputChangeHandle(
                          event.currentTarget.name,
                          event.currentTarget.value
                        )
                      }
                      error={formErrors.remarks.error}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Paper>
        </FormControl>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "flex-end",
            flexDirection: "column",
            p: 0,
            marginTop: 1,
            backgroundColor: "#F2EFE5",
          }}
        >
          <Stack
            spacing={6}
            direction="row"
            // flexDirection="row"
            alignItems="flex-end"
          >
            <Button
              onClick={() => {
                navigate("/supervisor/dashboard");
              }}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              // isProcessing={isProcessing}
              // processText={isAdding ? "Adding" : "Updateing"}
              onClick={() => {
                handleUpdateIssueAssignmen();
                console.log(issueAssignment);
              }}
              //   text={isAdding ? "Add" : "Update"}
              //   //circularStyle={{ color: "secondary" }}
              //   sx={{ float: "right" }}
              //   disabled={isDisabled}
            >
              Update
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default IssueAssignmentEditPage;
