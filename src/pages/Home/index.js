import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-pulseboost-hd-adidas-masculino/34/NQQ-5284-234/NQQ-5284-234_zoom1.jpg?ims=326x"
          alt="Tênis"
        />

        <strong>
          Tênis muito legal com título muito grande que qubra várias linhas
        </strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-pulseboost-hd-adidas-masculino/34/NQQ-5284-234/NQQ-5284-234_zoom1.jpg?ims=326x"
          alt="Tênis"
        />

        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-pulseboost-hd-adidas-masculino/34/NQQ-5284-234/NQQ-5284-234_zoom1.jpg?ims=326x"
          alt="Tênis"
        />

        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-pulseboost-hd-adidas-masculino/34/NQQ-5284-234/NQQ-5284-234_zoom1.jpg?ims=326x"
          alt="Tênis"
        />

        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-pulseboost-hd-adidas-masculino/34/NQQ-5284-234/NQQ-5284-234_zoom1.jpg?ims=326x"
          alt="Tênis"
        />

        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-pulseboost-hd-adidas-masculino/34/NQQ-5284-234/NQQ-5284-234_zoom1.jpg?ims=326x"
          alt="Tênis"
        />

        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;
