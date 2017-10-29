import SVIRLinearEngine from "./SVIREngine";

const WIDTH = 470;
const HEIGHT = 460;

export default class RandomHeatEngine {
    // infectious - procent zarazonych
    // resistant - procent odpornych (zaszczepionych)
    // susceptible - podatni
    constructor(params) {
        this.linearEngine = new SVIRLinearEngine(params)

        this.data = this.linearEngine.getGraphData();
    }


    getHeatData(t) {
        try {
            const I = this.data[t].I;

            let result = [];
            for (var x = 50; x <= WIDTH; x += 30) {
                for (var y = 50; y <= HEIGHT; y += 30) {
                    result.push({
                        x,
                        y,
                        value: I*Math.random(),
                    });
                }
            }

            return result;
        }
        catch(e) {

        }

        console.log('empty result');
        return [];


    }
}