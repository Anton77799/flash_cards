const React = require('react');

module.exports = function Layout({ children, username, result }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
      </head>
      <header className="homePage">
        <ul className="nav justify-content-end">
          {username ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Привет, {username} Счет: {result}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/lk">Личный кабинет</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/auth/signout">Выход</a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item active">
                <a className="nav-link" href="/auth/">Войти</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/auth/">Регистрация</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/auth/signout">Выход</a>
              </li>
            </>
          )}
        </ul>
      </header>
      <body>
        {children}
      </body>
    </html>
  );
};
