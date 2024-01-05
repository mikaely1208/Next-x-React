# Document de réponse de l'examen Next/React

**1** - *Quel est le but du hook useState dans React ? Donnez un exemple de son utilisation dans un composant fonctionnel.*

-> Le hook useState permet de créer un état local dans un composant fonctionnel. Il permet de modifier l'état de ce composant sans avoir à le recharger. Il permet de modifier l'état d'un composant fonctionnel sans avoir à le transformer en commposant de classe. 
Exemple : 

```
import React, { useState } from 'react';  // il faut importer le hook usestate

const ExempleExamState = () => {
  const [count, setCount] = useState(0); // decla de l'état local count et la fonction setCount pour modifier son état
  return (
    <div>
      <p>Vous avez cliqué {count} fois</p> // affichage de l'état de mon count en local
      <button onClick={() => setCount(count + 1)}> // je crée un bouton qui va modifier l'état de mon count avec un setCount
        j'ai cliqué pour l'exam 
      </button>
    </div>
  );
}
```

**2** - *Décrivez comment le hook useEffect est utilisé dans les composants fonctionnels React. Quels sont ses cas d'utilisation courants ?*

-> Le hook useEffect permet de faire des actions qui ont un impact en dehors d'une fonction. Il permet de faire des requêtes asynchrones, modifier le DOM, modifier l'état d'un composant, etc. Il prend deux arguments, une fonction et un tableau de dépendances. La fonction est appelée à chaque fois que le composant est rechargé. Les cas d'utilisation courants sont par exemple les requêtes asynchrones, les appels d'API, des modifications du DOM ou de l'état d'un component. 
Exemple : 

```
import React, { useEffect, useState } from 'react'; // j'importe encore le hook useEffect

function ExempleExamEffect() {
  const [data, setData] = useState([]); // je crée un état local data et une fonction setData pour modifier son état

  useEffect(() => { // je crée un effet qui va être exécuté à chaque fois que le composant est rechargé
    fetch('https://jefaisunexempleavecapi.com') // je fais une requête asynchrone
      .then(data => setData(data)) // je modifie l'état de mon data avec la fonction setData
  }, []); // je mets un tableau vide pour que l'effet ne soit exécuté qu'une seule fois
  return (
    <div>
        <p>La data de l'exam : {data}</p> // j'affiche mon data
    </div>
  );
}
```


**3** - *Expliquez l'API Contexte dans React et son cas d'utilisation principal. Comment implémenteriez-vous un contexte de thème pour les modes sombre et clair dans une application ?*

-> L'API Contexte me permet de passer des données à travers l'arbre de mes composants sans avoir besoin dde passer les props à la main à chaque fois. Le contexte est utilisé pour des données qui sont utilisées dans beaucoup de composants différents. </br>
Exemple :
    
    ```
    import React, { createContext } from 'react'; // j'importe le createContext

    const ThemeContextExam = createContext('light'); // je crée un contexte avec une valeur par défaut

    export default ThemeContext; // j'exporte mon contexte pour l'utiliser dans mes autres composants

    ```
Dans mon autre fichier je vais pouvoir utiliser mon contexte comme ça : 

    ```
    import React, { useContext } from 'react'; // j'importe le useContext

    import ThemeContext from './ThemeContext'; // j'importe mon contexte

    function ExempleExamContext() {
        const theme = useContext(ThemeContext); // je crée une constante theme qui va utiliser mon contexte
        return (
            <div>
                <p>Le thème de l'exam : {theme}</p> // j'affiche mon thème
            </div>
        );
    }
    ```


**4** - *À quoi servent les hooks useMemo et useCallback dans React ? Donnez un exemple où leur utilisation serait bénéfique.*

-> Le hook useMemo permet de mémoriser une valeur calculée. Ça nous evite de recalculer la valeur à chaque fois qu'on recharge le composant. Un peu différent, le hook useCallback permet de mémoriser lui une fonction. Il permet de ne pas recréer la fonction à chaque fois qu'on recharge le composant. 
Exemple : 

```
import React, { useMemo } from 'react'; // j'importe le useMemo

function ExempleExamMemo() {
  const a = 5; // je crée deux constantes
  const b = 10;

  const ValueMemoExam = useMemo(() => computeGrosseValue(a, b), [a, b]);

  return <p>La valeur mémorisée de l'exam : {memoizedValue}</p>;
}
```

