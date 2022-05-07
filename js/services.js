function Service() {
	this.fetchData = function () {
		return axios({
			url: "https://6264dc0294374a2c506a8f4e.mockapi.io/api/members",
			method: "GET",
		});
	};
}
