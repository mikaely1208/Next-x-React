# Next x React
Semaine du 02 Janvier au 05 Janvier

## Initiation au React

React est une bibliothèque JS qui permet de créer facilement des interfaces utilisateurs. Elle est maintenue par Facebook et une communauté de développeurs indépendants.

Le react est un langage qui permet de créer des composants. Ces composants sont des blocs de code qui permettent de créer des interfaces utilisateurs. Ils sont réutilisables et peuvent être imbriqués les uns dans les autres.
### Installation

```
npm create vite@latest my-react-app --template react

cd my-react-app

npm install

npm run dev ou npm start
```
On a ici utilisé Vite, un outil de build rapide pour les applications web modernes. Il permet de créer des applications React, Vue, Preact et LitElement en utilisant les dernières fonctionnalités JavaScript.

### Les bases

#### Le JSX

Le JSX est une syntaxe qui permet d'écrire du HTML dans du JavaScript. C'est une extension de la syntaxe JavaScript. Elle permet de créer des composants facilement et de les imbriquer les uns dans les autres.

```
function NomDuComposant() {
  return (
    <div>
      <h1>Mon composant</h1>
    </div>
  );
}
```

### Les composants

Les composants sont des blocs de code qui permettent de créer des interfaces utilisateurs. Ils sont réutilisables et peuvent être imbriqués les uns dans les autres. Ils sont composés de deux parties : le code HTML et le code JavaScript.

Pour créer un composant, il faut utiliser la syntaxe suivante :

```
function NomDuComposant() {
  return (
    <div>
      <h1>Mon composant</h1>
    </div>
  );
}
```

Pour l'utiliser dans le code, il faut utiliser la syntaxe suivante :

```
<NomDuComposant />
```

### Les props
Les props sont des paramètres que l'on peut passer à un composant. Ils permettent de personnaliser le composant. Pour les utiliser, il faut les passer en paramètres de la fonction du composant.

```
function NomDuComposant(props) {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
}
```

Pour l'utiliser dans le code, il faut utiliser la syntaxe suivante :

```
<NomDuComposant text="Mon titre" />
```

### Les states
Les states sont des variables qui peuvent être utilisées dans un composant. Ils permettent de stocker des informations qui peuvent changer au cours du temps. Pour les utiliser, il faut les déclarer à l'aide de la fonction useState.

```
function NomDuComposant() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Ajouter +1</button>
    </div>
  );
}
```

### Les hooks
Les hooks sont des fonctions qui permettent d'ajouter des fonctionnalités à un composant. Il existe plusieurs hooks différents :

- **useState** : permet de gérer les states
- **useEffect** : permet d'exécuter une fonction à chaque fois qu'un composant est monté, mis à jour ou démonté
- **useRef** : permet de récupérer une référence sur un élément HTML
- **useMemo** : permet de stocker le résultat d'une fonction dans une variable
- **useCallback** : permet de stocker une fonction dans une variable
- **useContext** : permet d'utiliser un contexte
- **useReducer** : permet de gérer les states comme avec Redux

### Les événements
Les événements sont des actions qui peuvent être déclenchées par l'utilisateur. Ils permettent d'interagir avec l'interface utilisateur. Pour les utiliser, il faut les passer en paramètres de la fonction du composant.

```
function NomDuComposant() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Ajouter +1</button>
    </div>
  );
}
```

## Le Next.js

Next.js est un framework React qui permet de créer des applications web. Il est maintenu par Vercel et une communauté de développeurs indépendants.

### Installation

```
npx create-next-app my-next-app

cd my-next-app

npm run dev ou npm start
```

### Les bases

#### Les pages

Les pages sont des composants React qui permettent de créer des routes. Elles sont composées de deux parties : le code HTML et le code JavaScript.

Pour créer une page, il faut créer un fichier dans le dossier pages. Le nom du fichier correspond au nom de la route.

```
function NomDeLaPage() {
  return (
    <div>
      <h1>Ma page</h1>
    </div>
  );
}

export default NomDeLaPage;
```

Pour l'utiliser dans le code, il faut utiliser la syntaxe suivante :

```
<Link href="/nom-de-la-page">
  <a>Ma page</a>
</Link>
```

#### Les composants

Les composants sont des blocs de code qui permettent de créer des interfaces utilisateurs. Ils sont réutilisables et peuvent être imbriqués les uns dans les autres. Ils sont composés de deux parties : le code HTML et le code JavaScript.
Pour créer un composant, il faut créer un fichier dans le dossier components. Le nom du fichier correspond au nom du composant.

```
function NomDuComposant() {
  return (
    <div>
      <h1>Mon composant</h1>
    </div>
  );
}

export default NomDuComposant;
```

Pour l'utiliser dans le code, il faut utiliser la syntaxe suivante :

```
<NomDuComposant />
```

#### Les props

Les props sont des paramètres que l'on peut passer à un composant. Ils permettent de personnaliser le composant. Pour les utiliser, il faut les passer en paramètres de la fonction du composant.

