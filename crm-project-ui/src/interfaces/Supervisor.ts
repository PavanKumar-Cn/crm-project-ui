export default interface IssueAssignment {
  issueAssignmentId: number | null;
  supervisorId: number | null;
  issueAssignmentStartDate: Date | string;
  issueAssignmentEndDate: Date | string;
  statusRefCode: string | null;
  workerName?: string | null;
  remarks?: string | null;
  issueId: number | null;

  userName: string | null;

  customerId: number | null;
  issueTypeId: number | null;
  issueDescription: string | null;
  issueStatusRefCode: string | null;

  customerPhNo: string | null;
  flatNumber: number | null;
  buildingId: number | null;
  tower: string | null;
  buildingName: string | null;
  issueTypeName: string | null;
}
