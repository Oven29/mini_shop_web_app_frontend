import { ReactNode } from "react";
import LoadingPage from "../../pages/LoadingPage";
import ErrorPage from "../../pages/ErrorPage";

export default function StatusWrapper(
  props: { isLoading: boolean, error?: any, children: ReactNode }
) {
  if (props.isLoading) {
    return <LoadingPage />
  }

  if (props.error) {
    try {
      const error = props.error.response.data;
      return <ErrorPage title={`Error ${error.status_code}`} message={error.msg} />
    } catch {
      return <ErrorPage title='Error' message='Unknown error' />
    }
  }

  return props.children;
}
