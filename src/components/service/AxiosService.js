import axios from 'axios'

let axiosService = {
	getList: function(payload) {
		return new Promise((resolve, reject) => {
            const url = '/hv/list/' + payload.cnt;

            axios.get(url)
                .then(response => {
                    resolve(response.data.list);
                })
                .catch(err => reject(err));
        });
	},

};

export default axiosService;