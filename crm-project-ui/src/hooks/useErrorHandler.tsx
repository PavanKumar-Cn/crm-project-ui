import { redirect } from "react-router-dom";
import { ErrorMessage } from "../types/types";

const useErrorHandler = () => {
  const errorHandler = (
    error: any,
    errorMessage: ErrorMessage | undefined,
    isLogout: boolean
  ) => {
    let status = 0;
    let message: string | null = null;
    console.log(error);

    if (error?.response?.data?.message) {
      message = error.response.data.message;
    }
    if (error?.response?.data?.statusCode) {
      status = error.response.data.statusCode;
    }

    if (!status) {
      status = error.response.status;
    }
    if (!message) {
      message = error.response.statusText;
    }

    if (errorMessage?.message) {
      message = errorMessage.message;
    } else {
      if (status === 503) {
        message =
          "Server did not respond in time!, please check your internet connection and try again";
      } else if (status === 500) {
        message = "Something went wrong!";
      } else if ((status === 401 || status === 403) && isLogout) {
        // logout();
        redirect("/");
      }
    }
    // if (isLogout) {
    //   logout();
    // }
    // notify(message, ERROR);
    alert(message);
  };
  return errorHandler;
};
export default useErrorHandler;
