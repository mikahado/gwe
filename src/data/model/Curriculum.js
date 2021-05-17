export class Curriculum{

    constructor(sessionArray) {

        function parseMaterialId( materialData ){

            if (materialData.sessionInfo.ofParts > 1 ){
                return `${ materialData.sessionInfo.sessionId }${ String.fromCharCode(materialData.sessionInfo.partNo + 96)}`
            } else {
                return materialData.sessionInfo.sessionId;
            }
        }

        function calcCurricPercent(materialData){

            let sessionInfo = materialData.sessionInfo;
            let partNo = parseFloat(sessionInfo.partNo);
            let sessionInt = parseFloat(sessionInfo.sessionId);

            if (partNo > 1){
                let totalParts = parseFloat(sessionInfo.ofParts);

                let fraction = (partNo / totalParts) * 0.5;

                return parseFloat(sessionInt + fraction);
            } else {
                return sessionInt;
            }
        }

        this.sessions = sessionArray;

        for (let i = 0; i < this.sessions.length; i++){

            if (!this.sessions[i].sessionInfo){
                this.sessions[i].sessionInfo = {};
            }
            this.sessions[i].sessionInfo.sessionId = i + 1;

            this.sessions[i].material.forEach( material =>{

                material.sessionInfo.sessionId = i + 1;
                material.sessionInfo.materialId = parseMaterialId( material );
                material.sessionInfo.curricPercent = calcCurricPercent( material );

            })
        }

    }
}