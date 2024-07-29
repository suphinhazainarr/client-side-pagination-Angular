import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  pageToDisplay : any = [];
  pageNumber: number = 1;
  itemsPerPage: number=10;
  totalNoOfPages: number=0;
  pageNumberArray:number[]= [];
  rangeStart: number =0;
  rangeEnd: number =0;
  goToPageNumber:number=0;

  constructor(){
    this.pageToDisplay = this.products.slice((this.pageNumber-1)*this.itemsPerPage,this.pageNumber*this.itemsPerPage);
    this.totalNoOfPages = Math.ceil(this.products.length/this.itemsPerPage);

    for(let i=1 ; i<=this.totalNoOfPages;i++){
      this.pageNumberArray.push(i)
    }
    this.rangeStart = (this.pageNumber - 1) * this.itemsPerPage + 1;
    this.rangeEnd = Math.min(this.pageNumber * this.itemsPerPage, this.products.length);
  }

  refreshPage() {
    this.pageToDisplay = this.products.slice((this.pageNumber - 1) * this.itemsPerPage, this.pageNumber * this.itemsPerPage);
    this.totalNoOfPages = Math.ceil(this.products.length / this.itemsPerPage);
    
    this.pageNumberArray = [];
    for (let i = 1; i <= this.totalNoOfPages; i++) {
      this.pageNumberArray.push(i);
    }

    this.rangeStart = (this.pageNumber - 1) * this.itemsPerPage + 1;
    this.rangeEnd = Math.min(this.pageNumber * this.itemsPerPage, this.products.length);
  }
  

  goToSpecificPage(){
    if (this.goToPageNumber >= 1 && this.goToPageNumber <= this.totalNoOfPages) {
      this.pageNumber = this.goToPageNumber;
      this.refreshPage();
    }
  }


nextPage() {
  this.pageNumber = this.pageNumber + 1;
  this.pageToDisplay = this.products.slice((this.pageNumber-1)*this.itemsPerPage,this.pageNumber*this.itemsPerPage);


  this.rangeStart = (this.pageNumber - 1) * this.itemsPerPage + 1;
    this.rangeEnd = Math.min(this.pageNumber * this.itemsPerPage, this.products.length);
}
goToPage(_t26: any) {
throw new Error('Method not implemented.');
}

previousPage() {
  if(this.pageNumber>1){ this.pageNumber = this.pageNumber - 1;
    this.pageToDisplay = this.products.slice((this.pageNumber-1)*this.itemsPerPage,this.pageNumber*this.itemsPerPage);
    this.rangeStart = (this.pageNumber - 1) * this.itemsPerPage + 1;
    this.rangeEnd = Math.min(this.pageNumber * this.itemsPerPage, this.products.length);
  }
 
}

goToFirstPage(){
this.pageNumber = 1;
this.refreshPage();
}

