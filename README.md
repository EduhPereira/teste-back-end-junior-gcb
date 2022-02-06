# Teste Back End Júnior - GCB

Aplicação NodeJS - CRUD de médicos utilizando Express, TypeORM, PostgreSQL, Yup, Typescript e Docker.

## --------------------------------------------------------------------------------------------------

## API Documentation

### GET: localhost:3000/api/docs

## --------------------------------------------------------------------------------------------------

## Endpoints

### POST: localhost:3000/api/doctors/register

```
{
    "nome":"John Doe",
    "crm":1234567,
    "telefone":31321862,
    "celular":981070597,
    "cep":12520380,
    "especialidade":"cardiologista"
}
```

RESPONSE - 201 CREATED

```
{
    "message": "doctor registered",
    "doctor": {
        "nome": "Edward",
        "crm": 1234567,
        "telefone": 31321862,
        "celular": 988296077,
        "cep": "12520-380",
        "logradouro": "Rua Joaquim Pinto Cabral",
        "complemento": "",
        "bairro": "Jardim Primavera",
        "localidade": "Guaratinguetá",
        "uf": "SP",
        "especialidade": "cardiologista",
        "id": "44d064a5-4ecb-4794-9cfa-497cfd6b5b88"
    }
}
```

### GET: localhost:3000/api/doctors

RESPONSE - 200 OK

```
{
    "doctors": [
        {
            "id": "44d064a5-4ecb-4794-9cfa-497cfd6b5b88",
            "nome": "Edward",
            "crm": 1234567,
            "telefone": 31321862,
            "celular": 988296077,
            "cep": "12520-380",
            "logradouro": "Rua Joaquim Pinto Cabral",
            "complemento": "",
            "bairro": "Jardim Primavera",
            "localidade": "Guaratinguetá",
            "uf": "SP",
            "especialidade": "cardiologista"
        }
    ]
}
```

### GET: localhost:3000/api/doctors/:id

RESPONSE - 200 OK

```
{
    "doctor": {
        "id": "44d064a5-4ecb-4794-9cfa-497cfd6b5b88",
        "nome": "Edward",
        "crm": 1234567,
        "telefone": 31321862,
        "celular": 988296077,
        "cep": "12520-380",
        "logradouro": "Rua Joaquim Pinto Cabral",
        "complemento": "",
        "bairro": "Jardim Primavera",
        "localidade": "Guaratinguetá",
        "uf": "SP",
        "especialidade": "cardiologista"
    }
}
```

### PUT: localhost:3000/api/doctors/users/:id

```
{
    "nome": "João Ninguém"
}
```

RESPONSE - 200 OK

```
{
    "message": "doctor register updated",
    "doctorUpdated": {
        "id": "e5de158d-6444-4547-a150-e1d5d4da6d4a",
        "nome": "João Ninguém",
        "crm": 1234567,
        "telefone": 31321862,
        "celular": 988296077,
        "cep": "adress.cep",
        "logradouro": "adress.logradouro",
        "complemento": "adress.complemento",
        "bairro": "adress.bairro",
        "localidade": "adress.localidade",
        "uf": "adress.uf",
        "especialidade": "cardiologista"
    }
}
```

### DELETE: localhost:3000/api/doctors/:id

RESPONSE - 204 NO CONTENT
