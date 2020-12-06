# Alcoomerce
This is a API documentation of the alcoomerce

# Elements
The list of all requests of alcoomerce api, is the base of all, models is in final of the doc.

## Create
**`POST`** /products

### Header
| Key   |      Value 
|----------|:-------------:|
| Authorizantion |  Bearer 12u2ge8f7g1238r71g23f812371gr7612r23fy2b3kjdsnf.asddg |
**Only for admin**

### Request
Body
```json
{
	data: {  
	    name: 'Tikira',
	    description: 'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.',
		value: 77.34,
		image: "http:/google.com/image",
		category: 3  
	}
}
```
### Response
body
```json
{
	data: {
		id: 1,
	    name: 'Tikira',
	    description: 'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.',
		value: 77.34,
		image: "http:/google.com/image",
		category: 3  
	}
}
```


## List
**`GET`** /products

### Request
Query params
```json
{
	sort: ["title", "ASC"],
	range: [0, 24], 
	filter: {
		"title":"bar"
	}
}
```
EX: http://my.api.url/products?sort=["title","ASC"]&range=[0, 24]&filter={"title":"bar"}

### Response
body
```json
{
	data: [
		{
			id: 1,
		    name: 'Tikira',
		    description: 'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.',
			value: 77.34,
			image: "http:/google.com/image",
			category: 3  
		},
		...
	]
}
```

## Get One
**`GET`** /products/:id

### Request
Params
```json
	id: "1"
```

### Response
```json
{
	data: [
		{
			id: 1,
		    name: 'Tikira',
		    description: 'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.',
			value: 77.34,
			image: "http:/google.com/image",
			category: 3  
		},
		...
	]
}
```

## Update
**`PUT`** /products/:id

### Request
Params
```json
	id: "1"
```

body
```json
{
	data: {
	    name: 'Tikira',
	    description: 'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.',
		value: 77.34,
		image: "http:/google.com/image",
		category: 3  
	}
}
```

### Response
```json
{
	data: [
		{
			id: 1,
		    name: 'Tikira',
		    description: 'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.',
			value: 77.34,
			image: "http:/google.com/image",
			category: 3  
		},
		...
	]
}
```

## Delete
**`PUT`** /products/:id

### Request
Params
```json
	id: "1"
```

### Response
```json
{
	data:  {
			id: 1,
		},
	}
}
```


# Models
List of the all models in the alcoomerce
Obs. Updated_at and Created_at is optionals
## Products
- Only **READ** requests is Public
```json
{
    name: 'Tikira',
    description: 'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.',
	value: 77.34,
	image: "http:/google.com/image",
	category: 3  
}
```

## Categories
- Only **READ** requests is Public
```json
{
    name: 'Drinks',
    description: 'Aqui estao listados todos os drinks oferecidos',
	image: "http:/google.com/image",
}
```

## Users
- Private
```json
{
    name: 'Beras',
	password: '0182yuygv8721hr871y132r', // crypto
	email: 'beras@beroni.dev',
}
```

## Orders
- Only **CREATE** request is Public
### Request
```json
{
	name: "Joazin",
	cpf: "1231231213123",
	creditCard: '12312123312341234',
	product: '1',	
}
```

### Response
```json
{
	name: "Joazin",
	cpf: "1231231213123",
	finalDigis: '1234',
	product: '1',	
}
```
