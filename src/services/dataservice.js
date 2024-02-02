let catalog = [

    {
        "title":"astronaut1",
        "category":"red flag",
        "price": 20.00,
        "image":"_866d7798-2ef7-4fbe-b5bf-780a168a50f5.jpg",
        "_id": "1",

    },
    {
        "title":"astronaut2",
        "category":"summit",
        "price": 25.00,
        "image":"_2d4cfcb1-85f3-4ac7-95ae-c2e74173f1a0.jpg",
        "_id": "2",

    },
    {
        "title":"astronaut3",
        "category":"desert",
        "price": 30.00,
        "image":"_59198a4e-310c-478a-8ecb-9fc0a91bb32c.jpg",
        "_id": "3",

    },
    {
        "title":"astronaut4",
        "category":"discover",
        "price": 35.00,
        "image":"_ae9e9525-ab48-47f0-81e8-21167682dcbd.jpg",
        "_id": "4",

    },
    {
        "title":"astronaut5",
        "category":"adventure",
        "price": 40.00,
        "image":"_e5f0eb8d-855e-4e29-8134-26696065cf97.jpg",
        "_id": "5",

    },

];

//component is DataService
class DataService {
    getProducts(){
        return catalog
    }
}

export default DataService;