```
import React, { useState, useCallback } from 'react'; // j'importe le useCallback

function CounterExamCB() { 
  const [count, setCount] = useState(0); 

  const increment = useCallback(() => { // je crée une constante qui va utiliser le useCallback pour mémoriser une fonction
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <>
      <ButtonExamCB increment={increment} /> // j'utilise ma fonction mémorisée
      <CountExamCB count={count} />
    </>
  );
}
```

**5** - *Expliquez comment Next.js gère le routage. Quelle est la différence entre les routes statiques et dynamiques dans Next.js ?*

-> Next.js gère le routage en utilisant un système de fichiers (surprenant) basé sur les pages. Chaque fichier JS ou TS dans le répertoire "pages" correspond à une route dans l'application. Les routes statiques dans sont les routes dont le contenu est fait au début de l'application et qui ne change pas par la suite. Quand on accède à une route statique, le contenu est pré-généré et renvoyé au client, ce qui permet d'obtenir des performances élevées et une meilleure UX. Les routes dynamiques quant à elle,  sont des routes dont le contenu est généré à la demande, en fonction des paramètres de l'URL. Par exemple, on peut avoir une route dynamique pour afficher les détails d'un produit en utilisant l'ID du produit dans l'URL. Quand on accède à une route dynamique, le contenu est généré à sur le moment et renvoyé au client.
En résumé, on utilise les routes statiques pour les pages qui ne changent pas et les routes dynamiques pour les pages qui changent en fonction des paramètres de l'URL. Par la suite, pour faire des leins entre les pages, on utilise la balise Link (qui est un composant React qui permet de faire des liens entre les pages) et on utilise la propriété href pour indiquer la route vers laquelle on veut aller.

Exemple route statique :
```
// pages/about.js

function ExamStatique() {
  return <h1> Page test</h1>;
}

export default ExamStatique;
```

Exemple route dynamique :
```
// pages/posts/[id].js

import { useRouter } from 'next/router';

function ExamDynamique() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
}
``` 

**6** - *Expliquez l'objectif du composant Image dans Next.js. Pourquoi est-il préféré à la balise HTML img standard ?*

-> L'objectif du composant Image dans next est d'optimiser le chargement des images. Il permet de charger les images de manière optimisée (donc plus vite) et les afficher de manière responsive.
Par rapport à la balise html, il offre une optimisation automatique (il compresse par exemple les images et la mise dans le cache pour aller plus vite), le chargement progressif (il charge d'abord une image de faible qualité et ensuite il charge l'image de haute qualité), la gestion de la taille de l'image (il permet de définir la taille de l'image et de la redimensionner automatiquement) et aussi la prise en charge de l'accessibilité (il permet de définir un texte alt pour les images).
Pour résumer, le composant Image de Next.js est préféré à la balise HTML img standard car il offre des fonctionnalités avancées d'optimisation du chargement des images, de gestion de la taille d'image et de prise en charge de l'accessibilité, ce qui améliore les performances et l'expérience utilisateur globale.

Exemple : 

```
import Image from 'next/image'

function ExempleImageExam() {
  return (
    <Image
      src="/images/peuimporte.jpg"
      height={144}
      width={144}
      alt="Mon image pour l'exemple de l'examen"
    />
  )
}
```



**7** - *Écrivez un exemple de code pour une route API Next.js qui gère les erreurs et renvoie des réponses appropriées au client*

Voici un exemple : 

```
// pages/api/exam.js

export default function examerror(req, res) {
  if (req.method !== 'GET') { // je vérifie que la méthode est bien GET
    res.status(405).json({ message: 'Non non mauvaise méthode' }); // si ce n'est pas le cas, je renvoie une erreur 405
  } else {
    try {
      const data = { message: 'Oui ça marche' }; // si c'est le cas, je renvoie un message
      res.status(200).json(data); // je renvoie une réponse 200 
    } catch (error) { // si j'ai une erreur, je renvoie une erreur 500
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' }); 
    }
  }
}
```

**8** - *Dans un composant Next.js, comment appliqueriez-vous des styles CSS de manière conditionnelle en fonction de l'état du composant ou de certaines props ? Donnez un exemple concret en utilisant les modules css ou tailwind.*

-> Pour le module CSS, on crée un fichier exam.module.css. Dedans on définie les styles conditionnels. Ensuite, dans notre composant, on importe le fichier CSS et on utilise la syntaxe suivante : className={styles.ClassExam}. On peut ensuite utiliser cette classe dans notre composant.</br>
Exemple : 

