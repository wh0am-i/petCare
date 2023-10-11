class db {
  constructor() {
    this.listaUser = [];
  }

  cadastra(nome, email, senha) {
    if (this.listaUser.find(user => user.email === email)) {
      alert('E-mail já cadastrado')
      return false
    }
    else {
      const novoUser = { nome, email, senha };
      this.listaUser.push(novoUser);
      console.log(this.listaUser);
      alert('Cadastro concluido!')
      return true
    }
  }
  login(email, senha) {

  }
}

export default db;
