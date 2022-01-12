import { Link } from 'react-router-dom';

function NoFound() {

  return (
    <main className="page-content">
      <div className="container">
        <b className="cities__status">404. Requested page is not available</b>
        <Link className="link main-nav__link" to='/catalog/page_1'>
          Click here to return to the main page
        </Link>
      </div>
    </main>
  );
}

export default NoFound;
