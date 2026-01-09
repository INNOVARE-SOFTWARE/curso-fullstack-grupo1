import React from 'react';

function BannerComponent(title, description, imageUrl, color="lightgray") {
    return (
        <div style={{
            backgroundColor: color,
            padding: '20px',
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '80%',
            margin: '30px auto',
            maxWidth: '1200px'
            }}>
            {imageUrl && <img src={imageUrl} alt="Banner" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />}
            <h1 style={{textTransform: "uppercase"}}>{title}</h1>
            <p>{description}</p>
        </div>
    );

}

export default BannerComponent;

// Ejemplo: 
 <BannerComponent
 title="Bienvenidos"
 description="Descripcion del banner de bienvenida"
 imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.centrocomerciallosllanos.com%2Fwp-content%2Fuploads%2F2023%2F07%2FLL_Sorteo-movil_Post.jpg&f=1&nofb=1&ipt=e11bfe88b9eb09577e8cca2b7efb020ecf2247b52ad6d685a2aa24fdce6da6ae" />