import React from 'react'

function CvSecondary() {
  return (
    <>
        <div className='DivCvSecondary'>
            <div className=''>
            <h2 className='' >Conocimientos</h2>

            <div className=''>              
                {/* <Image src='/apertura.svg' alt='img apertura' width={50} height={50} className={styles.fotoConocimiento}/>
                <Image src='/html.svg' alt='img html' width={50} height={50} className={styles.fotoConocimiento}/>
                <Image src='/css.svg' alt='img css'  width={50} height={50} className={styles.fotoConocimiento}/>
                <Image src='/js.svg' alt='img js' width={50} height={50} className={styles.fotoConocimiento}/>
                <Image src='/react.png' alt='img react'  width={50} height={50} className={styles.fotoConocimiento}/>
                <Image src='/clausura.svg' alt='img clausura'  width={50} height={50} className={styles.fotoConocimiento}/> */}
                <div className=''>
                    <div className=''>
                        <p className=''>HTML</p>
                        <p className=''>CSS</p>
                        <p className=''>GIT</p>
                        <p className=''>Github</p>
                        <p className=''>Next js</p>
                        <p className=''>SCSS</p>
                    </div>
                    <div className=''>
                        <p className=''>JavaScript</p>
                        <p className=''>React js</p>
                        <p className=''>Bootstrap</p>
                        <p className=''>Firebase</p>
                        <p className=''>Next UI</p>
                        <p className=''>Balsamiq</p>
                    </div>
                </div>
            </div>
                <h2 className=''>Idiomas</h2>
                <div className=''>
                    
                    <p className=''>Español: nativo</p>
                    <p className=''>Inglés: intermedio/avanzado</p>
                </div>
            </div>

        </div>
    </>
  )
}

export default CvSecondary