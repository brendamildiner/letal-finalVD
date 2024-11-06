"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

import FlourishV1 from '@/app/componentes/componente1';
import FlourishV2 from '@/app/componentes/componente2';
import FlourishV3 from '@/app/componentes/componente3';
import FlourishV4 from '@/app/componentes/componente4';
import FlourishV5 from '@/app/componentes/componente5';
import FlourishV6 from '@/app/componentes/componente6';
import FlourishV7 from '@/app/componentes/componente7';



      const AttentionPoster: React.FC = () =>  {
        // Estado para controlar el scroll
        const [scrollY, setScrollY] = useState(0);
        const [showGases, setShowGases] = useState(true);
        const sectionRef = useRef<HTMLDivElement>(null);
        const [isInsideSection, setIsInsideSection] = useState(false);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (isInsideSection && sectionRef.current) {
        e.preventDefault();

        // Scroll horizontal limitado
        const maxScrollLeft = sectionRef.current.scrollWidth - sectionRef.current.clientWidth;
        if (
          (e.deltaY > 0 && sectionRef.current.scrollLeft < maxScrollLeft) ||
          (e.deltaY < 0 && sectionRef.current.scrollLeft > 0)
        ) {
          sectionRef.current.scrollLeft += e.deltaY;
        } else {
          // Permitir scroll vertical si se alcanza el inicio o el fin
          setIsInsideSection(false);
        }
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isInsideSection]);

      // Función para actualizar el estado de scroll
      const handleScroll = () => {

      //para definir en qué momento se ocultan las imagenes de gases (con el titulo de la VIS 1)
        const TopCiudad = document.getElementById('TopCiudad');
        if (TopCiudad) {
          const titlePosition = TopCiudad.offsetTop;
          setScrollY(window.scrollY);

          //console.log("ScrollY:", window.scrollY, "Title Position:", titlePosition);

    // Oculta las imágenes de gases al alcanzar la sección "¿Qué tipo de emisiones de CO₂ existen?"
    if (window.scrollY >= titlePosition - window.innerHeight) {
      setShowGases(false);
    } else {
      setShowGases(true);
    }
  }
};  
 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, []);


  return (
    <>
    <main>
        {/*////// PORTADA /////////*/}
        {/* RECTANGULO ROJO */}
        <br/>
<div className="relative bg-[#d20303] text-black p-8 rounded-xl max-w-[1410px] h-[750px] mx-auto flex flex-col justify-center items-center overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`, // Cambia 0.5 para ajustar la velocidad
            backgroundImage: 'url(/path/to/your/background/image.jpg)', // Ruta de la imagen de fondo
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
          }}
        />

        {/* Flechas decorativas en las esquinas */}
        <div className="absolute top-6 left-6 w-6 h-6 border-t-4 border-l-4 border-black rotate-180"></div>
        <div className="absolute top-6 right-6 w-6 h-6 border-t-4 border-r-4 border-black -rotate-180"></div>
        <div className="absolute bottom-6 left-6 w-6 h-6 border-b-4 border-l-4 border-black -rotate-180"></div>
        <div className="absolute bottom-6 right-6 w-6 h-6 border-b-4 border-r-4 border-black rotate-180"></div>


        {/* ATENCION */}
        <h1 className="text-center text-xl font-bold mb-4 uppercase tracking-wider">
        ¡ATENCIÓN!
        </h1>

        <ParallaxProvider>
    <Parallax speed={-10}>

        {/* EL PODER DE LAS POTENCIAS ES */}
        <p className="text-center text-4xl mb-4 uppercase tracking-wide">
        El poder de las potencias es
        </p>


        {/* LETAL */}
        <div className="text-center text-[160px] sm:text-[300px] font-black tracking-wider leading-none">
          LETAL
        </div>
    </Parallax>
  </ParallaxProvider>
      
      <div className="absolute left-6 center text-xs sm:text-sm">

  

          {/* AÑOS */}
          <span className="bg-black text-yellow-500 px-2 py-1 rounded">1990</span>
        </div>
        <div className="absolute right-6 center text-xs sm:text-sm">
          <span className="bg-black text-yellow-400 px-2 py-1 rounded">2060</span>
        </div>

        {/* Texto inferior */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs tracking-wider">
          VISUALIZACIÓN DE DATOS, UTDT
        </div>
      </div>



{/*///////// INTRODUCCION //////////*/}
{/* Texto explicativo */}
<p className="text-[20px] text-left mt-20 mx-auto max-w-4xl leading-relaxed text-white">
        Las <span className="bg-yellow-400 text-black px-1">potencias mundiales</span> lideran el desarrollo global, pero también son responsables de un devastador impacto ambiental. A través de la emisión masiva de CO2, sus políticas y prácticas están acelerando cada vez más el <span className="bg-yellow-400 text-black px-1">cambio climático</span> y poniendo en riesgo el futuro de nuestro planeta. Es hora de responsabilizar a quienes contribuyen más al problema y exigir un cambio radical hacia un mundo más sostenible.
      </p>

<br/>





{/*///////// GASES //////////////*/}

 {/* Contenedor de los gases */}
  <section className="h-[600px] sticky top-0">

  <div className="justify-left items-left h-[600px] mt-20 mx-20 z-50">

  <ParallaxProvider>

    <Parallax speed={0}> 
      <Image
        src="/gasesitos_1.svg"
        alt="gases base"
        width={800}
        height={100}
        className={`absolute transition-opacity duration-50 ${showGases ? 'opacity-100' : 'opacity-0'}`}
      />

      <Image
        src="/gasesitos_2.svg"
        alt="gases capa 2"
        width={800}
        height={100}
        className={`absolute transition-opacity duration-50 ${scrollY > 1500 && showGases ? 'opacity-100' : 'opacity-0'}`}
      />
     

      <Image
        src="/gasesitos_3.svg"
        alt="gases capa 3"
        width={800}
        height={100}
        className={`absolute transition-opacity duration-50 ${scrollY > 2200 && showGases ? 'opacity-100' : 'opacity-0'}`}
      />
    

    </Parallax>

</ParallaxProvider>

  </div>

</section>
      

{/*//////// TEXTOS DE GASES /////////////////////*/}

<section className="h-[600px]">

<ParallaxProvider>

  <Parallax speed={1}>
  <div className='absolute right-4 h-[600px] w-[600px] flex items-start px-4'>

  <p className="text-[20px] text-left w-full max-w-1xl leading-relaxed text-white">
  Los gases de efecto invernadero (GEI) son compuestos en la atmósfera que atrapan el calor, evitando que escape al espacio y manteniendo la Tierra a una temperatura habitable. Los principales GEI incluyen <span className="bg-blue-400 text-black px-1 py-0.5 mx-1">dióxido de carbono</span> (CO₂), <span className="bg-red-600 text-black px-1 py-0.5 mx-1">metano</span> (CH₄) y <span className="bg-purple-600 text-black px-1 py-0.5 mx-1">óxidos de nitrógeno</span> (NOx). </p>

  </div>

  </Parallax>

  </ParallaxProvider>

  </section>
  
  
  <section className="h-[600px]">

    <ParallaxProvider>

      <Parallax speed={1}>
        <div className='absolute right-4 w-[600px] flex items-start px-4'>
    
        <h2 className='text-[20px] flex text-left w-full max-w-1xl leading-relaxed text-white'>
        Naturalmente, la luz solar atraviesa la atmósfera y llega a la superficie de la Tierra, calentándola. Parte de este calor es reflejado, nuevamente, desde La Tierra hacia el espacio en forma de radiación infrarroja. Pero, con la intervención del ser humano se genera un exceso de gases de efecto invernadero.
        </h2> 

        </div>

      </Parallax>

    </ParallaxProvider>

</section>

<section className="h-[1000px]">

<ParallaxProvider>

  <Parallax speed={1}>
  <div className='absolute right-4 h-[600px] w-[600px] flex items-start px-4'>

        <h2 className="text-[20px] flex text-left w-full max-w-1xl leading-relaxed text-white">
        Con más gases de efecto invernadero en la atmósfera, una mayor cantidad de este calor es atrapada en lugar de escapar al espacio. La presencia adicional de estos gases dificulta que el calor regrese al espacio, causando que más calor se "reabsorba" en la atmósfera, generando una desregulación en la temperatura de La Tierra.
        </h2>
  </div>

  </Parallax>

  </ParallaxProvider>

  </section>





  {/* //////// CIUDAD ILUSTRACION //////////////*/}


<ParallaxProvider scrollAxis="horizontal">
       <section> 
        <div id="TopCiudad"
          ref={sectionRef}
          className="flex justify-center my-8 overflow-x-auto whitespace-nowrap w-full"
          style={{ height: '1300px' }}
        >
          <div className="inline-block min-w-[8000px]">
            <Image src="/ciudad.svg" alt="Visualización de datos" width={11103} height={1174} />
          </div>
        </div>
        </section>
      </ParallaxProvider>



    {/*////////// VISUALIZACION 1 //////////*/}
      {/* Título a visualización 1 LOS TIPOS DE EMISIONES*/}

      <h3 className="text-[#D9D9D9] text-left text-4xl font-bold my-20 ml-[70px]">¿CUÁLES SON LAS ACTIVIDADES MÁS CONTAMINANTES?</h3>


      <div className="flex justify-between items-center">
        {/* Contenedor del número en rojo y el párrafo V1 */}
        <div className="w-[30%] pl-4 text-left" style={{ marginTop: '-240px', marginLeft: '60px', marginRight: '10px' }}>
          {/* Cuadro rojo con el número */}
          <div className="bg-[#d20303] text-white px-6 py-4 rounded-lg mb-4 text-center">
            <h3 className="bg-[#d20303]l text-left text-4xl font-bold my-[10px] ">SOLO EN ELECTRICIDAD</h3>
            <span className="text-[80px] font-bold leading-none">+6,501,370</span>
            <div className="bg-[#d20303] text-[25px] text-black text-lg">billones de toneladas de CO2</div>
          </div>

          {/* Párrafo explicativo V1 */}
          <p className="text-[#D9D9D9] text-[16px] text-lg leading-relaxed">
            Las actividades que más CO2 emiten son clave en el deterioro ambiental impulsado por las grandes potencias.
            De todos los sectores, la generación de electricidad, mayormente dependiente de combustibles fósiles como el carbón
            y el gas natural, es el mayor emisor de CO2. A pesar de los avances en energías renovables, la demanda energética
            sigue creciendo y, con ella, el uso intensivo de fuentes contaminantes, agravando el calentamiento global y poniendo
            en riesgo el futuro del planeta.
          </p>
        </div>

        {/* Visualización 1 */}
        <div className="flourish-embed flourish-chart" data-src="story/2697857" style={{ width: '60%', height: '800px', marginLeft: '60px', marginRight: '10px' }}></div>
      </div>






      {/*////// VISUALIZACION 2 /////////*/}
      {/* Título a visualización 2 */}
      <h2 className="text-[#D9D9D9] text-left text-4xl font-bold my-20 ml-[70px]">¿QUIÉNES SON LOS RESPONSABLES DE ESTAS EMISIONES?</h2>

      {/* Visualización 2 */}
      <FlourishV2 /> 


      <p className="text-[20px] text-center mt-20 mx-auto max-w-4xl leading-relaxed text-white">
        <span className="text-red-600 font-bold">China</span> destaca como el mayor emisor, con un crecimiento
        exponencial en las últimas décadas, mientras que Estados Unidos y otros países también muestran cifras
        elevadas, aunque más estables. Estas naciones tienen una responsabilidad significativa en la crisis
        climática actual, ya que su modelo económico basado en la quema de combustibles fósiles ha impulsado gran
        parte del aumento global de emisiones. El impacto de sus decisiones sigue marcando el rumbo del deterioro
        ambiental mundial.
      </p>







      {/*////// VISUALIZACION 3 /////////*/}
      {/* Título a visualización 3 */}
      <h3 className="text-[#D9D9D9] text-left text-4xl font-bold my-20 ml-[70px]">LAS EMISIONES DE LAS POTENCIAS A TRAVÉS DEL TIEMPO</h3>

    <FlourishV3 />


    </main>
  </>
  );
};


export default AttentionPoster;