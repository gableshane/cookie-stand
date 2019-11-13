var hours = ['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM','7:00PM', 'Daily Location Total'];
var stores = [];
var grabContainer = document.getElementById('container');
// standalone function to create table header
function createHeaderRow() {
    var headerRow = addElement('tr', grabContainer);
    addElement('th', headerRow);
    for (var i = 0; i < hours.length; i++) {
        addElement('th', headerRow, hours[i]);
    }
}
// standalone function to create table footer
function createFooterRow() {
    addElement('td', grabContainer, 'Total');
    for (i = 0; i < hours.length - 1; i++) {
        addElement('td', grabContainer, getTotalsForFooter(i));
    }
    addElement('td', grabContainer, getGrandTotal());
}
// get totals for footer
function getTotalsForFooter(hour) {
    var totalForHour = 0;
    for (var i = 0; i < stores.length; i++) {
        totalForHour = totalForHour + stores[i].sales[hour];
    }
    return totalForHour;
}
// get grand total
function getGrandTotal() {
    var grandTotal = 0;
    for (var i = 0; i < stores.length; i++) {
        grandTotal = grandTotal + stores[i].totalSales;
    }
    return grandTotal;
}
// pulled from lab example: Credit JB - However, I did type it wrong and had to debug for 20 minutes.
function addElement(tag, container, text) {
    var element = document.createElement(tag);
    container.appendChild(element);
    element.textContent = text;
    return element;
}

// pulled from lab example: Credit JB
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Store(storeName, minCustomers, maxCustomers, averageCustomers) {
    this.storeName = storeName;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.averageCustomers = averageCustomers;
    this.sales = this.getSalesData();
    this.totalSales = this.getTotalSales();
    this.render = this.render();
}
Store.prototype.getSalesData = function () {
    var salesArr = [];
    for (var i = 0; i < hours.length -1; i++) {
        salesArr.push(Math.ceil(randomInRange(this.minCustomers, this.maxCustomers) * this.averageCustomers));
    }
    return salesArr;
}
Store.prototype.render = function () {
    var newRow = addElement('tr', grabContainer,);
    addElement('td', newRow, this.storeName);
    for (i = 0; i < this.sales.length; i++) {
        addElement('td', newRow, this.sales[i]);
    }
    addElement('td', newRow, this.totalSales);
}
Store.prototype.getTotalSales = function () {
    var totalSales = 0;
    for (i = 0; i < this.sales.length; i++) {
        totalSales = totalSales + this.sales[i];
    }
    return totalSales;
}


createHeaderRow();
stores.push(new Store('Seattle', 23, 65, 6.3));
stores.push(new Store('Tokyo', 3, 24, 1.2));
stores.push(new Store('Dubai', 11, 38, 3.7));
stores.push(new Store('Paris', 20, 38, 2.3));
stores.push(new Store('Lima', 2, 16, 4.6));
createFooterRow();