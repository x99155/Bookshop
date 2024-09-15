/**
 * Angular met à disposition un backend inMemory afin de simuler un envoronnement de travail fullstack
 * 
 * Nous avons d'abord installer la bibliotheque inMemory web-api qui permet de générer un backend fictif
 * 
 * 
 */

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ilivres } from '../models/livre.model';

export class InMemHeroService implements InMemoryDbService {
  createDb() {
    let livres: Ilivres[] = [
        {
            id: 1,
            name: "Big Data For Dummies",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51p6wBow%2B3L._SX389_BO1,204,203,200_.jpg",
            shortDescription: "Big data management is one of the major challenges facing business, industry, and not-for-profit organizations",
            price: 98,
            category: "Big data",
            stars: 3
        },
        {
            id: 2,
            name: "Big Data",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41JjodHnKHL._SX331_BO1,204,203,200_.jpg",
            shortDescription: "Bernard Marr’s Data Strategy is a must-have guide to creating a robust data strategy",
            price: 120,
            category: "Big data",
            stars: 3.5
        },
        {
            id: 3,
            name: "Database Engineering",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51UvR3a63OL._SX379_BO1,204,203,200_.jpg",
            shortDescription: "This book has been an evolving dream of ours for about five years. Laine came to the DBA role without any formal technical training.",
            price: 66,
            category: "Database",
            stars: 5
        },
        {
            id: 4,
            name: "Data-Intensive",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51gP9mXEqWL._SX379_BO1,204,203,200_.jpg",
            shortDescription: "The Big Ideas Behind Reliable, Scalable, and Maintainable Systems",
            price: 66,
            category: "Database",
            stars: 4.2
        },
        {
            id: 5,
            name: "Angular",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51gP9mXEqWL._SX379_BO1,204,203,200_.jpg",
            shortDescription: "The Big Ideas Behind Reliable, Scalable, and Maintainable Systems",
            price: 66,
            category: "Front-End",
            stars: 3.1
        },
        {
            id: 6,
            name: "Learning React",
            imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/51Q43WRXJzL.jpg",
            shortDescription: "Developed by Facebook, and used by companies including Netflix, Walmart, and The New York Times for large parts of their web interfaces",
            price: 89,
            category: "Front-End",
            stars: 4.5
        },
        {
            id: 7,
            name: "Pro C# 7",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/413Z89zzezL._SX348_BO1,204,203,200_.jpg",
            shortDescription: "Dive in and discover why Pro C# has been a favorite of C# developers worldwide for over 15 years",
            price: 55.60,
            category: "Back-End",
            stars: 2.6
        },
        {
            id: 8,
            name: "Learning Node.js",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41NGBmeH1uL._SX403_BO1,204,203,200_.jpg",
            shortDescription: "Learning Node.js Development: Learn the fundamentals of Node.js, and deploy and test Node.js applications on the web",
            price: 98,
            category: "Back-End",
            stars: 4.6
        }
    ];
    return {livres};
  }
}





