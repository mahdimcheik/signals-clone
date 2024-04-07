# Tentative de simuler les _signals_

## Signal (State)

Un signal est un composant généré par JavaScript. Les changements appliqués sur ce composant seront affichés dans le DOM sans le besoin d'actualiser la page , ni le composant parent. Ce composant est représenté par une classe qui contient deux propriétés :

### Propriétés

- `value` : une valeur de type _any_
- `element` : Un élément du DOM de type custom _my-signal_

### Méthodes

- `render` : sert à actualiser le rendu
- `subscribe` : sert à ajouter un autre signal (compute signal) dans la liste des abonnés. Ces abonnés seront avertis à chaque fois que le signal change de valeur. En fait, les fonctions de rappel liées aux signaux souscrits seront invoquées.
- `setValue` : responsable du changement de la valeur de la propriété `value`, et de l'exécution de toutes les fonctions de rappel des _Computed signals_ associés.

## Computed Signals (computed State)

Ceux-ci sont des signaux dépendant d'un ou plusieurs _signals_. Leurs dépendances doivent être indiquées explicitement dans le tableau de dépendances lors de l'instanciation.

### Propriétés

- `value`: fonction qui retourne une valeur qui sera affichée dans le DOM.
- `element` : Un élément du DOM de type custom _my-signal_

### Méthodes

- `render` : sert à actualiser le rendu tout en exécutant la fonction `value` qui recalcule la valeur à afficher dans le DOM en fonction des valeurs actuelles de ses dépendances.

```js
if (this.dependencies.length) {
  this.dependencies.forEach((dependency) =>
    dependency.subscribe(this.render.bind(this))
  );
}
```