goToLastPage(){
this.pageNumber = this.totalNoOfPages;
this.refreshPage();
}


  title = 'PaginationLearn';

























  products = [
  { id: 1, name: 'Bread', price: 2.50, expDate: '2024-08-01', mfgDate: '2024-07-01', company: 'Bakery Co' },
  { id: 2, name: 'Croissant', price: 3.00, expDate: '2024-08-03', mfgDate: '2024-07-03', company: 'Bakery Co' },
  { id: 3, name: 'Baguette', price: 1.75, expDate: '2024-08-05', mfgDate: '2024-07-05', company: 'French Bakery' },
  { id: 4, name: 'Muffin', price: 2.00, expDate: '2024-08-07', mfgDate: '2024-07-07', company: 'Sweet Treats' },
  { id: 5, name: 'Scone', price: 2.20, expDate: '2024-08-09', mfgDate: '2024-07-09', company: 'Bakery Co' },
  { id: 6, name: 'Donut', price: 1.50, expDate: '2024-08-11', mfgDate: '2024-07-11', company: 'Sweet Treats' },
  { id: 7, name: 'Bagel', price: 1.75, expDate: '2024-08-13', mfgDate: '2024-07-13', company: 'New York Bakery' },
  { id: 8, name: 'Cupcake', price: 2.75, expDate: '2024-08-15', mfgDate: '2024-07-15', company: 'Sweet Treats' },
  { id: 9, name: 'Pretzel', price: 1.80, expDate: '2024-08-17', mfgDate: '2024-07-17', company: 'German Bakery' },
  { id: 10, name: 'Cheesecake', price: 4.00, expDate: '2024-08-19', mfgDate: '2024-07-19', company: 'Bakery Co' },
  { id: 11, name: 'Brownie', price: 2.50, expDate: '2024-08-21', mfgDate: '2024-07-21', company: 'Choco Delight' },
  { id: 12, name: 'Eclair', price: 3.20, expDate: '2024-08-23', mfgDate: '2024-07-23', company: 'French Bakery' },
  { id: 13, name: 'Tart', price: 2.80, expDate: '2024-08-25', mfgDate: '2024-07-25', company: 'Sweet Treats' },
  { id: 14, name: 'Macaron', price: 3.50, expDate: '2024-08-27', mfgDate: '2024-07-27', company: 'French Bakery' },
  { id: 15, name: 'Pastry', price: 2.30, expDate: '2024-08-29', mfgDate: '2024-07-29', company: 'Bakery Co' },
  { id: 16, name: 'Pie', price: 4.50, expDate: '2024-08-31', mfgDate: '2024-07-31', company: 'Sweet Treats' },
  { id: 17, name: 'Cake', price: 5.00, expDate: '2024-09-02', mfgDate: '2024-08-02', company: 'Bakery Co' },
  { id: 18, name: 'Puff', price: 1.70, expDate: '2024-09-04', mfgDate: '2024-08-04', company: 'French Bakery' },
  { id: 19, name: 'Roll', price: 2.00, expDate: '2024-09-06', mfgDate: '2024-08-06', company: 'Bakery Co' },
  { id: 20, name: 'Danish', price: 2.80, expDate: '2024-09-08', mfgDate: '2024-08-08', company: 'Sweet Treats' },
  { id: 21, name: 'Fudge', price: 2.50, expDate: '2024-09-10', mfgDate: '2024-08-10', company: 'Choco Delight' },
  { id: 22, name: 'Marzipan', price: 3.10, expDate: '2024-09-12', mfgDate: '2024-08-12', company: 'Sweet Treats' },
  { id: 23, name: 'Gingerbread', price: 2.20, expDate: '2024-09-14', mfgDate: '2024-08-14', company: 'German Bakery' },
  { id: 24, name: 'Pudding', price: 2.90, expDate: '2024-09-16', mfgDate: '2024-08-16', company: 'Bakery Co' },
  { id: 25, name: 'Biscuit', price: 1.50, expDate: '2024-09-18', mfgDate: '2024-08-18', company: 'Sweet Treats' },
  { id: 26, name: 'Truffle', price: 3.50, expDate: '2024-09-20', mfgDate: '2024-08-20', company: 'Choco Delight' },
  { id: 27, name: 'Cupcake', price: 2.75, expDate: '2024-09-22', mfgDate: '2024-08-22', company: 'Sweet Treats' },
  { id: 28, name: 'Bun', price: 1.80, expDate: '2024-09-24', mfgDate: '2024-08-24', company: 'Bakery Co' },
  { id: 29, name: 'Lamington', price: 2.40, expDate: '2024-09-26', mfgDate: '2024-08-26', company: 'Sweet Treats' },
  { id: 30, name: 'Flan', price: 3.00, expDate: '2024-09-28', mfgDate: '2024-08-28', company: 'Bakery Co' },
  { id: 31, name: 'Clafoutis', price: 3.20, expDate: '2024-09-30', mfgDate: '2024-08-30', company: 'French Bakery' },
  { id: 32, name: 'Cannoli', price: 2.90, expDate: '2024-10-02', mfgDate: '2024-09-02', company: 'Italian Bakery' },
  { id: 33, name: 'Baklava', price: 3.10, expDate: '2024-10-04', mfgDate: '2024-09-04', company: 'Sweet Treats' },
  { id: 34, name: 'Panettone', price: 4.50, expDate: '2024-10-06', mfgDate: '2024-09-06', company: 'Italian Bakery' },
  { id: 35, name: 'Stollen', price: 4.80, expDate: '2024-10-08', mfgDate: '2024-09-08', company: 'German Bakery' },
  { id: 36, name: 'Financier', price: 2.60, expDate: '2024-10-10', mfgDate: '2024-09-10', company: 'French Bakery' },
  { id: 37, name: 'Kouign-amann', price: 3.30, expDate: '2024-10-12', mfgDate: '2024-09-12', company: 'French Bakery' },
  { id: 38, name: 'Galette', price: 2.90, expDate: '2024-10-14', mfgDate: '2024-09-14', company: 'French Bakery' },
  { id: 39, name: 'Churro', price: 1.80, expDate: '2024-10-16', mfgDate: '2024-09-16', company: 'Sweet Treats' },
  { id: 40, name: 'Zeppole', price: 2.50, expDate: '2024-10-18', mfgDate: '2024-09-18', company: 'Italian Bakery' },
  { id: 41, name: 'Sfogliatella', price: 2.70, expDate: '2024-10-20', mfgDate: '2024-09-20', company: 'Italian Bakery' },
  { id: 42, name: 'Babka', price: 3.40, expDate: '2024-10-22', mfgDate: '2024-09-22', company: 'Bakery Co' },
  { id: 43, name: 'Madeleine', price: 2.10, expDate: '2024-10-24', mfgDate: '2024-09-24', company: 'French Bakery' },
  { id: 44, name: 'Brioche', price: 3.00, expDate: '2024-10-26', mfgDate: '2024-09-26', company: 'Bakery Co' },
  { id: 45, name: 'Paczki', price: 2.20, expDate: '2024-10-28', mfgDate: '2024-09-28', company: 'Polish Bakery' },
  { id: 46, name: 'Strudel', price: 3.50, expDate: '2024-10-30', mfgDate: '2024-09-30', company: 'German Bakery' },
  { id: 47, name: 'Napoleon', price: 3.80, expDate: '2024-11-01', mfgDate: '2024-10-01', company: 'French Bakery' },
  { id: 48, name: 'Pastel de Nata', price: 2.00, expDate: '2024-11-03', mfgDate: '2024-10-03', company: 'Portuguese Bakery' },
  { id: 49, name: 'Tiramisu', price: 4.20, expDate: '2024-11-05', mfgDate: '2024-10-05', company: 'Italian Bakery' },
  { id: 50, name: 'Tart Tatin', price: 3.60, expDate: '2024-11-07', mfgDate: '2024-10-07', company: 'French Bakery' },
  { id: 51, name: 'Linzer Torte', price: 3.90, expDate: '2024-11-09', mfgDate: '2024-10-09', company: 'Austrian Bakery' },
  { id: 52, name: 'Sachertorte', price: 4.50, expDate: '2024-11-11', mfgDate: '2024-10-11', company: 'Austrian Bakery' },
  { id: 53, name: 'Kringle', price: 2.80, expDate: '2024-11-13', mfgDate: '2024-10-13', company: 'Scandinavian Bakery' },
  { id: 54, name: 'Spekkoek', price: 3.30, expDate: '2024-11-15', mfgDate: '2024-10-15', company: 'Dutch Bakery' },
  { id: 55, name: 'Krantz Cake', price: 3.70, expDate: '2024-11-17', mfgDate: '2024-10-17', company: 'Jewish Bakery' },
  { id: 56, name: 'Dobos Torte', price: 4.00, expDate: '2024-11-19', mfgDate: '2024-10-19', company: 'Hungarian Bakery' },
  { id: 57, name: 'Bienenstich', price: 3.20, expDate: '2024-11-21', mfgDate: '2024-10-21', company: 'German Bakery' },
  { id: 58, name: 'Crostata', price: 2.90, expDate: '2024-11-23', mfgDate: '2024-10-23', company: 'Italian Bakery' },
  { id: 59, name: 'Canelé', price: 2.50, expDate: '2024-11-25', mfgDate: '2024-10-25', company: 'French Bakery' },
  { id: 60, name: 'Sfoglia', price: 2.70, expDate: '2024-11-27', mfgDate: '2024-10-27', company: 'Italian Bakery' },
  { id: 61, name: 'Cassata', price: 3.40, expDate: '2024-11-29', mfgDate: '2024-10-29', company: 'Italian Bakery' },
  { id: 62, name: 'Gâteau Basque', price: 3.80, expDate: '2024-12-01', mfgDate: '2024-11-01', company: 'French Bakery' },
  { id: 63, name: 'Paris-Brest', price: 3.70, expDate: '2024-12-03', mfgDate: '2024-11-03', company: 'French Bakery' },
  { id: 64, name: 'Fraisier', price: 4.00, expDate: '2024-12-05', mfgDate: '2024-11-05', company: 'French Bakery' },
  { id: 65, name: 'Rugelach', price: 2.30, expDate: '2024-12-07', mfgDate: '2024-11-07', company: 'Jewish Bakery' },
  { id: 66, name: 'Pandoro', price: 4.50, expDate: '2024-12-09', mfgDate: '2024-11-09', company: 'Italian Bakery' },
  { id: 67, name: 'Cassava Cake', price: 2.80, expDate: '2024-12-11', mfgDate: '2024-11-11', company: 'Philippine Bakery' },
  { id: 68, name: 'Sans Rival', price: 3.90, expDate: '2024-12-13', mfgDate: '2024-11-13', company: 'Philippine Bakery' },
  { id: 69, name: 'Kue Lapis', price: 3.30, expDate: '2024-12-15', mfgDate: '2024-11-15', company: 'Indonesian Bakery' },
  { id: 70, name: 'Quindim', price: 2.20, expDate: '2024-12-17', mfgDate: '2024-11-17', company: 'Brazilian Bakery' },
  { id: 71, name: 'Brigadeiro', price: 2.50, expDate: '2024-12-19', mfgDate: '2024-11-19', company: 'Brazilian Bakery' },
  { id: 72, name: 'Pastel', price: 1.90, expDate: '2024-12-21', mfgDate: '2024-11-21', company: 'Portuguese Bakery' },
  { id: 73, name: 'Mochi', price: 2.60, expDate: '2024-12-23', mfgDate: '2024-11-23', company: 'Japanese Bakery' },
  { id: 74, name: 'Anpan', price: 2.40, expDate: '2024-12-25', mfgDate: '2024-11-25', company: 'Japanese Bakery' },
  { id: 75, name: 'Dorayaki', price: 2.70, expDate: '2024-12-27', mfgDate: '2024-11-27', company: 'Japanese Bakery' },
  { id: 76, name: 'Baumkuchen', price: 3.20, expDate: '2024-12-29', mfgDate: '2024-11-29', company: 'German Bakery' },
  { id: 77, name: 'Roti', price: 1.80, expDate: '2024-12-31', mfgDate: '2024-11-31', company: 'Indian Bakery' },
  { id: 78, name: 'Paratha', price: 2.10, expDate: '2025-01-02', mfgDate: '2024-12-02', company: 'Indian Bakery' },
  { id: 79, name: 'Naan', price: 2.50, expDate: '2025-01-04', mfgDate: '2024-12-04', company: 'Indian Bakery' },
  { id: 80, name: 'Kachori', price: 1.90, expDate: '2025-01-06', mfgDate: '2024-12-06', company: 'Indian Bakery' },
  { id: 81, name: 'Kachori', price: 1.90, expDate: '2025-01-06', mfgDate: '2024-12-06', company: 'Indian Bakery' },
  { id: 82, name: 'Pakora', price: 2.00, expDate: '2025-01-08', mfgDate: '2024-12-08', company: 'Indian Bakery' },
  { id: 83, name: 'Samosa', price: 2.20, expDate: '2025-01-10', mfgDate: '2024-12-10', company: 'Indian Bakery' },
  { id: 84, name: 'Ladoo', price: 1.80, expDate: '2025-01-12', mfgDate: '2024-12-12', company: 'Indian Bakery' },
  { id: 85, name: 'Jalebi', price: 2.50, expDate: '2025-01-14', mfgDate: '2024-12-14', company: 'Indian Bakery' },
  { id: 86, name: 'Gulab Jamun', price: 2.80, expDate: '2025-01-16', mfgDate: '2024-12-16', company: 'Indian Bakery' },
  { id: 87, name: 'Rasgulla', price: 2.60, expDate: '2025-01-18', mfgDate: '2024-12-18', company: 'Indian Bakery' },
  { id: 88, name: 'Barfi', price: 3.00, expDate: '2025-01-20', mfgDate: '2024-12-20', company: 'Indian Bakery' },
  { id: 89, name: 'Ras Malai', price: 3.20, expDate: '2025-01-22', mfgDate: '2024-12-22', company: 'Indian Bakery' },
  { id: 90, name: 'Chenna Poda', price: 3.30, expDate: '2025-01-24', mfgDate: '2024-12-24', company: 'Indian Bakery' },
  { id: 91, name: 'Chebureki', price: 2.40, expDate: '2025-01-26', mfgDate: '2024-12-26', company: 'Eastern Bakery' },
  { id: 92, name: 'Pirozhki', price: 2.60, expDate: '2025-01-28', mfgDate: '2024-12-28', company: 'Eastern Bakery' },
  { id: 93, name: 'Kibbeh', price: 2.80, expDate: '2025-01-30', mfgDate: '2024-12-30', company: 'Middle Eastern Bakery' },
  { id: 94, name: 'Baklava', price: 3.50, expDate: '2025-02-01', mfgDate: '2025-01-01', company: 'Middle Eastern Bakery' },
  { id: 95, name: 'Mahaleb Cake', price: 3.70, expDate: '2025-02-03', mfgDate: '2025-01-03', company: 'Middle Eastern Bakery' },
  { id: 96, name: 'Knafeh', price: 3.90, expDate: '2025-02-05', mfgDate: '2025-01-05', company: 'Middle Eastern Bakery' },
  { id: 97, name: 'Mahaleb Bread', price: 2.50, expDate: '2025-02-07', mfgDate: '2025-01-07', company: 'Middle Eastern Bakery' },
  { id: 98, name: 'Riz au Lait', price: 2.80, expDate: '2025-02-09', mfgDate: '2025-01-09', company: 'French Bakery' },
  { id: 99, name: 'Clafoutis', price: 3.00, expDate: '2025-02-11', mfgDate: '2025-01-11', company: 'French Bakery' },
  { id: 100, name: 'Macaron', price: 3.50, expDate: '2025-02-13', mfgDate: '2025-01-13', company: 'French Bakery' }
]
 




  


}
