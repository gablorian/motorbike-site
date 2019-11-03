import React from 'react';
import './App.css';

function Contact() {
    return (
<div>
    <div className='spacer'>

    </div>
    <div className='contactShit'>

        <div className='maps'>
            <iframe className='map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716.9960985648727!2d22.023427151005095!3d50.001939287755164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8c8ac2762775cf9e!2sSeeko%20Moto%20-Motocykle%20Rzesz%C3%B3w!5e0!3m2!1spl!2spl!4v1570130600107!5m2!1spl!2spl"
            > </iframe>
        </div>
        <div className='hours'>
            <span>Godziny otwarcia:</span>
            <span>Pon - Pt : 9:00 - 17:00</span>
            <span>Sob : 9:00 - 13:00</span>
            <span>Nd : Zamknięte</span>
        </div>

    </div>
    <div className='spacer'>

    </div>
</div>





    );
}

export default Contact;