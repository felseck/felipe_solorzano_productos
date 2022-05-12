## instrucciones de instalacion

### 1.-Clonar el repositorio.

### 2.- Crear una base de datos

### 3.- Modificar el archivo .env las siguientes lineas, el app url y la base de datos
     
#### APP_URL=http://localhost:8000

#### DB_CONNECTION=mysql
#### DB_HOST=127.0.0.1
#### DB_PORT=3306
#### DB_DATABASE=gila_software
#### DB_USERNAME=root
#### DB_PASSWORD=

### 4.- Ejecutar: composer install
### 5.- Ejecutar: npm install
### 6.- Ejecutar: php artisan migrate
### 7.- Ejecutar: php artisan db:seed --class=DatabaseSeeder
### 9.- Ejecutar: php artisan serve

### 10.- Ingresar a la http://127.0.0.1:8000/


## ############ compilar react

### npm run dev   
## o
### npm run watch   