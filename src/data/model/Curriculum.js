export class Curriculum{

    constructor(sessionArray) {

        this.sessions = sessionArray;

        for (let i = 0; i < this.sessions.length; i++){

            if (!this.sessions[i].sessionInfo){
                this.sessions[i].sessionInfo = {};
            }
            this.sessions[i].sessionInfo.sessionId = i + 1;

            this.sessions[i].material.forEach( material =>{
                material.sessionInfo.sessionId = i + 1;
            })
        }

    }
}