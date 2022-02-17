import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Inputs from 'components/Common/Inputs';
import BigTitle from 'components/Common/BigTitle';
import Btncards from 'components/Common/Btncards';
import { Link } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';
import { useMutation } from 'react-query';
import { userSignUp } from 'services/user.services';

const classes = {
    parentcon:'inline-flex w-full h-screen items-center',
    container:'w-1/2 h-full bg-img-01 bg-no-repeat bg-center',
    textcon:'flex h-full justify-center items-center',
    textdesing:'font-primary font-bold bg-black/50 text-white text-[36px] text-center py-24',
    formcon:'flex w-1/2 justify-center h-screen items-center',
    sidecon:'flex-col w-1/2 justify-center',
    description:'text-center px-10 mb-4',
    datacon:'flex-col w-full content-center',
    input:'w-full h-auto',
    btn:'flex py-2 m-auto',
    idication:'text-sm underline text-center',
}
 function SignUp() {
  const { userState, setUserState } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const mutationSignUp = useMutation(
    (data) => userSignUp(data.userName, data.userEmail, data.userPassword),
    { onSuccess: (data) => setToken(data.token) }
  );

  const signUp = () => {
    mutationSignUp.mutate({ userName, userEmail, userPassword });
  };

  const setToken = (token) => {
    console.log(token);
    const newUserState = Object.assign({}, userState, {
      authToken: token,
      loggedIn: true,
    });
    setUserState(newUserState);
    localStorage.setItem("token", token);
    navigate("/", { replace: true });
  };
  return (
    <div className={classes.parentcon}>
      <div className={classes.container}>
        <section className={classes.textcon}>
          <span className={classes.textdesing}>
            Registrate para vivir las mejores experiencias de viaje
          </span>
        </section>
      </div>
      <div className={classes.formcon}>
        <div className={classes.sidecon}>
          <Link to="/">
            <BigTitle className="p-6" bigTitleText="Xplorit" />
          </Link>
          <BigTitle className="" bigTitleText="Crear cuenta" />
          <p className={classes.description}>
            Únete a nuestra comunidad de viajeros como tú que buscan planear,
            descubrir y compartir las mejores experiencias
          </p>
          <div className={classes.datacon}>
            <h4>Nombre de usuario</h4>
            <Inputs
              type="text"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              className={classes.input}
              placeholderText="Escribe tu nombre de usuario"
            />
            <h4>Email</h4>
            <Inputs
              type="email"
              value={userEmail}
              onChange={(event) => setUserEmail(event.target.value)}
              className={classes.input}
              placeholderText="Escribe tu email"
            />
            <h4>Contraseña</h4>
            <Inputs
              type="password"
              value={userPassword}
              onChange={(event) => setUserPassword(event.target.value)}
              className={classes.input}
              placeholderText="Escribe tu contraseña"
            />
            <h4>Confirma tu contraseña</h4>
            <Inputs
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className={classes.input}
              placeholderText="Escribe de nuevo tu contraseña"
            />
          </div>
          <Btncards
            onClick={signUp}
            className={classes.btn}
            buttonText="Regístrate"
          />
          <br></br>
          <Link to="/login">
            <p className={classes.idication}>
              Ya tienes cuenta? Inicia sesión aquí
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SignUp;