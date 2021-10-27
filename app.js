// Init Github
const github = new Github
// init UI
const ui = new UI;

const search = document.getElementById('searchUser')

search.addEventListener('keyup', (e) => {
    const input = e.target.value   

    if(input !== ''){
        // Make http call
        github.getUser(input)
            .then(data => {
                if(data.profile.message === "Not Found"){
                    //show alert
                    ui.showAlert('User not found', 'alert alert-danger')
                } else {
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        //clear profile
        ui.clearProfile();
    }
})