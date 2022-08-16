const React = require('react');

const Layout = require('./Layout');

module.exports = function Question(props) {
  console.log('Смотри сюда=> ', props);
  const { readBD } = props;
  return (
    <Layout>
      <script defer src="js/qest.js" />
      <div className="qestCont">
        {readBD?.map((qest, ind) => (
          <form className="mainForm">
            <div key={qest.id} name="cartochka" style={{ maxWidth: '58rem' }}>
              <div className="card text-center">
                <div className="card-header">{ind + 1}</div>
                <div className="card-body">
                  <h5 className="card-title">{qest.body_q}</h5>
                  <input className="inpu" type="text" name="answer" id={qest.id} placeholder="Ответ" aria-label="Username" aria-describedby="basic-addon1" />
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary" id={qest.id} type="submit">Проверить!</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        ))}
      </div>
    </Layout>
  );
};
