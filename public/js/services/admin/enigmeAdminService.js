class enigmeAdminService {

    constructor($http) {
        this.$http = $http;
    }

    create(data1, data2, data3) {
        return this.$http.post('/api/enigmes', {
            nom_enigme: data1,
            description_enigme: data2,
            picture:data3,
        });
    }

    getAll() {
        return this.$http.get('/api/enigmes');
    }

    getOne(id) {
        return this.$http.get('/api/enigmes/' + id);
    }

    update(id, data1, data2, data3) {
        return this.$http.put('/api/enigmes/' + id, {
            nom_enigme: data1,
            description_enigme: data2,
            picture:data3,
        });
    }

    delete(id) {
        return this.$http.delete('/api/enigmes/' + id);
    }

}
