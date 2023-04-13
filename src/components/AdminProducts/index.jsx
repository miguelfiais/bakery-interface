import { useState } from 'react';
import { IoMdTrash } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useProduct } from '../../hooks/ProductContext';
import { api } from '../../services/api';
import { formartPrice } from '../../utils/utils';
import { Container, ContainerForm, FormEdit, Offer } from './styles';

const AdminProducts = () => {
  const { products, deleteProduct } = useProduct();
  const [isOpen, setIsOpen] = useState(false);

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productId, setProductId] = useState('');
  const [productOffer, setProductOffer] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await toast.promise(
      api.put(`/products/${productId}`, {
        name: productName,
        price: productPrice,
        offer: productOffer,
      }),
      {
        pending: 'Alterando produto...',
        success: 'Produto alterado com sucesso',
        error: 'Falha ao alterar o produto',
      }
    );
    setIsOpen(false);
  };

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
              <p>{formartPrice(product.price)}</p>
              <Offer isOffer={product.offer}>{product.offer ? 'V' : 'X'}</Offer>
              <div className="delete-and-edit">
                <MdModeEdit
                  onClick={() => {
                    setProductName(product.name);
                    setProductPrice(product.price);
                    setProductOffer(product.offer);
                    setProductId(product.id);
                    setIsOpen(true);
                  }}
                />
                <IoMdTrash onClick={() => deleteProduct(product.id)} />
              </div>
            </div>
          ))}
      </div>
      <ContainerForm isOpen={isOpen}>
        <FormEdit onSubmit={handleSubmit}>
          <span onClick={() => setIsOpen(false)}>X</span>
          <label>
            Nome:
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </label>
          <label className="label-checkbox">
            Oferta:
            <input
              type="checkbox"
              checked={productOffer}
              onChange={() => setProductOffer(!productOffer)}
            />
          </label>
          <button type="submit">Alterar produto</button>
        </FormEdit>
      </ContainerForm>
    </Container>
  );
};

export default AdminProducts;
