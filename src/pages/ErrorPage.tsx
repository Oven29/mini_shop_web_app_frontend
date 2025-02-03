import { Link } from "react-router-dom";

export default function ErrorPage(
  props: { title?: string, message?: string }
) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1
        className="text-3xl font-bold"
        style={{ color: window.Telegram.WebApp.themeParams.destructive_text_color }}
      >
        {props.title}
      </h1>
      <p className="text-lg mt-2">
        {props.message}
      </p>
      <Link
        to="/"
        className="mt-4 px-6 py-2 rounded-lg shadow-md"
        style={{ backgroundColor: window.Telegram.WebApp.themeParams.button_color }}
      >
        На главный экран
      </Link>
    </div>
  );
}
