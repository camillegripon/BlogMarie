# Description du projet BlogMarie

Ce projet sert à m'exercer à coder un site de type "Blog" tout en donnant à l'artiste Marie Dufaye une visibilité sur internet en dehors d'Instagram.

## Techonoliges utilisées

- React
- Vite
- CSS

## Démarrer le projet

Vous devez avoir npm d'installé et d'une clé SSH relié à github.

1. Cloner le dépôt :
```bash
git clone https://github.com/camillegripon/BlogMarie.git
```

2. Accéder au répertoire
```bash
cd BlogMarie
```

3. Installer les dépendances
```bash
npm i
```

4. Lancer le serveur en local
```bash
npm run dev
```

## Changer les oeuvres / Rajouter des oeuvres

1. Se déplacer dans le fichier Oeuvres.jsx

2. Ajoutez une nouvelle image en suivant ce format
```bash
<div className="containerImg" data-description="Description de l'image">
    <img src="/assets/image/example.jpg" alt="example"/>
</div>
```

3. Sauvegarder le fichier
4. Push les modifications avec 
```bash
git add .
git commit -m "Changement des oeuvres + date"
git push
```
5. Admirer les changements !