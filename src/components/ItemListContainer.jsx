
const ItemListContainer = ({ text }) => {
    console.log(text);  // Esto debería imprimir "Proximamente!!" en la consola
    return (
        <div>
            <p>{text}</p>
        </div>
    );
}

export default ItemListContainer;