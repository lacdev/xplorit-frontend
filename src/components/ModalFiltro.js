import { useState } from "react";
import Btncards from "./Common/Btncards";
import Titles from "components/Common/Titles";
import StarFillOut from "assets/icons/StarFillOut";
import { AdjustmentsIcon } from '@heroicons/react/outline';

const classes = {
  btnclass: "py-2 flex flex-row content-center",
  filtrobtn:'flex flex-row-reverse content-center bg-secondary text-white active:bg-blue-700 font-primary font-normal text-sm px-6 py-3 rounded-full shadow-testimonialShadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
  filtroicon:'mr-2',
};
function ModalFiltro() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className={classes.filtrobtn}
        type="button"
        onClick={() => setShowModal(true)}
      >
        Filtros
        <AdjustmentsIcon width="20px" height="20px" className={classes.filtroicon} />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 font-primary outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="font-semibold text-lg text-center">
                    Aplica los filtros que mejor se ajusten a tu busqueda
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div class="relative pt-1">
                    <label htmlFor="customRange1" class="form-label">
                      Distancia
                    </label>
                    <input
                      type="range"
                      className="
                        form-range
                        appearance-none
                        w-full
                        h-4
                        p-0
                        bg-gray-100
                        rounded-md
                        focus:outline-none focus:ring-0 focus:shadow-none
                        "
                      id="customRange1"
                    />
                  </div>
                  <div className="flex flex-wrap py-12">
                    <Btncards
                      buttonText="Aire Libre"
                      padding="px-4"
                      color="bg-quartiary"
                      className={`mr-4 mb-3 text-base min-w-110px ${classes.btnclass} `}
                    ></Btncards>
                    <Btncards
                      buttonText="Artesanias"
                      padding="px-4"
                      color="bg-quartiary"
                      className={`mr-4 mb-3 text-base  ${classes.btnclass} `}
                    ></Btncards>
                    <Btncards
                      buttonText="Comida"
                      padding="px-4"
                      color="bg-quartiary"
                      className={`mr-4 mb-3 text-base  ${classes.btnclass} `}
                    ></Btncards>
                    <Btncards
                      buttonText="Cultural"
                      padding="px-4"
                      color="bg-quartiary"
                      className={`mr-4 mb-3 text-base  ${classes.btnclass} `}
                    ></Btncards>
                    <Btncards
                      buttonText="Entretenimiento"
                      padding="px-4"
                      color="bg-quartiary"
                      className={`mr-4 mb-3 text-base  ${classes.btnclass} `}
                    ></Btncards>
                    <Btncards
                      buttonText="Familiar"
                      padding="px-4"
                      color="bg-quartiary"
                      className={`mr-4 mb-3 text-base  ${classes.btnclass} `}
                    ></Btncards>
                    <Btncards
                      buttonText="Playa"
                      padding="px-4"
                      color="bg-quartiary"
                      className={`mr-4 mb-3 text-base  ${classes.btnclass} `}
                    ></Btncards>
                  </div>
                  <div>
                      <Titles tag='h6' titleText="Ordenar por"></Titles>
                    <div className="flex flex-wrap">
                       <div className="flex mr-4 items-center">
                         <label>Más popular</label>
                         <StarFillOut width='30' height='30' className="ml-4 mr-2"/>
                         <StarFillOut width='30' height='30' className="ml-4 mr-2"/>
                         <StarFillOut width='30' height='30' className="ml-4 mr-2"/>
                         <StarFillOut width='30' height='30' className="ml-4 mr-2"/>
                         <StarFillOut width='30' height='30' className="ml-4 mr-2"/>
                      </div>
                       <div className="flex items-center">
                        <label>Más reciente</label>
                        <input type="checkbox" className="w-4 h-4 ml-4 bg-gray-50 rounded border border-gray-300 appearance-none checked:bg-blue-500 indeterminate:bg-gray-300 focus:ring-3 focus:ring-blue-300 default:ring-2"/>
                       </div>
                    </div>
                      
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-nomal px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-secondary text-white active:bg-blue-700 font-normal text-sm px-6 py-3 rounded-full shadow hover:shadow-testimonialShadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Aplicar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
export default ModalFiltro;
