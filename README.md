## Requisitos 

- git
- pnpm
- node.js (lts v22.12.0)

## Instrucciones

Clonar repositorio

```bash
$ git clone https://github.com/ArtuKILL/task-manager.git
```

```bash
$ cd task-managerr
```

Instalar paquetes de Node.js con pnpm
```$bash
$ pnpm install
```

Cambiar el nombre del archivo `example.env` a `.env` y ajustar los valores.

```bash
$ mv example.env .env
```

```.env
APP_NAME="Task Manager"
CONTACT_EMAIL="example@email.com"
INSTAGRAM_URL="https://www.instagram.com/"
GITHUB_URL="https://github.com/"
DATABASE_URL="file:./tasks.db"
API_URL="http://localhost:3000"
```

Migrar base de datos con prisma.

```$bash
$ pnpm prisma migrate dev --name init
```

Generar el Cliente de prisma

```$bash
$  pnpm prisma generate
```

Iniciar en modo Desarrollador

```$bash
$ pnpm dev
```

Para visualizar y editar los datos de la base de datos.

```$bash
$ pnpm prisma studio
```


## Arquitectura

Este repositorio en parte esta basado en (next-hexagonal-architecture)[https://github.com/kuzeofficial/next-hexagonal-architecture] 
se buscó implentar buenas practica para la mantenibilidad del código, sin embargo, debido al tiempo no se implemento como realmente
deberia ser, el código esta acoplado en ciertas clases y hay gran margen de mejora en el diseño de la mayoría de componentes. 

## Alcance

Este projecto solo crea y visualiza tareas, no se pueden ni editar, ni borrar.

