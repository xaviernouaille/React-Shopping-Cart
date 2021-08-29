# React Shopping Cart

Une boutique avec un panier réalisée avec React, TypeScript, Firebase et TailwindCSS 

## Screenshots

![Screenshot 2021-06-22 at 15-53-41 Shop](https://user-images.githubusercontent.com/68466322/122937283-237c1900-d372-11eb-955b-3bef9905e302.png)
![Screenshot 2021-06-22 at 15-53-53 Shop](https://user-images.githubusercontent.com/68466322/122937285-2414af80-d372-11eb-9239-a6fc262174b6.png)
![Screenshot 2021-06-22 at 15-54-10 Shop](https://user-images.githubusercontent.com/68466322/122937292-2545dc80-d372-11eb-894b-0ca0e17ddb70.png)

## Utilisation

- Creez un projet firebase, créez un .env à la raçine du projet et remplissez les informations fourni par firebase. Le BASEURL est optionnel.
- Dans le fichier situé sous src/components/Articles.tsx se trouve un morceau de code commenté qui vous permettera, une fois décommenté, de creer automatiquement un faux produit à chaque rafraichissement sur la route /articles . Votre base de donnée firestore contiendra alors plusieurs produits qui pourront être visionner sur la page Articles.tsx, qui pourront être visionné en détail, puis ajouté au panier.

### .env

Ces informations sont relatives à la configuration de Firebase.

        REACT_APP_APIKEY=
        REACT_APP_AUTHDOMAIN=
        REACT_APP_PROJECTID=
        REACT_APP_STORAGEBUCKET=
        REACT_APP_MESSAGINGSENDID=
        REACT_APP_APPID=
        REACT_APP_BASEURL=

### Commandes

    "start": "PORT=3007 craco start & npm run prettier-format",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject",
    "prettier-format": "prettier --config .prettierrc src/**/*.tsx src/**/**/*.ts src/*.tsx --write"
    
## Dépendances
  
    "@craco/craco": "^6.1.2",
    "@heroicons/react": "^1.0.1",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "@types/jest": "^26.0.15",
    "@types/node": "^12.0.0",
    "@types/react-dom": "^17.0.0",
    "@types/react-redux": "^7.1.16",
    "@types/react-router-dom": "^5.1.7",
    "@types/redux": "^3.6.0",
    "dotenv": "^8.2.0",
    "firebase": "^8.6.5",
    "prettier": "^2.3.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.0",
    "typescript": "^4.1.2",
    "web-vitals": "^1.0.1"
