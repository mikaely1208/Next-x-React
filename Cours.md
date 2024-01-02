# Next x React
Semaine du 02 Janvier au 05 Janvier

## Initiation au React

React est une bibliothèque JS qui permet de créer facilement des interfaces utilisateurs. Elle est maintenue par Facebook et une communauté de développeurs indépendants.

Le react est un langage qui permet de créer des composants. Ces composants sont des blocs de code qui permettent de créer des interfaces utilisateurs. Ils sont réutilisables et peuvent être imbriqués les uns dans les autres.
## Installation

```
npm create vite@latest my-react-app --template react

cd my-react-app

npm install

npm run dev ou npm start
```
On a ici utilisé Vite, un outil de build rapide pour les applications web modernes. Il permet de créer des applications React, Vue, Preact et LitElement en utilisant les dernières fonctionnalités JavaScript.

## Les bases

### Le JSX

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

## Les composants

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

## Les props
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

## Les states
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

## Les hooks
Les hooks sont des fonctions qui permettent d'ajouter des fonctionnalités à un composant. Il existe plusieurs hooks différents :

- **useState** : permet de gérer les states
- **useEffect** : permet d'exécuter une fonction à chaque fois qu'un composant est monté, mis à jour ou démonté
- **useRef** : permet de récupérer une référence sur un élément HTML
- **useMemo** : permet de stocker le résultat d'une fonction dans une variable
- **useCallback** : permet de stocker une fonction dans une variable
- **useContext** : permet d'utiliser un contexte
- **useReducer** : permet de gérer les states comme avec Redux

## Les événements
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

