class enigmeUsersService {

    constructor($http) {
        this.$http = $http;
    }

    getAll() {
        return this.$http.get('/api/enigmes');
    }

}
