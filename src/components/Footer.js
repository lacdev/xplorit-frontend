import React from 'react';

export default function Footer() {
  return <div className='font-primary text-center' >
      <footer className='bg-quartiary text-white pt-4 mt-20'>
          <div className='flex justify-around items-center w-full px-10'>
            <div>
                <ul>
                    <li>Lugares</li>
                    <li>Rutas</li>
                    <li>Acerca de</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Contáctanos</li>
                    <li>contact@xplorit.com</li>
                </ul>
            </div>
          </div>
          <div className='flex w-full h-auto justify-around mt-6 text-[12px] align-bottom'>
              <div className='flex w-1/3'>
                  <p>© 2022 Xplorit  Todos los derechos resenvados</p>
              </div>
              <div className='flex w-2/3 justify-around'>
                  <ul>
                      <li>Declaración de privacidad y cookies</li>
                      <li>Documentación del sitio</li>
                  </ul>
                  <ul>
                      <li>Condiciones de uso</li>
                      <li>Términos y condiciones</li>
                  </ul>
              </div>
          </div>
      </footer>
  </div>;
}
