import { CanActivateFn } from '@angular/router';

export const detailsLivreGuard: CanActivateFn = (route, state) => {
  // se connecter backend
  // on va verifier le profil
  // si le profil a le droit on return true 
  // sinon on retourne false (il ne pourra pas accéder, plus tard on pourra masquer les éléments dont le profil n'a pas le droit d'y accéder)
  return true;
};
