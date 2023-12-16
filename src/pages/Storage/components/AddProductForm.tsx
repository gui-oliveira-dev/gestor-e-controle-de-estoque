function AddProductForm() {
  return (
    <form action="">

      <label htmlFor="">
        <p>Nome do produto</p>
        <input type="text" />
      </label>

      <label htmlFor="">
        <p>Código do produto</p>
        <input type="text" />
      </label>

      <label htmlFor="">
        <p>Quantidade em estoque</p>
        <input type="number" />
      </label>

      <label htmlFor="">
        <p>Categoria</p>
        <select name="" id="">
          <option value="">Cabo</option>
          <option value="">Elétrica</option>
          <option value="">Motor</option>
          <option value="">Óleo</option>
        </select>
      </label>

      <label htmlFor="">
        <p>Valor do produto</p>
        <input type="number" />
      </label>

      <label htmlFor="">
        <p>Adicionar Foto</p>
        <input type="file" />
      </label>

      <button type="button">Cadastrar Produto</button>
    </form>
  );
}

export default AddProductForm;
