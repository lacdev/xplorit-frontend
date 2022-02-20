import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { useQuery } from 'react-query'
//Services
import { getCardsPlacesHome } from 'services/places.services'
import { getAllStates } from 'services/utils.services'
import { getPlacesFiltered } from 'services/places.services'
//Components
import Btncards from 'components/Common/Btncards'
import ModalFiltro from 'components/SeachComponents/ModalFiltro'
import MapComponent from 'components/MapComponent'
import Toggle from 'components/SeachComponents/Toggle'
import SearchCards from 'components/SeachComponents/SearchCards'
import StateSelector from 'components/SeachComponents/StateSelector'
import BtnTags from 'components/SeachComponents/BtnTags'
import LimitCards from 'components/SeachComponents/LimitCards'
import Inputs from 'components/Common/Inputs'

const classes = {
  parentcon: 'pt-16',
  sectionres: 'font-primary w-full h-full min-h-screen overflow-hidden',
  tagsfiltroscon: 'flex flex-row justify-between p-1 w-full bg-white my-2',
  scroll: 'scroll-smooth scroll-pl-4 snap-end snap-x snap-mandatory',
  scrolltags: 'snap-center snap-always scroll-mr-3.5',
  togglecon: 'flex content-center items-center px-4',
  btnclass: 'py-2 flex flex-row-reverse content-center',
  btntagscon: 'hidden lg:flex overflow-x-hidden items-center pb-2',
  renderres:
    'grid grid-cols-1 minTablet:grid-cols-5 grid-flow-col overflow-hidden h-[90vh]',
  togglespanplace: 'mr-2',
  togglespanroute: 'mx-2',
  filtroposition: 'ml-auto',
  asidecon:
    'col-span-5 xl:col-span-3 minTablet:col-span-2 bg-white divide-y divide-solid border-slate-500 px-3 max-h-[90vh]',
  rescon: 'py-2 pl-2',
  selectorcon: 'flex flex-row w-full',
  divselector: 'flex flex-col w-full',
  labelselect: 'text-xs',
  cardscon: 'h-screen overgflow-y-scroll overflow-scroll',
  mapcon: 'minTablet:block col-span-3 bg-gray-200 h-full',
  btnshow: 'py-1 block minTablet:hidden',
}
function PlaceSearch() {
  const [showMap, setShowMap] = useState(false)
  const [selectedState, setSelectedState] = useState(null)
  const [selectedMunicipio, setSelectedMunicipio] = useState(null)
  const isPhone = useMediaQuery({ query: '(max-width: 960px)' })
  const [searchParams, setSearchParams] = useSearchParams()
  const [qString, setQString] = useState('')

  console.log('Search Params?', searchParams)

  const handleSearch = (event) => {
    let q = event.target.value
    setQString(q)
    if (q) {
      setSearchParams({ q })
    } else {
      setSearchParams({})
    }
  }

  console.log('my query string', searchParams.toString())

  const myQuery = searchParams.toString()

  // const queryString = searchParams.get('q')
  // console.log('Are these my searchparams?', queryString)
  // console.log('Is this my qString?', qString)

  // const useFilteredPlace = () => {
  //   const filteredPlaces = useQuery(
  //     'filteredPlaces',
  //     getPlacesFiltered(myQuery)
  //   )
  //   return { filteredPlaces }

  // }

  const { data, status } = useQuery('places', getPlacesFiltered(myQuery))

  // const { filteredPlaces } = useFilteredPlace()

  // console.log('filtered places returns???', filteredPlaces)

  // const { data: filtered, isLoading, status } = filteredPlaces

  // console.log(filtered)

  //Event Hide Aside Map
  const handlerClick = () => {
    setShowMap(!showMap)
  }
  let buttonText = 'Mostrar Mapa'
  let mapContainerClass = classes.mapcon

  if (!showMap) mapContainerClass += ' hidden'
  else buttonText = 'Ocultar Mapa'

  const renderSideBar = !isPhone || !showMap ? true : false

  // Selectors State & City
  const onStateChange = (stateItem) => {
    setSelectedState(stateItem)
    setSelectedMunicipio(null)
  }

  const onMunicipioChange = (municipioItem) => {
    setSelectedMunicipio(municipioItem)
  }

  const onToggleChange = (event) => {
    // console.log('Acciona el evento onChange');
  }

  const onTagChange = (info) => {
    console.log('Infomación de Tags', info)
  }

  // const queryString = "?q=ui.dev&src=typed_query&f=live";

  //Cuando el usuario termine de teclear o de submit. Vamos a setear en el objeto searchParams
  //El valor del searchbar y como necesitamos una propiedad que se llame q cuyo valor sera el
  //valor del input de search.

  // queryString.set("q", "tulum")

  //Querys & service to Places
  // const useQueryPlaces = () => {
  //   //places
  //   const cardsForPlacesInHome = useQuery('getAllPlaces', getCardsPlacesHome)
  //   return { cardsForPlacesInHome }
  // }

  // const { data: statesData, status: statesStatus } = useQuery(
  //   'getAllStates',
  //   getAllStates
  // )

  // const { cardsForPlacesInHome } = useQueryPlaces()

  //Use Query dinamico

  // if (status === 'error') {
  //   return (
  //     <span className="font-bold text-center">
  //       No se encontraron lugares con ese ID
  //     </span>
  //   )
  // }

  // let [searchParams, setSearchParams] = useSearchParams();

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   // The serialize function here would be responsible for
  //   // creating an object of { key: value } pairs from the
  //   // fields in the form that make up the query.
  // let params = serializeFormQuery(event.target);
  // setSearchParams(params);
  // }

  // const handleSearchInput = (event) => {
  //   setQString(event.target.value)
  //   console.log(qString)
  // }

  {
    /* search={searchTerm} onSearch={handleSearch}
                value={props.search}
                onChange={props.onSearch} */
  }

  // const handleSearch = (event) => {
  //   setQString(event.target.value)
  //   console.log('My q string is changing?', qString)
  // searchParams.set('q', qString)
  // setSearchParams('q', qString)
  //   const q = searchParams.get('q')
  // const src = searchParams.get('src')
  // const f = searchParams.get('f')

  // let params = serializeFormQuery(qString)
  // setSearchParams({ q: qString })
  // setSearchParams('q', qString)
  // console.log('Is my searchParams changing?', searchParams)

  // const q = searchParams.get('q')

  // console.log('is this my q value?', q)
  // }

  /* {
                    // .filter((place) => {
                    //   if (!q) return true
                    //   const name = place.name.toLowerCase()
                    //   return name.includes(q.toLowerCase())
                    // })
                    placesData.map((data, index) => {
                      return (
                        <SearchCards
                          id={data._id}
                          //typeofplace={data.type}
                          key={index}
                          name={data.name}
                          address={data.address.street}
                          labels={data.tags}
                          score={data.average}
                          ownerId={data.ownerId}
                          images={data?.images}
                        />
                      )
                    })
                  } */

  return (
    <div>
      <section className={classes.sectionres}>
        <div className={classes.tagsfiltroscon}>
          <div className={classes.togglecon}>
            <span className={classes.togglespanplace}>Lugares</span>
            <Toggle accionToggle={onToggleChange} />
            <span className={classes.togglespanroute}>Rutas</span>
          </div>
          <div className={classes.btntagscon}>
            <BtnTags onTagClick={onTagChange} />
          </div>
          <div className={classes.filtroposition}>
            <ModalFiltro />
          </div>
        </div>
        <section className={classes.renderres}>
          {renderSideBar && (
            <aside className={classes.asidecon}>
              <div>
                {/* <input onInputCapture={handleSearchInput}></input> */}
                {/* <Inputs
                  type="text"
                  value={qString}
                  placeholderText="¿Que deseas explorar?"
                  onChange={handleSearch}
                  // onInputChange={handleSearchInput}
                /> */}
                <input
                  value={searchParams.get('q') || ''}
                  onChange={handleSearch}
                />
              </div>
              <div className={classes.selectorcon}>
                <div className={classes.divselector}>
                  <label className={classes.labelselect}>Elige un Estado</label>
                  {/* <StateSelector
                    locationsData={statesData}
                    onStateChange={onStateChange}
                    selectOption={selectedState}
                  /> */}
                </div>
                <div className={classes.divselector}>
                  <label className={classes.labelselect}>
                    Elige un Municipio
                  </label>
                  <StateSelector
                    locationsData={selectedState?.municipios || []}
                    renderMunicipios={true}
                    selectOption={selectedMunicipio}
                    onStateChange={onMunicipioChange}
                  />
                </div>
              </div>
              <div className={classes.rescon}>Resultados de busqueda</div>(
              <div className={classes.cardscon}>
                {data.map((data, index) => {
                  return (
                    <SearchCards
                      id={data._id}
                      //typeofplace={data.type}
                      key={index}
                      name={data.name}
                      address={data.address.street}
                      labels={data.tags}
                      score={data.average}
                      ownerId={data.ownerId}
                      images={data?.images}
                    />
                  )
                })}
              </div>
              )}
              <LimitCards />
            </aside>
          )}
          <div className={mapContainerClass}>
            <MapComponent fullHeight={true} />
          </div>
        </section>

        <Btncards
          buttonText={buttonText}
          className={classes.btnshow}
          onClick={handlerClick}
        ></Btncards>
      </section>
    </div>
  )
}

export default PlaceSearch
