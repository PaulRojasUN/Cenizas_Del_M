# CENIZAS DEL MAÑANA

Para crear un ambiente de desarrollo de la aplicación, realizar los siguientes pasos.

Clonar repositorio desde su rama develop
```
mkdir visual_novel
cd visual_novel
git clone https://github.com/Carlosher007/Cenizas_Del_M.git -b develop .
```

Añadir archivo de configuración de firebase (firebase.config.js) en el directorio src/ de la 
aplicación con las correspondientes llaves

Instalar dependencias de npm
```
npm install
```

Una vez hecho lo anterior, puede correr un servidor de desarrollo con:
```
npm run dev
```