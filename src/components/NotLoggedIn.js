import { Link } from 'react-router-dom';
//Components
import BigTitle from 'components/Common/BigTitle';
import Btncards from 'components/Common/Btncards';


const classes ={
  parentcon:'flex align-middle h-screen',
  maincon:'flex w-full justify-center bg-gradient-to-b from-[#B9FFF2] items-center',
  maininfo:'flex-col text-center',
  btn:'py-2 my-10' ,
  signup:'flex justify-center',
  signuptext:'underline',
}

 function NotLoggedIn() {
  return <div className={classes.parentcon}>
  <main className={classes.maincon}>
    <div className={classes.maininfo}>
      <BigTitle bigTitleText='Regístrate para calificar'/>
      <Link to='/login'>
        <Btncards className={classes.btn } buttonText= "Iniciar sesión"/><br></br>
      </Link>
      <h4>Aún no tienes cuenta?</h4><br></br>
      <div className={classes.signup}>
        <Link to='/signup'>
          <h4 className={classes.signuptext}>Da clic aquí</h4>
        </Link>
      </div>
    </div>
  </main>
</div>;
}
export default NotLoggedIn;