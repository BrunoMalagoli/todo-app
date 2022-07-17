# Next.js ToDo App

Es necesario iniciar la base de datos para correr de manera local

```
docker-compose up -d
```

\*-d = **detached**

\*MongoDB URL Local:

```
mongodb://localhost:27017/entriesdb
```

# Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

##Llenar la base de datos con información de pruebas
Llamar a :

```
http://localhost:3000/api/seed/

```
