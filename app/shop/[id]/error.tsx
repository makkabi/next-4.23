'use client'; // Error components must be Client components

// https://beta.nextjs.org/docs/routing/error-handling

function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>Es gab ein Problem! {error.message}</h2>
      <button
        onClick={
          // reset ist eine Funktion, mit der man die selbe Aktion (z.B. Seite laden)
          // nochmal probieren kann.
          () => reset()
        }
      >
        Nochmal versuchen
      </button>
    </div>
  );
}
export default Error;
