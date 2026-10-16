import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильники' },
            { id: 2, name: 'Смартфоны' },
            { id: 3, name: 'Ноутбуки' },
            { id: 4, name: 'Телевизоры' },
        ];

        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'Lenovo' },
            { id: 4, name: 'Asus' },
        ];

        this._devices = [
            {
                id: 1,
                name: 'iPhone 18 pro max',
                price: 250000,
                rating: 5,
                img: 'https://cdn.mtscdn.ru/upload/iblock/1b5/iphone_18_pro_black_NEW.png/resize/1688x732/',
            },
            {
                id: 2,
                name: 'iPhone 18 pro max',
                price: 250000,
                rating: 5,
                img: 'https://cdn.mtscdn.ru/upload/iblock/2f5/iphone_18_pro_max_burgundy-4_2_Photoroom.png/resize/1688x732/',
            },
            {
                id: 3,
                name: 'iPhone 18 pro max',
                price: 250000,
                rating: 5,
                img: 'https://cdn.mtscdn.ru/upload/iblock/b24/iphone_18_pro_max_glacier-4_2_Photoroom.png/resize/1688x732/',
            },
            {
                id: 4,
                name: 'iPhone 18 pro max',
                price: 250000,
                rating: 5,
                img: 'https://cdn.mtscdn.ru/upload/iblock/cb1/iphone_18_pro_max_silver-4_Photoroom.png/resize/1688x732/',
            },
            {
                id: 5,
                name: 'iPhone 18 pro max',
                price: 250000,
                rating: 5,
                img: 'https://cdn.mtscdn.ru/upload/iblock/1b5/iphone_18_pro_black_NEW.png/resize/1688x732/',
            },
            {
                id: 6,
                name: 'iPhone 18 pro max',
                price: 250000,
                rating: 5,
                img: 'https://cdn.mtscdn.ru/upload/iblock/1b5/iphone_18_pro_black_NEW.png/resize/1688x732/',
            },
        ];
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
}
