/**
 * Collègue utilisateur de l'application.
 */
export class Collegue {
    constructor(
      public id?: number,
      public nom?: string,
      public prenom?: string,
      public email?: string,
      public roles?: string[]) {}
}
