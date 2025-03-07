import airline from './assets/airline.png';
import bowling from './assets/bowling.gif';
import cards from './assets/cards.gif';
import ems from './assets/ems.png';
import form from './assets/form.png';
import hmes from './assets/hmes.png';

const projects = [
    {
      name: "Play Cards API's",
      description: "This application will have APIs which will allow us to add deck of cards to the existing collection, shuffle them, create piles, draw card from a pile and adding pile back to the collection. Using this APIs one can easily create a frontend for any card game available.", 
      image: cards,
      link: "https://github.com/Anish111-hue/PlayCardsAPI"
    },
    {
      name: "Bowling Game API's",
      description: "This application has API to create game limited for only 2 players. And it also has APIs to play frame for each player and get Game Details and also Player Details. These APIs can be used to create the Bowling online Game by only creating Frontend and getting score code and implementing in it.", 
      image: bowling,
      link: "https://github.com/Anish111-hue/Bowling-Game-API"
    },
    {
      name: "Employee Management System",
      description: "This application allows only Admins to log in or sign up into the portal. once the admin logs in to the portal, he can manage and maintain all Employee information in the firm. The application uses Entity Framework to connect to SQL Server and manage data ", 
      image: ems,
      link: "https://github.com/Anish111-hue/Employee_Management-System"
    },
    {
      name: "Airline Management System",
      description: " Enabled users to seamlessly book flights through an intuitive interface built using HTML, CSS, and JavaScript. The application leverages MongoDB for reliable and scalable data Storage, Uses flask framework. ", 
      image: airline,
      link: "https://github.com/Anish111-hue/Airline-Management-System"
    },
    {
      name: "Hand Written Equation Solver",
      description: "Our Users can write equations on a canvas or upload images, which are converted to a computer-readable format using Convolutional Neural Networks (CNNs). The application solves the extracted equations and promptly displays the results for the user. ", 
      image: hmes,
      link: "https://github.com/Anish111-hue/Hand_Written_Math_Equation_Solver"
    },
    {
      name: "Smart Job Application Autofill",
      description: "Developed a Chrome extension using JavaScript that automates job application form filling. Users can enter their details once, and the extension automatically detects and fills relevant fields on job portals and career websites, streamlining the application process and saving time.", 
      image: form,
      link: "https://github.com/Anish111-hue/AutoFillExtension"
    }
];

export {projects};