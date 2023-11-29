import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  // Log error to console for debugging purposes
  console.error(error);

  // Return JSX for ErrorPage component
  return (
    <div id="error-page">
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
