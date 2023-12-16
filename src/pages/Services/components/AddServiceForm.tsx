function AddServiceForm() {
  return (
    <form action="">
      <h1>Dados do cliente</h1>

      <label htmlFor="">
        <p>Nome do cliente</p>
        <input type="text" />
      </label>

      <label htmlFor="">
        <p>Número de Telefone</p>
        <input type="text" />
      </label>

      <h2>Informações sobra a moto</h2>

      <label htmlFor="">
        <p>Modelo</p>
        <input type="text" />
      </label>

      <label htmlFor="">
        <p>Marca</p>
        <select name="" id="">
          <option value="">Honda</option>
          <option value="">Yamaha</option>
          <option value="">Suzuki</option>
          <option value="">Kawazaki</option>
        </select>
      </label>

      <label htmlFor="">
        <p>Ano</p>
        <input type="number" />
      </label>

      <h2>Descrição do serviço</h2>

      <label htmlFor="">
        <p>Serviço prestado</p>
        <textarea name="" id="" />
      </label>

      <label htmlFor="">
        <p>Valor do serviço</p>
        <input type="number" />
      </label>

      <button type="button">Cadastrar Serviço</button>
    </form>
  );
}

export default AddServiceForm;
