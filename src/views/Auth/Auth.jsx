const React = require('react');
const Layout = require('../Layout');
module.exports = function Auth() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            Форма регистрации
            <form action="/auth/signup" method="POST">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Login</label>
                <input type="text" name="login" className="form-control" id="loginForm" aria-describedby="loginHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" required />
              </div>
              <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
            </form>
          </div>
          <div className="col">
            Форма Авторизации
            <form action="/auth/signin" method="POST">
              <div className="mb-3 ms-1">
                <label htmlFor="exampleInputEmail1" className="form-label">Login</label>
                <input type="text" name="login" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
              </div>
              <div className="mb-3 ms-1">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" required />
              </div>
              <button type="submit" className="btn btn-primary">Войти</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};