var hours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','Total: '];

var Seattle = {
    name : 'Seattle',
    minCustomers : 23,
    maxCustomers : 65,
    averageCustomers : 6.3,
    sales : [],
    getSales : function() {
        var rand = Math.random();
        var range = this.maxCustomers - this.minCustomers
        var custPerHour = this.minCustomers + Math.floor(rand * range);
        return custPerHour
    }
}
var Tokyo = {
    name : 'Tokyo',
    minCustomers : 3,
    maxCustomers : 24,
    averageCustomers : 1.2,
    sales : [],
    getSales : function() {
        var rand = Math.random();
        var range = this.maxCustomers - this.minCustomers
        var custPerHour = this.minCustomers + Math.floor(rand * range);
        return custPerHour
    }
}
var Dubai = {
    name : 'Dubai',
    minCustomers : 11,
    maxCustomers : 38,
    averageCustomers : 3.7,
    sales : [],
    getSales : function() {
        var rand = Math.random();
        var range = this.maxCustomers - this.minCustomers
        var custPerHour = this.minCustomers + Math.floor(rand * range);
        return custPerHour
    }
}
var Paris = {
    name : 'Paris',
    minCustomers : 20,
    maxCustomers : 38,
    averageCustomers : 2.3,
    sales : [],
    getSales : function() {
        var rand = Math.random();
        var range = this.maxCustomers - this.minCustomers
        var custPerHour = this.minCustomers + Math.floor(rand * range);
        return custPerHour
    }
}
var Lima = {
    name : 'Lima',
    minCustomers : 2,
    maxCustomers : 16,
    averageCustomers : 4.6,
    sales : [],
    getSales : function() {
        var rand = Math.random();
        var range = this.maxCustomers - this.minCustomers
        var custPerHour = this.minCustomers + Math.floor(rand * range);
        return custPerHour
    }
}
function getSalesData(location) {
    var total = 0;
    for (var i = 0; i < hours.length - 1; i++) {
        var numCookies = Math.ceil(location.getSales() * location.averageCustomers)
        location.sales[i] = hours[i] + numCookies + ' cookies';
        total += numCookies
    }
    location.sales[location.sales.length -1] = 'Total: ' + total;
}
function displayData(location) {
    var salesData = location.sales;
    var getDiv = document.getElementById('div1');
    var ul = document.createElement('ul');
    getDiv.appendChild(ul);
    ul.textContent = location.name;
    for (var i = 0; i < salesData.length - 1; i++) {
        var li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = location.sales[i];
    }
    ul.appendChild(li);
    li.textContent = location.sales[location.sales.length -1] + ' cookies';
}
getSalesData(Seattle);
getSalesData(Tokyo)
getSalesData(Dubai)
getSalesData(Paris)
getSalesData(Lima)

displayData(Seattle);
displayData(Tokyo)
displayData(Dubai)
displayData(Paris)
displayData(Lima)