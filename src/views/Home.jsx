const React = require('react');

const Layout = require('./Layout');

module.exports = function Home({ username, result = 100, readDB }) {
  return (
    <Layout username={username} result={result}>
      {username ? (
        <>
          <center>
            <h1>
              {username}
              , Выбери Колоду
            </h1>
          </center>
          <div className="container overflow-hidden text-center">
            <div className="row gy-5">

              {readDB.map((el, ind) => (
                <div className="col-6" key={ind}>
                  <a href={`/${el.id}`} className="nav-link active" aria-current="page">
                    <h5 className="p-3 border bg-light">{el.name_desk}</h5>
                  </a>
                </div>
              ))}

            </div>
          </div>
        </>
      ) : (
        <div className="container overflow-hidden text-center">
          <div className="text-center">
            <img src="http://ic.pics.livejournal.com/masloved/77278969/594/594_900.jpg" className="img-fluid" alt="Сыграем в игру?" />
          </div>
          <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            Play
          </a>
        </div>
      )}
    </Layout>
  );
};
