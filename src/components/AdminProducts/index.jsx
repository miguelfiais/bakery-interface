import { IoMdTrash } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';
import { useProduct } from '../../hooks/ProductContext';
import { Container, Offer } from './styles';

const AdminProducts = () => {
  const { products, deleteProduct } = useProduct();

  return (
    <Container>
      <div className="table-head">
        <p>Imagem</p>
        <p>Name</p>
        <p>Preço</p>
        <p>Produto em Oferta</p>
        <p>Editar / Excluir</p>
      </div>
      <div className="table-body">
        {products &&
          products.map((product) => (
            <div key={product.id} className="tr-body">
              <img src={`http://localhost:3000/image/${product.path}`} alt="" />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <Offer isOffer={product.offer} />
              <div className="delete-and-edit">
                <MdModeEdit />
                <IoMdTrash onClick={() => deleteProduct(product.id)} />
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default AdminProducts;
