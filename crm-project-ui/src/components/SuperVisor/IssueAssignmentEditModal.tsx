import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import IssueAssignment from "../../interfaces/Supervisor";

const IssueAssignmentEdit = ({
  issueAssignment,
  handleCloseDialog,
}: {
  issueAssignment: IssueAssignment;
  handleCloseDialog: any;
}) => {
  const onInputChangeHandle = (name: string, value: any) => {
    // setFormErrors((preValues) => {
    //   return { ...preValues, [name]: { error: false } };
    // });
    // setProject((prevValue) => {
    //   return { ...prevValue, [name]: value };
    // });

    alert(JSON.stringify(`Name : ${name} , Values : ${value}`));
  };

  const handleSubmitIssueAssignment = (data: IssueAssignment) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
          width: "98%",
          alignItems: "center",
        }}
      >
        <Stack display="flex" flexDirection="column" alignItems="flex-end">
          <Paper elevation={5} variant="elevation" sx={{ p: 1, width: 500 }}>
            <h2 style={{ color: "#233044" }}>Issue Assignment</h2>

            <FormControl sx={{ width: 500 }}>
              <TextField
                label="Start Date"
                type="Date"
                value={"Start Date"}
                name="start"
                sx={{ mb: 3 }}
                required
                autoComplete="off"
                fullWidth
                size="small"
                onChange={(
                  event: React.ChangeEvent<
                    HTMLInputElement | HTMLTextAreaElement
                  >
                ) => {
                  onInputChangeHandle(event.target.name, event.target.value);
                }}
              />
              <TextField
                label="End Date"
                type="Date"
                value={"End Date"}
                name="end"
                sx={{ mb: 3 }}
                required
                autoComplete="off"
                fullWidth
                size="small"
                onChange={(
                  event: React.ChangeEvent<
                    HTMLInputElement | HTMLTextAreaElement
                  >
                ) => {
                  onInputChangeHandle(event.target.name, event.target.value);
                }}
              />
              <FormLabel id="demo-controlled-radio-buttons-group">
                Gender
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={"gender"}
                onChange={(
                  event: React.ChangeEvent<
                    HTMLInputElement | HTMLTextAreaElement
                  >
                ) => {
                  onInputChangeHandle(event.target.name, event.target.value);
                }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>

              {/* <SelectComp
                label="Leave Type"
                items={leaveTypes.map((leaveType) => ({
                  value: leaveType.id,
                  label: leaveType.type,
                }))}
                name="leaveType"
                value={leaveRequest.leaveType}
                sx={{ mb: 4 }}
                onSelect={(
                  event: React.ChangeEvent<
                    HTMLInputElement | HTMLTextAreaElement
                  >
                ) => {
                  onInputChangeHandle(event.target.name, event.target.value);
                }}
                renderMenuItemContent={(item) => item.label}
                generateValue={(item) => item.value}
                fullWidth={true}
              /> */}
              <Select></Select>
              <TextField
                label="Comments"
                type="text"
                name="comments"
                value={"Comments"}
                rows={4}
                sx={{ mb: 3 }}
                required
                autoComplete="off"
                fullWidth
                multiline
                size="small"
                onChange={(
                  event: React.ChangeEvent<
                    HTMLInputElement | HTMLTextAreaElement
                  >
                ) => {
                  onInputChangeHandle(event.target.name, event.target.value);
                }}
              />
              <TextField
                label="Contact Number"
                type="text"
                name="contactNo"
                value={"Contact Number"}
                sx={{ mb: 3 }}
                required
                autoComplete="off"
                fullWidth
                size="small"
                onChange={(
                  event: React.ChangeEvent<
                    HTMLInputElement | HTMLTextAreaElement
                  >
                ) => {
                  onInputChangeHandle(event.target.name, event.target.value);
                }}
              />
            </FormControl>
            <Stack
              spacing={1}
              direction="row"
              flexDirection="row"
              alignItems="flex-end"
              sx={{ justifyContent: "flex-end", mt: 2 }}
            >
              <Button
                onClick={() => {
                  handleCloseDialog();
                }}
                variant="outlined"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleSubmitIssueAssignment(issueAssignment)}
                variant="contained"
              >
                Apply
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </>
  );
};

export default IssueAssignmentEdit;
