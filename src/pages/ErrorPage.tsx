export default function ErrorPage(
  props: { title?: string, message?: string }
) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
   </>
)
}