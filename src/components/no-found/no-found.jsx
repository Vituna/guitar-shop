
function NoFound() {

  return (
    <main className="page-content">
      <div className="container">
        <b className="cities__status">404. Requested page is not available</b>
        <a className="link main-nav__link" href='/catalog/page_1'>
          Click here to return to the main page
        </a>
      </div>
    </main>
  );
}

export default NoFound;
