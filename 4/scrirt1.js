let distance = prompt("Введите расстояние доставки в км:");
let weight = prompt("Введите вес груза в кг:");
let cargoType = prompt("Введите тип груза (обычный, хрупкий, опасный) :");
let transportType = prompt(
    "Введите тип транспорта (легковый автомобиль, грузовик, самолет):"
);
let basePrice;
if (distance <= 50) {
    basePrice = 500;
} else if (distance > 50 && distance <= 100) {
    basePrice = 1000;
} else {
    basePrice = 1500;
}
let weighPrice = 0;
if (weight > 10) {
    weighPrice = 500;
}
let cargoPrice = 0
switch (cargoType) {
    case "обычный":
        cargoPrice = 0;
        break;
    case "хрупкий":
        cargoPrice = 1000;
        break;
    case "опасный":
        cargoPrice = 2000;
        break;
    default:
        console.log("Неверно указан тип груза");
}
let transportPrice = 0;
switch (transportType) {
    case "легковой автомобиль":
        transportPrice = 500;
        break;
    case "Грузовик":
        transportPrice = 1500;
        break;
    case "самолет":
        transportPrice = 5000;
        break;
    default:
        console.log("Неверно указан тип транспорта");
}
let totalCost = transportPrice + weighPrice + cargoPrice + basePrice
alert(`Стоимость доставки: ${totalCost} руб.`);
