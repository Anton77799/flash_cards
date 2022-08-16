const React = require('react');

const Layout = require('./Layout');

module.exports = function Lk({ stat }) {
  console.log(stat);
  return (
    <Layout>

      {stat.map((el, ind) => (
        <div className="col-6" key={ind}>
          {/* <a href={`/${el.id}`} className="nav-link active" aria-current="page">
            <h5 className="p-3 border bg-light">{el.name_desk}</h5>
          </a> */}
          {el.id}
          <br />
          {el.desk_id}
          <br />
          {el.score}
        </div>
      ))}

    </Layout>
  );
};
