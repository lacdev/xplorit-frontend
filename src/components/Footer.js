import React from 'react';

export default function Footer() {
  return <div>
      <footer className='bg-quartiary text-white pt-4 mt-2'>
          <div className='inline-flex w-full px-10 justify-around '>
            <div>
                <span>Home</span>
            </div>
            <div>
                <ul>
                    <li><a href='#'>Lugares</a></li>
                    <li>Rutas</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Acerca de</li>
                    <li>Testimonios</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Contáctanos</li>
                    <li>contact@xplorit.com</li>
                </ul>
            </div>
            <div>
                <span>FAQ</span>
            </div>
          </div>
          <div className='inline-flex w-full h-auto justify-around mt-10 text-[12px] align-bottom'>
              <div className='flex'>
                  <span>© 2022 Xplorit  Todos los derechos resenvados</span>
              </div>
              <div className='inline-flex w-1/3 justify-around'>
                  <ul>
                      <li>Declaración de privacidad y cookies</li>
                      <li>Documentación del sitio</li>
                  </ul>
                  <ul>
                      <li>Condiciones de uso</li>
                      <li>Consentimiento de cookies</li>
                      <li>Términos y condiciones</li>
                  </ul>
              </div>
          </div>
      </footer>
  </div>;
}
