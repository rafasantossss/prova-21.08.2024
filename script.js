let usuarios = [];

function adicionarUsuario(nome, idade, email) {
  if (nome == "" || idade == "" || email == "") {
    console.log("à espaços em branco");
  } else if (idade <= 0) {
    console.log("Não existe idade menor que 0");
  } else {
    usuarios.push({nome: nome, idade: idade, email: email});
    console.log("Usuário adicionado");
  }
}

function listarUsuarios() {
  console.log("Usuários cadastrados:");
  for (let i = 0; i < usuarios.length; i++) {
    console.log(`Nome: ${usuarios[i].nome}, Idade: ${usuarios[i].idade}, Email: ${usuarios[i].email}`);
  }
}

adicionarUsuario("rafael", 16, "Rafael@gmail.com");
listarUsuarios();