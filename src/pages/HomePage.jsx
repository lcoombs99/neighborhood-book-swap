import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section>
      <h1>Neighboorhood Book Swap</h1>
      <h3>Take a book, leave a book</h3>
      <p>Find free books in your community, share your  favorites and keep great stories in circulation!</p>
      <button>
        <Link to='browse_books' > Browse Books</Link>
      </button>
    </section>
  );
}

export default HomePage;