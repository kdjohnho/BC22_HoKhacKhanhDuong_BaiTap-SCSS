new WOW().init();

var service = new Service();

document.querySelector(".loadingText").style.display = "none";

// Call API
function getMembersAPI() {
	//show loading
	document.querySelector(".loadingText").style.display = "block";

	service
		.fetchData()
		.then(function (result) {
			document.querySelector(".loadingText").style.display = "none";

			renderMembers(result.data);
		})
		.catch(function (error) {
			console.log(error);
			document.querySelector(".loadingText").querySelector("p").innerHTML =
				"An error occurred! Please come back later";
		});
}

function renderMembers(list) {
	var content = "";
	for (var i = 0; i < list.length; i++) {
		// Only render user: "Teacher"
		if (list[i].user === "Teacher") {
			content += `   
         <div class="col-lg-3 col-sm-6 col-12">
               <div class="card member__card animate__animated animate__fadeIn">
                  <div class="member__img">
                     <img class="card-img-top" src="./image/${list[i].avatar}" alt="" />
                  </div>
                  <div class="card-body text-center">
                     <h1 class="member__language">${list[i].language}</h6>
                     <h1 class="card-title member__name">${list[i].fullname}</h1>
                     <p class="card-text member__info">${list[i].about}</p>
                  </div>
               </div>
         </div>
         `;
		}
	}

	document.getElementById("memberList").innerHTML = content;
}

getMembersAPI();
