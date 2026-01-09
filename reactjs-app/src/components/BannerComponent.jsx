import React from "react";

// estilos base (los separo para que el return quede mas limpio)
const baseStyles = {
  contenedor: {
    padding: "20px",
    borderRadius: "10px",
    width: "80%",
    margin: "30px auto",
    maxWidth: "1200px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    color: "white",
    boxShadow: "0 6px 14px rgba(0, 0, 0, 0.20)",
  },
  imagen: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
    marginBottom: "12px",
    display: "block",
  },
  titulo: {
    textTransform: "uppercase",
    margin: "10px 0 6px",
  },
  texto: {
    margin: 0,
    lineHeight: 1.5,
  },
};

// funcion para armar el estilo final del contenedor segun color
const armarEstiloContenedor = (color) => ({
  ...baseStyles.contenedor,
  backgroundColor: color || "lightgray", // si no viene color, uso lightgray
});

function BannerComponent(props) {
  // recibo props del componente
  const { title, description, imageUrl, color } = props; // desestructuro props para usarlo mas facil

  return (
    <div style={armarEstiloContenedor(color)}>
      {/* muestro la imagen solo si existe imageUrl */}
      {imageUrl && <img src={imageUrl} alt="Banner" style={baseStyles.imagen} />}

      {/* muestro titulo y descripcion */}
      <h1 style={baseStyles.titulo}>{title}</h1>
      <p style={baseStyles.texto}>{description}</p>
    </div>
  );
}

export default BannerComponent;

// Ejemplo:
{/* 
<BannerComponent
  title="Bienvenidos"
  description="Descripcion del banner de bienvenida"
  imageUrl="https://..."
  color="lightgray"
/> 
*/}