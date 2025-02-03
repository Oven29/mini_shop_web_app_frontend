import ErrorPage from "./pages/ErrorPage";
import LoadingPage from "./pages/LoadingPage";
import { getLength } from "./utils/utils";

export default function App() {
  const WebApp = window.Telegram.WebApp;

  if (!getLength(WebApp)) {
    return <ErrorPage title="Error" message="Please use telegram bot to enter app" />
  }

  WebApp.expand();

  return (
    <LoadingPage isLoading={true}>
      <>132</>
    </LoadingPage>
  )
}
