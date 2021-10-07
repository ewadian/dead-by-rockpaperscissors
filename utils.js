export function didUserWin(userChoice, actualChoice){
    if (userChoice === actualChoice) {
        return 'standoff';
    } else if (userChoice === 'pig' && actualChoice === 'meg') {
        return 'escaped';
    } else if (userChoice === 'meg' && actualChoice === 'flashlight') {
        return 'escaped';  
    } else if (userChoice === 'flashlight' && actualChoice === 'pig') {
        return 'escaped';
    } else if (userChoice === 'meg' && actualChoice === 'pig'){
        return 'sacrificed';
    } else if (userChoice === 'pig' && actualChoice === 'flashlight'){
        return 'sacrificed';
    } else if (userChoice === 'flashlight' && actualChoice === 'meg'){
        return 'sacrificed';
    }
}

export function getRandomMove(){
    return ['meg', 'pig', 'flashlight'][Math.floor(Math.random() * 3)];
}
