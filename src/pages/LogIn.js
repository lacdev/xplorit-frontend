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

export default function LogIn() {
  const { userState, setUserState } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("user1@demousers.com");
  const [userPassword, setUserPassword] = useState("testpass1");
  const navigate = useNavigate();

  const mutationLogIn = useMutation(
    (data) => userLogin(data.userEmail, data.userPassword),
    { onSuccess: (data) => setToken(data.token) }
  );

  const logIn = () => {
    mutationLogIn.mutate({ userEmail, userPassword });
  };

  console.log("Esto es data", data);
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
    <div className="inline-flex w-full h-screen items-center">
      <div className="w-1/2 h-full bg-img-01 bg-no-repeat bg-center">
        <section className="flex h-full justify-center items-center ">
          <span className="font-primary font-bold bg-black/50 text-white text-[36px] text-center py-24">
            Registrate para vivir las mejores experiencias de viaje
          </span>
        </section>
      </div>
      <div className="flex w-1/2 justify-center h-screen items-center">
        <div className="flex-col w-1/2 justify-center">
          <Link to="/">
            <BigTitle className="p-6" bigTitleText="Xplorit" />
          </Link>
          <BigTitle className="" bigTitleText="Iniciar Sesión" />
          <p className="text-center px-10 mb-4">
            Únete a nuestra comunidad de viajeros como tú que buscan planear,
            descubrir y compartir las mejores experiencias
          </p>
          <div className="flex-col w-full content-center mt-10 mb-24">
            <h4>Correo electrónico</h4>
            <Inputs
              type="email"
              value={userEmail}
              onChange={(event) => setUserEmail(event.target.value)}
              className="w-full h-auto"
              placeholderText="Escribe tu nombre de usuario"
            />
            <h4>Contraseña</h4>
            <Inputs
              type="password"
              value={userPassword}
              onChange={(event) => setUserPassword(event.target.value)}
              className="w-full h-auto"
              placeholderText="Escribe tu nombre contraseña"
            />
          </div>
          <Btncards
            onClick={logIn}
            className="flex py-2 m-auto"
            buttonText="Iniciar sesión"
          />
          <br></br>
          <Link to="/signup">
            <p className="text-sm underline text-center">
              No tienes una cuenta? Regístrate
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
