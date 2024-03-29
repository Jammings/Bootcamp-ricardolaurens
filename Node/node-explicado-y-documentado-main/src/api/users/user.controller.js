const passport = require('passport');

const registerPost = (req, res, next) => {
  
  const done = (error, user) => {
    if (error) return next(error);

    req.logIn(user, (error) => {
      if (error) return next(error);
      return res.status(201).json(user);
    });
  }
  
  passport.authenticate('registrito', done)(req);
};

const loginPost = (req, res, next) => {

  const done = (error, user) => {
    if (error) return next(error);

    req.logIn(user, (error) => {
      if (error) return next(error);
      return res.status(200).json(user);
    });
  };

  passport.authenticate('logincito', done)(req);
};

const logoutPost = async (req, res, next) => {
  if(req.user) {
    await req.logout(() => {
      req.session.destroy(() => {
        res.clearCookie("connect.sid");
        return res.status(200).json('Hasta pronto! Te has deslogueado correctamente');
      });
    });
  } else {
    return res.status(404).json('No hay usuario autenticado');
  }
};

const test = (req, res) => {
  console.log('Usuario autenticado', req.user);
  return res.status(200).json(req.user);
};

module.exports = {
  registerPost,
  loginPost,
  logoutPost,
  test,
}