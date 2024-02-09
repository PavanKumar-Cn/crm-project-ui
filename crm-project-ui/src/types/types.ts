export type UserInput = {
  userName: string;
  password: string;
};

export type ErrorMessage = {
  status: string | null;
  code: number | null;
  message: string | null;
};
