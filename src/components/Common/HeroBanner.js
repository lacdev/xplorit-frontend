import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import img2 from 'assets/img/img2.jpg'
import Inputs from "./Inputs";
import Btncards from "./Btncards";
import Titles from "./Titles";

const classes = {
  container: "w-full h-screen max-h-[700px] bg-waterfall bg-no-repeat bg-cover",
  section: "flex h-full justify-center items-center bg-black/50",
  maincon: "w-3/4 m-auto content-center",
  titlescon: "text-center text-white py-4 mb-8",
  title1: "text-center m-10",
  title2: "text-center m-6 text-white",
  btncon: "flex w-full justify-around",
  btn: "py-2 cursor-pointer min-w-[200px]",
  //    img:'object-cover h-1/5 min-w-full brightness-50',
  //     titlecontent:'relative '
};
function HeroBanner() {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");

  const onPlaceSubmit = (event) => {
    event.preventDefault();
    navigate({
      pathname: "/searchPlace",
      search: `?query= ${inputText}`,
    });
    //navigate('/searchPlace', {search: `?query= ${inputText}`})
  };

  const onRouteSubmit = (event) => {
    event.preventDefault();
    navigate({
      pathname: "/searchroute",
      search: `?query= ${inputText}`,
    });
    //navigate('/searchPlace', {search: `?query= ${inputText}`})
  };

  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <div className={classes.maincon}>
          <div className={classes.titlescon}>
            <Titles tag="h1" titleText="Explora lugares cercanos a ti" className={classes.title1} />
            <Titles
              tag="h2"
              titleText="Conoce la experiencia que otros usuarios han tenido"
              className={classes.title2}
            />
          </div>
          <form>
            <Inputs
              additionalClass="text-center"
              value={inputText}
              placeholderText="Empieza tu búsqueda aquí"
              onChange={(event) => {
                setInputText(event.target.value);
              }}
            />
            <div className="flex justify-around">
              <div className={classes.btncon} onClick={onPlaceSubmit}>
                <Btncards buttonType="submit" className={classes.btn} buttonText="Buscar lugares" />
              </div>
              <div className={classes.btncon} onClick={onRouteSubmit}>
                <Btncards buttonType="submit" className={classes.btn} buttonText="Buscar rutas" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default HeroBanner;
