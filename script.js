const freelancers = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
  { name: "Carol", price: 70, occupation: "programmer" },
];

const names = ["Alicia", "Jun", "Loaf"];
const occupations = ["programmer", "gamer", "singer"];

const body = document.querySelector('body');
body.style.fontFamily = 'Arial, sans-serif';
body.style.textAlign = 'center';

const title = document.createElement('h1');
title.textContent = 'Freelancer Forum';
body.append(title);

const averagePriceDiv = document.createElement('div');
averagePriceDiv.textContent = 'The average starting price is $0.00.';
body.append(averagePriceDiv);

const tableTitle = document.createElement('h2');
tableTitle.textContent = 'Available Freelancers';
body.append(tableTitle);

const table = document.createElement('table');
table.style.margin = '0 auto';
table.style.width = '50%';

const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = ['Name', 'Occupation', 'Starting Price'];

headers.forEach(headerText => {
  const th = document.createElement('th');
  th.textContent = headerText;
  headerRow.append(th);
});

thead.append(headerRow);
table.append(thead);

const tbody = document.createElement('tbody');
tbody.id = 'freelancer-list';
table.append(tbody);
body.append(table);

function render() {
  tbody.innerHTML = '';
  freelancers.forEach(freelancer => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.price}</td>
    `;
    tbody.append(row);
  });
}

function averagePrice() {
  const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
  const average = total / freelancers.length;
  averagePriceDiv.textContent = `The average starting price is $${average.toFixed(2)}.`;
}

function addFreelancer() {
  const newFreelancer = {
    name: names[Math.floor(Math.random() * names.length)],
    price: Math.floor(Math.random() * 100) + 1,
    occupation: occupations[Math.floor(Math.random() * occupations.length)]
  };
  freelancers.push(newFreelancer);
  render();
  averagePrice();
}

render();
averagePrice();

setInterval(addFreelancer, 5000);
