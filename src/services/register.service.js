import axios from 'axios';

export const registerService = {
	async getStates() {
		const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
		if (response.data) return response.data.map(state => state.sigla).sort();
	},
    async getCities(state) {
        const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/distritos`);
        if (response.data) return response.data.map(city => city.nome).sort();
    }
};

// let installed = false;

// const install = Vue => {
// 	if (installed) return;

// 	Object.defineProperties(Vue.prototype, {
// 		$registerService: {
// 			get() {
// 				return registerService;
// 			}
// 		}
// 	});

// 	installed = true;
// };

// export default { install };
