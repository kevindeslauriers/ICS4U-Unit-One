const companies = [{
   name: "Company One",
   category: "Finance",
   start: 1981,
   end: 2004
},
{
   name: "Company Two",
   category: "Retail",
   start: 1992,
   end: 2008
},
{
   name: "Company Three",
   category: "Auto",
   start: 1999,
   end: 2007
},
{
   name: "Company Four",
   category: "Retail",
   start: 1989,
   end: 2010
},
{
   name: "Company Five",
   category: "Technology",
   start: 2009,
   end: 2014
},
{
   name: "Company Six",
   category: "Finance",
   start: 1987,
   end: 2010
},
{
   name: "Company Seven",
   category: "Auto",
   start: 1986,
   end: 1996
},
{
   name: "Company Eight",
   category: "Technology",
   start: 2011,
   end: 2016
},
{
   name: "Company Nine",
   category: "Retail",
   start: 1981,
   end: 1989
}
];

const btn = document.querySelector('button');


function createTable() {
   const tbody = document.querySelector('tbody');


   companies.forEach(r => {
      const row = document.createElement('tr');
      tbody.appendChild(row);
      for (let key in r) {
         const cell = document.createElement('td');
         cell.textContent = r[key];
         row.appendChild(cell);
      }

   });
}
btn.addEventListener('click', createTable);