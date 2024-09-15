/**
 Dans Angular, le modèle (ou model) est une représentation des données que tu manipules dans ton application. 
 Il doit correspondre à la structure des données qui viennent du backend, un peu comme une entité dans un 
 contexte de base de données.

 Si, par exemple, tu récupères des livres depuis une API, le modèle Angular doit avoir les mêmes propriétés 
 que les objets retournés par cette API pour pouvoir les gérer efficacement dans ton application.
 */

// Je retourne les données suivante de mon entité dans mon api
export interface IExample {
    id: number,
    name: string,
}