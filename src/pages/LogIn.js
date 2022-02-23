import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Inputs from "components/Common/Inputs";
import BigTitle from "components/Common/BigTitle";
import Btncards from "components/Common/Btncards";
import { Link } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { useMutation } from "react-query";
import { userLogin } from "services/user.services";
import { data } from "autoprefixer";

const classes = {
  parentcon: "inline-flex w-full h-screen items-center",
  container: " hidden md:block w-1/2 h-full bg-img-01 bg-no-repeat bg-center",
  textcon: "flex h-full justify-center items-center",
  textdesing: "font-primary font-bold bg-black/50 text-white text-[36px] text-center py-24",
  formcon: "flex w-full md:w-1/2 justify-center h-screen items-center",
  sidecon: "flex-col w-1/2 justify-center",
  title: "p-6",
  description: "text-center px-10 mb-4",
  datacon: "flex-col w-full content-center mt-10 mb-24",
  input: "w-full h-auto",
  btn: "flex py-2 m-auto",
  idication: "text-sm underline text-center",
};

function LogIn() {
  const { userState, setUserState } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("user1@demousers.com");
  const [userPassword, setUserPassword] = useState("testpass1");
  const navigate = useNavigate();

  const mutationLogIn = useMutation((data) => userLogin(data.userEmail, data.userPassword), {
    onSuccess: (data) => setToken(data.token),
  });

  const logIn = () => {
    mutationLogIn.mutate({ userEmail, userPassword });
  };

  console.log("Esto es data", data);
  const setToken = (token) => {
    const newUserState = Object.assign({}, userState, {
      authToken: token,
      loggedIn: true,
    });
    setUserState(newUserState);
    localStorage.setItem("token", token);
    console.log("token", token);
    navigate("/", { replace: true });
  };

  return (
    <div className={classes.parentcon}>
      <div className={classes.container}>
        <section className={classes.textcon}>
          <span className={classes.textdesing}>Registrate para vivir las mejores experiencias de viaje</span>
        </section>
      </div>
      <div className={classes.formcon}>
        <div className={classes.sidecon}>
          <Link to="/">
            <BigTitle className={classes.title} bigTitleText="Xplorit" />
          </Link>
          <BigTitle className="" bigTitleText="Iniciar Sesión" />
          <p className={classes.description}>
            Únete a nuestra comunidad de viajeros como tú que buscan planear, descubrir y compartir las mejores
            experiencias
          </p>
          <div className={classes.datacon}>
            <h4>Correo electrónico</h4>
            <Inputs
              type="email"
              value={userEmail}
              onChange={(event) => setUserEmail(event.target.value)}
              className={classes.input}
              placeholderText="Escribe tu nombre de usuario"
            />
            <h4>Contraseña</h4>
            <Inputs
              type="password"
              value={userPassword}
              onChange={(event) => setUserPassword(event.target.value)}
              className={classes.input}
              placeholderText="Escribe tu nombre contraseña"
            />
          </div>
          {mutationLogIn.isError ? (
            <div className="text-center text-red-700 mb-6">El correo o la contraseña están equivocados</div>
          ) : null}
          <Btncards onClick={logIn} className={classes.btn} buttonText="Iniciar sesión" />
          <br></br>
          <Link to="/signup">
            <p className={classes.idication}>No tienes una cuenta? Regístrate</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default LogIn;
