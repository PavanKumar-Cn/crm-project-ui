import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import IssueAssignment, {
  IssueStatusReference,
} from "../../interfaces/Supervisor";
import { useEffect, useState } from "react";
import { openaxios } from "../../api/axios-usage";
import { ISSUE_STATUS_REFS, I_ASS_UPDATE } from "../../api/supervisor-urls";

const IssueAssignmentEditPage = () => {
  const navigate = useNavigate();
  let locaction = useLocation();
  let ass = locaction.state as IssueAssignment;

  const [issueAssignment, setIssueAssignment] = useState(ass);

  const [issueStatusReferences, setIssueStatusReferences] = useState<
    IssueStatusReference[]
  >([]);

  useEffect(() => {
    getIssueStatusReferences();
  }, []);

  const getIssueStatusReferences = () => {
    openaxios.get(ISSUE_STATUS_REFS).then((issueStatusRefs) => {
      console.log(" issueStatusRefs " + JSON.stringify(issueStatusRefs.data));
      setIssueStatusReferences(issueStatusRefs.data);
    });
  };
  const [formErrors, setFormErrors] = useState({
    workerName: {
      error: false,
      msg: "",
    },
    remarks: {
      error: false,
      msg: "",
    },
    issueStatusRefCode: {
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
      issueAssignment.remarks === undefined ||
      issueAssignment.remarks === " "
    ) {
      formErrors["remarks"].error = true;
      formErrors["remarks"].msg = "Add Remarks";
      validationFlag = true;
    }
    if (
      (issueAssignment.remarks !== null ||
        issueAssignment.remarks !== undefined) &&
      (issueAssignment.workerName !== null ||
        issueAssignment.workerName !== undefined) &&
      issueAssignment.issueStatusRefCode === "O"
    ) {
      formErrors["issueStatusRefCode"].error = true;
      formErrors["issueStatusRefCode"].msg =
        "Please Change the Status of The Issue";
      validationFlag = true;
    }

    if (validationFlag) {
      setFormErrors(() => {
        return { ...formErrors };
      });
      // alertSupervisor();
      return;
    } else {
      openaxios
        .put(I_ASS_UPDATE, { ...issueAssignment })
        .then(() => {
          console.log("while updateing " + issueAssignment);
          navigate("/supervisor/dashboard");
        })
        .catch((err) => {
          alert("Update UnSuccessful......");
          console.log(err);
        });
      console.error(" issue alert : " + JSON.stringify(issueAssignment));
    }
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
                      value={issueAssignment.customerPhNo}
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
                      value={issueAssignment.flatNumber}
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
                      value={issueAssignment.issueTypeName}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>

                  <Grid item xs={7}>
                    <TextField
                      id="outlined-read-only-input"
                      label="Issue Description "
                      name="issueDescription"
                      value={issueAssignment.issueDescription}
                      multiline
                      rows={2}
                      InputProps={{
                        readOnly: true,
                      }}
                      sx={{
                        width: "80%",
                      }}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <FormControl sx={{ width: "80%" }}>
                      <InputLabel id="select-label">Issue Status</InputLabel>
                      <Select
                        labelId="select-label"
                        label={"Issue Status"}
                        value={issueAssignment.issueStatusRefCode}
                        name="issueStatusRefCode"
                        fullWidth
                        onChange={(e) =>
                          inputChangeHandle(e.target.name, e.target.value)
                        }
                        error={formErrors.issueStatusRefCode.error}
                      >
                        {issueStatusReferences.map((issueStaRef) => (
                          <MenuItem
                            key={issueStaRef.issueStatusRefCode}
                            value={issueStaRef.issueStatusRefCode || ""}
                            defaultChecked={
                              issueAssignment.issueStatusRefCode ===
                              issueStaRef.issueStatusRefCode
                            }
                          >
                            {issueStaRef.issueStatusRefName}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
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
                      value={
                        issueAssignment.workerName
                          ? issueAssignment.workerName
                          : ""
                      }
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