```
// exam.module.css
import styles from './exam.module.css';

function ComposantExam({ isActive }) {
  return (
    <div className={`${styles.container} ${isActive ? styles.active : ''}`}>
      //Contenu du composant 
    </div>
  );
}
```
-> Pour Tailwind, on installe d'abord Tailwind dans notre projet. Ensuite, on crée un fichier tailwind.config.js. Dedans, on définit les styles conditionnels. Ensuite, dans notre composant, on utilise la syntaxe suivante : className={isActive ? 'bg-blue-500' : 'bg-red-500'}. On peut ensuite utiliser cette classe dans notre composant.</br>
Exemple : 

```
// ComposantExam.js
import React from 'react';

function ComposantExamTailwd({ isActive }) {
  return (
    <div className={`bg-blue-500 ${isActive ? 'text-white' : 'text-black'}`}>
      // Contenu du composant 
    </div>
  );
}

export default ComposantExam;
```


**9** - *Comment Vercel facilite-t-il la gestion des environnements de prévisualisation (preview environments) pour les applications Next.js ? Expliquez comment vous pourriez utiliser cette fonctionnalité pour améliorer le workflow de développement et de test.*

-> Vercel facilite cela en créant automatiquement des environnements de prévisualisation pour chaque pull request. Ce permet de prévisualiser et de tester les modifications avant de les fusionner dans la branche principale, ce qui améiore ainsi le workflow de développement et de test. 
Pour cela, il faut : 
- Configurer votre projet Next.js sur Vercel en liant votre référentiel Git.
- Activer l'option de création automatique d'environnements de prévisualisation pour les pull requests.
- Quand on crée une nouvelle branche et on ouvre une pull request, Vercel va créer automatiquement un environnement de prévisualisation pour cette branche.
- On peut tester les fonctionnalités et les modifications dans l'environnement de prévisualisation pour nous assurer qu'elles fonctionnent correctement.
- Une fois qu'on est satisfait des modifications, on peut fusionner la pull request dans la branche principale.
- Vercel déploiera automatiquement les modifications dans l'environnement de production.

-> En utilisant cette fonctionnalité, on peut donc bénéficier d'un processus de développement et de test plus fluide, en nous assurant que les modifications sont correctes avant de les déployer dans l'environnement de production.


**10** *Imaginez que vous développez une plateforme e-commerce en utilisant Next.js, qui inclut une page de recherche de produits. Cette page doit permettre aux utilisateurs de filtrer les produits par catégories, prix, et notations. Cependant, tous les filtres ne sont pas obligatoires. Un utilisateur peut vouloir rechercher des produits uniquement par catégorie, uniquement par prix, par une combinaison des deux, ou avec tous les filtres appliqués. Comment structureriez-vous les routes pour cette page  ? Quels seraient les avantages de cette approche par rapport à une gestion plus traditionnelle des paramètres de requête ?*

-> Pour structurer les routes pour cette page de recherche de produits avec des filtres optionnels, j'utiliserais des paramètres de requête dynamiques : 

- Je créerais une route principale pour la page de recherche des produits, par exemple "/produitss".
- J'ajouterais des paramètres de requête pour chaque filtre possible, comme que "categorei", "prix", et "notes". Par exemple, la route pourrait ressembler à "/produits?categorie=ordinateurs&prix=1000&notes=4".
- Dans mon code, je récupèrerais les valeurs des paramètres de requête pour chaque filtre et les utiliserais pour faire la bonne recherche  dans ma base de données.
- Ensuite, j'afficherais les résultats de la recherche sur la page.
- Si un utilisateur ne veut pas utiliser un filtre, il peut simplement ne pas l'inclure dans l'URL. Par exemple, s'il ne veut pas filtrer par prix, il peut utiliser l'URL "/produits?categorie=ordinateurs&notes=4".

-> Les avantages de cette approche par rapport à une gestion plus traditionnelle des paramètres de requête sont :

- la flexibilité : Les utilisateurs peuvent choisir les filtres qu'ils veulent appliquer et ne sont pas limités à une combinaison spécifique de filtres.
- la lisibilité des urls : Les urls avec des paramètres de requête sont généralement plus lisibles et compréhensibles pour les utilisateurs que des urls avec des segments de chemin complqués.
- la facilité de manipulation des filtres : En utilisant des paramètres de requête, il est plus facile de manipuler et de modifier les filtres à partir de l'interface utilisateur, parce que je n'ai pas besoin de modifier l'url à chaque fois.
