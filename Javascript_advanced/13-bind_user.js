const user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Johns',
    location: 'Netherlands',
    occupation: 'Engineer',
    logWelcomeUser: function(welcomeString){
        console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
        bindLogWelcomeUser
    }
}
const functionWelcomUser = user.logWelcomeUser;
const bindLogWelcomeUser = functionWelcomUser.bind(user);
bindLogWelcomeUser('Hello');
