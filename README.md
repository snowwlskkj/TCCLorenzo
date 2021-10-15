@@ -1,575 +0,0 @@
# API Lanchonete TECHERS

> Esta API será responsável por gerenciar o estoque da lanchonete da escola

## Rotas GET

> Aqui estão as rotas dos alunos

### Listar todos os chicletes

[http://localhost:3000/listar/chicletes](http://localhost:3000/listar/chicletes)

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Listagem ok | [ { "id": 0, "marca":"Fini", "nome":"Chiclete Fini", "preco":2.00, "quantidade":18 } , ]

### Listar todos os salgadinhos

[http://localhost:3000/listar/salgadinhos](http://localhost:3000/listar/salgadinhos)

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Listagem ok | [ { "id": 0, "marca":"Skid", "nome":"Salgadinho Skid Presunto", "preco":3.00, "quantidade":1 } , ...]

### Listar todos os chocolates

[http://localhost:3000/listar/chocolates](http://localhost:3000/listar/chocolates)

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Listagem ok | [ { "id": 0, "marca":"Garoto", "nome":"Baton Branco", "preco":2.00, "quantidade":32 } , ...]

### Listar todos as bolachas

[http://localhost:3000/listar/bolachas](http://localhost:3000/listar/bolachas)

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Listagem ok | [ { "id": 0, "marca":"Zabet", "nome":"Nikito Chocolate", "preco":2.00, "quantidade":18 } , ...]


### Listar todos as balas

[http://localhost:3000/listar/balas](http://localhost:3000/listar/balas)

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Listagem ok | [ { "id": 0, "marca":"Fini", "nome":"Fini Tubes", "preco":2.00, "quantidade":24 } , ...]

### Listar todos as marcas

[http://localhost:3000/listar/marcas](http://localhost:3000/listar/marcas)

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Listagem ok | [ { "id": 0, "nome": "Fini"} , ...]

## Rotas POST

### Comprar chiclete

[http://localhost:3000/comprar/chiclete](http://localhost:3000/comprar/chiclete)

#### Exemplo de Body

```json
//Compra de 1 chiclete "Chiclete Fini"
{
    "id": 0,
    "quantidade":1
}
```

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Compra efetuada | { "message": "Compra de 1 Chiclete Fini efetuada com sucesso"}
404 | Não foi encontrado o item | { "message": "Item com o id 0 não encontrado"}
403 | Quantidade pedida excede a quantidade no estoque | { "message": "Você está tentando comprar mais do que o estoque, já estamos fazendo pedidos para suprir sua demanda","quantidade": 18}

### Comprar salgadinho

[http://localhost:3000/comprar/salgadinho](http://localhost:3000/comprar/salgadinho)

#### Exemplo de Body

```json
//Compra de 1 salgadinho "Salgadinho Skid Presunto"
{
    "id": 0,
    "quantidade":1
}
```

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Compra efetuada | { "message": "Compra de 1 Salgadinho Skid Presunto efetuada com sucesso"}
404 | Não foi encontrado o item | { "message": "Item com o id 0 não encontrado"}
403 | Quantidade pedida excede a quantidade no estoque | { "message": "Você está tentando comprar mais do que o estoque, já estamos fazendo pedidos para suprir sua demanda","quantidade": 18}

### Comprar chocolate

[http://localhost:3000/comprar/chocolate](http://localhost:3000/comprar/chocolate)

#### Exemplo de Body

```json
//Compra de 1 chocolate "Baton Branco"
{
    "id": 0,
    "quantidade":1
}
```

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Compra efetuada | { "message": "Compra de 1 Baton Branco efetuada com sucesso"}
404 | Não foi encontrado o item | { "message": "Item com o id 0 não encontrado"}
403 | Quantidade pedida excede a quantidade no estoque | { "message": "Você está tentando comprar mais do que o estoque, já estamos fazendo pedidos para suprir sua demanda","quantidade": 18}

### Comprar bolacha

[http://localhost:3000/comprar/bolacha](http://localhost:3000/comprar/bolacha)

#### Exemplo de Body

```json
//Compra de 1 chocolate "Nikito Chocolate"
{
    "id": 0,
    "quantidade":1
}
```

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Compra efetuada | { "message": "Compra de 1 Nikito Chocolate efetuada com sucesso"}
404 | Não foi encontrado o item | { "message": "Item com o id 0 não encontrado"}
403 | Quantidade pedida excede a quantidade no estoque | { "message": "Você está tentando comprar mais do que o estoque, já estamos fazendo pedidos para suprir sua demanda","quantidade": 18}

### Comprar bala

[http://localhost:3000/comprar/bala](http://localhost:3000/comprar/bala)

#### Exemplo de Body

```json
//Compra de 1 chocolate "Fini Tubes"
{
    "id": 0,
    "quantidade":1
}
```

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Compra efetuada | { "message": "Compra de 1 Fini Tubes efetuada com sucesso"}
404 | Não foi encontrado o item | { "message": "Item com o id 0 não encontrado"}
403 | Quantidade pedida excede a quantidade no estoque | { "message": "Você está tentando comprar mais do que o estoque, já estamos fazendo pedidos para suprir sua demanda","quantidade": 18}

> Aqui serão as ações da administradora do sistema


### Inserir uma nova categoria de item

[http://localhost:3000/admin/inserir/categoria](http://localhost:3000/admin/inserir/categoria)

#### Exemplo de Body

```json
{
    "categoria":"Salgados",
    "usuario":{
        "usuario": "Amanda",
        "senha": "12345678"
    }
}
```

Status|Significado|Exemplo de resposta| 
-|-|- 
201| Categoria criada com sucesso | { "message": "Categoria salgados criada com sucesso"}
401 | Não permitido | { "message": "Usuário ou senha incorretos"}
409 | Categoria já existente | { "message": "Categoria de item já existente"}

### Criar um novo chiclete no estoque

[http://localhost:3000/admin/criar/chiclete](http://localhost:3000/admin/criar/chiclete)

#### Exemplo de Body

```json
{
    "item":{
        "marca":0,
        "nome":"Chiclete de tatuagem",
        "preco":2.00,
        "quantidade":18
    },
    "usuario":{
        "usuario": "Amanda",
        "senha": "12345678"
    }
}
```

> No campo marca não será passado o nome e sim o id (posição) da marca na "tabela" marcas  
> O usuário não dita qual será o id do item, esse id será a posição do item no array (tamanho do array antes do item ser inserido)

Status|Significado|Exemplo de resposta| 
-|-|- 
201| Chiclete criado com sucesso no estoque | { "message": "Chiclete de tatuagem criado com sucesso", "item":{"id":1,"marca":Fini, "nome":"Chiclete de tatuagem", "preco":2.00, "quantidade":18}}
401 | Não permitido | { "message": "Usuário ou senha incorretos"}

### Criar um novo salgadinho no estoque

[http://localhost:3000/admin/criar/salgadinho](http://localhost:3000/admin/criar/salgadinho)

#### Exemplo de Body

```json
{
    "item":{
        "marca":2,
        "nome":"Fandangos radical",
        "preco":2.00,
        "quantidade":18
    },
    "usuario":{
        "usuario": "Amanda",
        "senha": "12345678"
    }
}
```

> No campo marca não será passado o nome e sim o id (posição) da marca na "tabela" marcas  
> O usuário não dita qual será o id do item, esse id será a posição do item no array (tamanho do array antes do item ser inserido)

Status|Significado|Exemplo de resposta| 
-|-|- 
201| Salgadinho criado com sucesso no estoque | { "message": "Fandangos radical criado com sucesso", "item":{"id":8,"marca":Elma Chips, "nome":"Fandangos radical", "preco":2.00, "quantidade":18}}
401 | Não permitido | { "message": "Usuário ou senha incorretos"}
> Os PATCHs abaixo seriam usados pela secretaria ao colocar mais itens no estoque

### Criar um novo chocolate no estoque

[http://localhost:3000/admin/criar/chocolate](http://localhost:3000/admin/criar/chocolate)

#### Exemplo de Body

```json
{
    "item":{
        "marca":2,
        "nome":"Sonho de Valsa",
        "preco":2.00,
        "quantidade":18
    },
    "usuario":{
        "usuario": "Amanda",
        "senha": "12345678"
    }
}
```

> No campo marca não será passado o nome e sim o id (posição) da marca na "tabela" marcas  
> O usuário não dita qual será o id do item, esse id será a posição do item no array (tamanho do array antes do item ser inserido)

Status|Significado|Exemplo de resposta| 
-|-|- 
201| Salgadinho criado com sucesso no estoque | { "message": "Sonho de Valsa criado com sucesso", "item":{"id":9,"marca":Garoto, "nome":"Sonho de Valsa", "preco":2.00, "quantidade":18}}
401 | Não permitido | { "message": "Usuário ou senha incorretos"}

### Criar uma nova bolacha no estoque

[http://localhost:3000/admin/criar/bolacha](http://localhost:3000/admin/criar/bolacha)

#### Exemplo de Body

```json
{
    "item":{
        "marca":7,
        "nome":"Nikito Doce de Leite",
        "preco":2.00,
        "quantidade":18
    },
    "usuario":{
        "usuario": "Amanda",
        "senha": "12345678"
    }
}
```

> No campo marca não será passado o nome e sim o id (posição) da marca na "tabela" marcas  
> O usuário não dita qual será o id do item, esse id será a posição do item no array (tamanho do array antes do item ser inserido)

Status|Significado|Exemplo de resposta| 
-|-|- 
201| Salgadinho criado com sucesso no estoque | { "message": "Nikito Doce de Leite criado com sucesso", "item":{"id":3,"marca":Zabet, "nome":"Nikito Doce de Leite", "preco":2.00, "quantidade":18}}
401 | Não permitido | { "message": "Usuário ou senha incorretos"}

### Criar uma nova bala no estoque

[http://localhost:3000/admin/criar/bala](http://localhost:3000/admin/criar/bala)

#### Exemplo de Body

```json
{
    "item":{
        "marca":4,
        "nome":"Bala Garoto Hortela",
        "preco":2.00,
        "quantidade":18
    },
    "usuario":{
        "usuario": "Amanda",
        "senha": "12345678"
    }
}
```

> No campo marca não será passado o nome e sim o id (posição) da marca na "tabela" marcas  
> O usuário não dita qual será o id do item, esse id será a posição do item no array (tamanho do array antes do item ser inserido)

Status|Significado|Exemplo de resposta| 
-|-|- 
201| Salgadinho criado com sucesso no estoque | { "message": "Bala Garoto Hortela criado com sucesso", "item":{"id":2,"marca":Garoto, "nome":"Bala Garoto Hortela", "preco":2.00, "quantidade":18}}
401 | Não permitido | { "message": "Usuário ou senha incorretos"}

> Os PATCHs abaixo seriam usados pela secretaria ao colocar mais itens no estoque

## Rotas PATCH

### Atualizar quantidade de chicletes no estoque

[http://localhost:3000/admin/atualizar/quantidade/chicletes](http://localhost:3000/admin/atualizar/quantidade/chicletes)

#### Exemplo de Body

```json
{
    //Está sendo adicionado 10 itens com o id 0 pela Amanda
    "id":0,
    "quantidade":10,
    "usuario":{
        "usuario": "Amanda",
        "senha": "12345678"
    }
}
```

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Estoque adicionado com sucesso | { "message": "10 Chiclete Fini adicionados ao estoque"}
401 | Não permitido | { "message": "Usuário ou senha incorretos"}
404 | Item não encontrado no banco | { "message": "Item com o id 0 não encontrado"}

### Atualizar quantidade de salgadinhos no estoque

[http://localhost:3000/admin/atualizar/quantidade/salgadinhos](http://localhost:3000/admin/atualizar/quantidade/salgadinhos)

#### Exemplo de Body

```json
{
    //Está sendo adicionado 10 itens com o id 0 pela Amanda
    "id":0,
    "quantidade":10,
    "usuario":{
        "usuario": "Amanda",
        "senha": "12345678"
    }
}
```

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Estoque adicionado com sucesso | { "message": "10 Salgadinho Skid Presunto adicionados ao estoque"}
401 | Não permitido | { "message": "Usuário ou senha incorretos"}
404 | Item não encontrado no banco | { "message": "Item com o id 0 não encontrado"}

### Atualizar quantidade de chocolates no estoque

[http://localhost:3000/admin/atualizar/quantidade/chocolates](http://localhost:3000/admin/atualizar/quantidade/chocolates)

#### Exemplo de Body

```json
{
    //Está sendo adicionado 10 itens com o id 0 pela Amanda
    "id":0,
    "quantidade":10,
    "usuario":{
        "usuario": "Amanda",
        "senha": "12345678"
    }
}
```

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Estoque adicionado com sucesso | { "message": "10 Baton Branco adicionados ao estoque"}
401 | Não permitido | { "message": "Usuário ou senha incorretos"}
404 | Item não encontrado no banco | { "message": "Item com o id 0 não encontrado"}

### Atualizar quantidade de bolachas no estoque

[http://localhost:3000/admin/atualizar/quantidade/bolachas](http://localhost:3000/admin/atualizar/quantidade/bolachas)

#### Exemplo de Body

```json
{
    //Está sendo adicionado 10 itens com o id 0 pela Amanda
    "id":0,
    "quantidade":10,
    "usuario":{
        "usuario": "Amanda",
        "senha": "12345678"
    }
}
```

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Estoque adicionado com sucesso | { "message": "10 Nikito Chocolate adicionados ao estoque"}
401 | Não permitido | { "message": "Usuário ou senha incorretos"}
404 | Item não encontrado no banco | { "message": "Item com o id 0 não encontrado"}

### Atualizar quantidade de balas no estoque

[http://localhost:3000/admin/atualizar/quantidade/balas](http://localhost:3000/admin/atualizar/quantidade/balas)

#### Exemplo de Body

```json
{
    //Está sendo adicionado 10 itens com o id 0 pela Amanda
    "id":0,
    "quantidade":10,
    "usuario":{
        "usuario": "Amanda",
        "senha": "12345678"
    }
}
```

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Estoque adicionado com sucesso | { "message": "10 Fini Tubes adicionados ao estoque"}
401 | Não permitido | { "message": "Usuário ou senha incorretos"}
404 | Item não encontrado no banco | { "message": "Item com o id 0 não encontrado"}

> Abaixo serão as rotas resposáveis por atualizar preço

### Atualizar preço dos chicletes no estoque

[http://localhost:3000/admin/atualizar/preco/chicletes](http://localhost:3000/admin/atualizar/preco/chicletes)

#### Exemplo de Body

```json
{
    //Está sendo adicionado 10 itens com o id 0 pela Amanda
    "id":0,
    "preco":9.99,
    "usuario":{
        "usuario": "Amanda",
        "senha": "12345678"
    }
}
```

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Preco atualizado | { "message": "Chiclete Fini agora custa R$9.99"}
401 | Não permitido | { "message": "Usuário ou senha incorretos"}
404 | Item não encontrado no banco | { "message": "Item com o id 0 não encontrado"}

### Atualizar preço dos salgadinhos no estoque

[http://localhost:3000/admin/atualizar/preco/salgadinhos](http://localhost:3000/admin/atualizar/preco/salgadinhos)

#### Exemplo de Body

```json
{
    //Está sendo adicionado 10 itens com o id 0 pela Amanda
    "id":0,
    "preco":9.99,
    "usuario":{
        "usuario": "Amanda",
        "senha": "12345678"
    }
}
```

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Preco atualizado | { "message": "Salgadinho Skid Presunto agora custa R$9.99"}
401 | Não permitido | { "message": "Usuário ou senha incorretos"}
404 | Item não encontrado no banco | { "message": "Item com o id 0 não encontrado"}

### Atualizar preço dos chocolates no estoque

[http://localhost:3000/admin/atualizar/preco/chocolates](http://localhost:3000/admin/atualizar/preco/chocolates)

#### Exemplo de Body

```json
{
    //Está sendo adicionado 10 itens com o id 0 pela Amanda
    "id":0,
    "preco":9.99,
    "usuario":{
        "usuario": "Amanda",
        "senha": "12345678"
    }
}
```

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Preco atualizado | { "message": "Baton Branco agora custa R$9.99"}
401 | Não permitido | { "message": "Usuário ou senha incorretos"}
404 | Item não encontrado no banco | { "message": "Item com o id 0 não encontrado"}

### Atualizar preço dos bolachas no estoque

[http://localhost:3000/admin/atualizar/preco/bolachas](http://localhost:3000/admin/atualizar/preco/bolachas)

#### Exemplo de Body

```json
{
    //Está sendo adicionado 10 itens com o id 0 pela Amanda
    "id":0,
    "preco":9.99,
    "usuario":{
        "usuario": "Amanda",
        "senha": "12345678"
    }
}
```

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Preco atualizado | { "message": "Nikito Chocolate agora custa R$9.99"}
401 | Não permitido | { "message": "Usuário ou senha incorretos"}
404 | Item não encontrado no banco | { "message": "Item com o id 0 não encontrado"}

### Atualizar preço dos balas no estoque

[http://localhost:3000/admin/atualizar/preco/balas](http://localhost:3000/admin/atualizar/preco/balas)

#### Exemplo de Body

```json
{
    //Está sendo adicionado 10 itens com o id 0 pela Amanda
    "id":0,
    "preco":9.99,
    "usuario":{
        "usuario": "Amanda",
        "senha": "12345678"
    }
}
```

Status|Significado|Exemplo de resposta| 
-|-|- 
200| Preco atualizado | { "message": "Fini Tubes agora custa R$9.99"}
401 | Não permitido | { "message": "Usuário ou senha incorretos"}
404 | Item não encontrado no banco | { "message": "Item com o id 0 não encontrado"}