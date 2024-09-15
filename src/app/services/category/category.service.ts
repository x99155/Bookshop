import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getAllCategory(): string[] {
    return ['Big data', 'Database', 'Front-End', 'Back-End'];
  }
}
