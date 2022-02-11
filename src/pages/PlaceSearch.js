//Components
import Btncards from 'components/Common/Btncards';
import Titles from 'components/Common/Titles';
import { Labels } from 'components/Common/Labels';
//Imgages & Icons
import { AdjustmentsIcon } from '@heroicons/react/outline';
import Image from "assets/img/image.jpg"
import HeartFillOut from 'assets/icons/HeartFillOut';
import StarComplete from 'assets/icons/StarComplete';

const classes={

}
function PlaceSearch() {
  return (
    <div>
      <section className="font-primary w-full">
        <div className="flex flex-row p-1 w-full bg-white justify-end">
          <Btncards
            className="py-2 flex flex-row-reverse content-center"
            buttonText="Filtros"
          >
            <AdjustmentsIcon width="20px" height="20px" className="mr-2" />
          </Btncards>
        </div>
        <section className="grid grid-cols-1 minTablet:grid-cols-5 grid-flow-col">
          <article className="col-span-5 xl:col-span-3 minTablet:col-span-2 bg-zinc-200 divide-y divide-solid border-slate-500 px-3">
            <div className="">Resultados de busqueda</div>
            <div className='py-2 px-4'>
              <div className='flex'>
                <img
                  src={Image}
                  alt="search-img"
                  className="h-32 w-44 object-cover object-center rounded-md"
                />
                <div className="flex flex-col pl-2">
                <Titles tag="h6" titleText="Nombre del Lugar"></Titles>
                <div className='flex flex-wrap'>
                  <Labels LabelText="Aventura"></Labels>
                  <Labels LabelText="Playa"></Labels>
                  <Labels LabelText="Relajación"></Labels>
                  <Labels LabelText="Nocturno"></Labels>
                </div>
                <div className='py-3'>
                  <p className='text-xs'>Ubicación del lugar</p>
                </div>
                <div>
                <Btncards buttonText='Explorar' className='py-1'></Btncards>
                </div>
                
                
               </div>
               <div>
                 <HeartFillOut width='30px' height='30px'/>
                  <StarComplete width='30px' height='30px' className='mt-5'/>
                  <p className='text-xs text-center'>5</p>
                 </div> 
             </div>
              
            </div>
          </article>
          <div className="minTablet:block hidden col-span-3 bg-gray-200">MAPA</div>
        </section>
      </section>
    </div>
  );
}

export default  PlaceSearch;