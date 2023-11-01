const Conexao = require("./conexao");

class ProdutoModel {
  tabela = "produto";
  db = new Conexao();

  constructor() {
    this.db.conectar();
  }

  async getAllProdutos() {
    try {
      const result = await this.db.query(`SELECT * FROM ${this.tabela}`, []);
      return result;
    } catch (err) {
      throw err;
    }
  }

  async getProdutoById(id) {
    try {
      const result = await this.db.query(
        `SELECT * FROM ${this.tabela} WHERE id = ?`,
        [id]
      );
      return result;
    } catch (err) {
      throw err;
    }
  }

  async add(nome, descricao, preco, imagem) {
    try {
      await this.db.query(
        `INSERT INTO ${this.tabela} (nome, descricao, preco) VALUES (?, ?, ?)`,
        [nome, descricao, preco]
      );
    } catch (err) {
      throw err;
    }
  }

  async edita(id, nome, descricao, preco, imagem) {
    try {
      await this.db.query(
        `UPDATE ${this.tabela} SET nome = ?, descricao = ?, preco = ? WHERE id = ?`,
        [nome, descricao, preco, id]
      );
    } catch (err) {
      throw err;
    }
  }

  async remove(id) {
    try {
      await this.db.query(`DELETE FROM ${this.tabela} WHERE id = ?`, [id]);
    } catch (err) {
      throw err;
    }
  }
}
