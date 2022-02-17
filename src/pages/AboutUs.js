import { Link } from 'react-router-dom';

const classes = {
    container       :  'relative  w-full h-screen bg-cover pt-20 bg-[url(assets/img/aboutUsBanner.jpg)] ',
    title           :  'text-4xl text-center ',
    logo            :  'text-7xl text-center mt-40',
    text            :  'w-6/12 text-center m-auto mt-32'
}



export default function AboutUsPage() {
    return (<div className={classes.container}>
                <p className={classes.title}>Sobre Nosotros</p>
                <p className={classes.logo}> XPLORIT </p>
                <p className={classes.text}>Somos una pequeña comunidad de viajeros, los cuales queremos compartir con los demas las experiencia de cana uno de nuesros viajes,
                creemos que existen muchos lugares que valen la pena conocer pero que no se encuentran dentro del radar de los lugares mas visitados, por eso creamos esta aplicacion
                en la cual puedes subir tu lugar favorito  y comentar las experiencias que tuviste para que mas personas puedan conocer tu lugar favorito. </p>
            </div>
    )
}