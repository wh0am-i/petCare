import * as FileSystem from 'expo-file-system';
class Db {
  constructor() {
    this.listaUser = [];
    this.loadData();
  }

  async loadData() {
    try {
      const path = `${FileSystem.documentDirectory}/db.json`;
      const data = await FileSystem.readAsStringAsync(path);
      this.listaUser = JSON.parse(data) || [];
    } catch (err) {
      this.listaUser = [];
    }
  }

  async saveData() {
    try {
      const path = `${FileSystem.documentDirectory}/db.json`; //guarda a lista em um json
      await FileSystem.writeAsStringAsync(path, JSON.stringify(this.listaUser));
    } catch (err) {
      console.error(err);
    }
  }

  async cadastra(nome, email, senha) {
    if (this.listaUser.find(user => user.email === email)) {
      alert('E-mail já cadastrado');
      return false;
    } else {
      const novoUser = { nome, email, senha };
      this.listaUser.push(novoUser);
      await this.saveData();
      console.log(this.listaUser);
      alert('Cadastro concluído!');
      return true;
    }
  }

  async login(email, senha) {
    await this.loadData(); // Certifica-se de carregar os dados antes do login.

    const user = this.listaUser.find(user => user.email === email);
    if (user) {
      if (user.senha === senha) {
        console.log('Logou', this.listaUser);
        return true
      } else {
        alert('Senha incorreta');
        return false
      }
    } else {
      alert('Usuário não cadastrado');
      return false
    }
  }
}

export default Db;