```
function NomDuComposant(props) {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
}

export default NomDuComposant;
```

Pour l'utiliser dans le code, il faut utiliser la syntaxe suivante :

```
<NomDuComposant text="Mon titre" />
```

#### Les states

Les states sont des variables qui peuvent être utilisées dans un composant. Ils permettent de stocker des informations qui peuvent changer au cours du temps. Pour les utiliser, il faut les déclarer à l'aide de la fonction useState.

```
function NomDuComposant() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Ajouter +1</button>
    </div>
  );
}

export default NomDuComposant;
```

#### Le routing dynamique

Le routing dynamique permet de créer des routes dynamiques. Il est composé de deux parties : le code HTML et le code JavaScript.

Pour créer une route dynamique, il faut créer un fichier dans le dossier pages. Le nom du fichier correspond au nom de la route. Il faut ajouter des crochets dans le nom du fichier pour indiquer que c'est une route dynamique.

Vocabulaire du systeme rooting de Next.js :

- Tree (arbre): Un arbre est une structure de données qui représente une hiérarchie. Dans Next.js, les pages sont organisées dans un arbre. L'arborecence des pages correspond à l'arborecence des routes.

- Root: Une route est une URL qui permet d'accéder à une page. Dans Next.js, les routes sont générées automatiquement à partir des fichiers dans le dossier pages. La racine du site correspond à la page index.js.

- Subtree (sous-arbre): Un sous-arbre est un arbre qui est contenu dans un autre arbre. Dans Next.js, les sous-arbres sont générés automatiquement à partir des fichiers dans les dossiers pages et leurs sous-dossiers.

- Leaf (feuille): Une feuille est un élément qui n'a pas de sous-arbre. Dans Next.js, les feuilles sont les fichiers dans le dossier pages.

La présence du dossier pages est obligatoire en next.js. Si on supprime ce dossier, le site ne fonctionnera plus.

Par défaut, tous les composants se situes dans le dossier app, ce sont des React Server Components. 

En résumé :
- Les dossiers permettent de définir les routes
- Les fichiers permettent de définir les composants

 Il existe tout un système de nomenclature des fichiers et de conventions afin d'assurer le bon fonctionnement du router:
 - layout: permet de définir une UI commune à plusieurs pages
 - page: l'UI qui correspond à une route unique
 - loading: la page de chargement commune à un segment et ses sous-routes
 - error: UI en cas d'erreur
 - notFound: UI en cas de page non trouvée

 #### Navigation entre les pages

 Il existe deux façons de naviguer entre les pages : 

  - en utilisant la balise Link :
  
  ```
  <Link href="/nom-de-la-page">
    <a>Ma page</a>
  </Link>
  ```
  - le hook useRouter :

  ```
  import { useRouter } from "next/router";

  function NomDuComposant() {
    const router = useRouter();

    return (
      <div>
        <h1>Ma page</h1>
        <button onClick={() => router.push("/nom-de-la-page")}>
          Aller à la page
        </button>
      </div>
    );
  }

  export default NomDuComposant;
  ```

Il existe également un hook très utile qui permet de vérifier le chemin actuel de l'application : usePathname

```
import { usePathname } from "next/router";

function NomDuComposant() {
  const pathname = usePathname();

  return (
    <div>
      <h1>{pathname}</h1>
    </div>
  );
} 

export default NomDuComposant;
```

#### Grouper les routes

Dans le dossier app, les dossiers correspondent normalement à des routes. Cependant, on peut empêcher ce fonctionnement en plaçant le nom du dossier entre crochets. Par exemple, si on veut que le dossier blog ne soit pas une route, il faut le renommer en (blog). 

On pourra ainsi organiser les portions de route de façon loghique sans impacter l'url.

Il faut faire attention à ce que deux fichiers page situés dans des dossiers différents ne soient pas accessibles par la même route. Si c'est le cas, il faut renommer les dossiers pour éviter les conflits.


#### Le catch-all optionnel

Le catch-all optionnel peut etre rendu optionnel en ajoutant des parenthèses à la fin du nom du fichier. Cela permet de créer des routes comme /shop et /shop/1 avec un seul fichier.

```
export default function Page({params}: {params: {id: string}}) {
  return <div>Current user ID: {params.id}</div>;
}

```

#### La gestion des chargements

On peut créer une interface utilisateur de chargement pour les routes dynamiques en créant un fichier _loading.tsx dans le dossier app. Ce fichier sera utilisé pour toutes les routes dynamiques.

Ce système fonctionne avec React Suspense: https://react.dev/reference/react/Suspense

```
export default function Loading() {
  return <LoadingSkeleton />;
}
```

#### La gestion des erreurs

On peut créer une interface utilisateur d'erreur pour les routes dynamiques en créant un fichier _error.tsx dans le dossier app. Ce fichier sera utilisé pour toutes les routes dynamiques.
