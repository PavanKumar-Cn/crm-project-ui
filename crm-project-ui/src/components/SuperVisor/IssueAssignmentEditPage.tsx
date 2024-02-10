import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  List,
  ListItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import IssueAssignment from "../../interfaces/Supervisor";

const IssueAssignmentEditPage = () => {
  let params = useParams();
  const navigate = useNavigate();
  console.log("Pavan rout is working...");
  let locaction = useLocation();
  let ass = locaction.state as IssueAssignment;
  console.log("location : --------" + ass);

  const showData = (data: IssueAssignment) => {
    console.log(
      "Issue Assignment data  " + data.issueAssignmentStartDate.toLocaleString()
    );
    // console.log("location : --------" + locaction.state);
  };
  return (
    <>
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "20%",
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
                flexDirection: "row",
                p: 0,
                // paddingRight: 5,
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
                      value={ass.flatNumber}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
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
                    value={ass.issueTypeName?.toLocaleLowerCase()}
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
                    value={ass.issueDescription}
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{
                      width: "80%",
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="outlined-read-only-input"
                    label="Issue Status"
                    value={ass.issueStatusRefCode}
                    // InputProps={{
                    //   readOnly: true,
                    // }}
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
                  <TextField label="Worker Name" />
                </Grid>

                <Grid item xs={8}>
                  <TextField
                    type="string"
                    label="Remarks"
                    sx={{
                      width: "80%",
                    }}
                  />
                </Grid>
              </Grid>
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
              onClick={() => console.log(ass)}
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
