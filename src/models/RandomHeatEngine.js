import SVIRLinearEngine from "./SVIREngine";

const WIDTH = 470;
const HEIGHT = 460;

// generuje losowe dane do sprawdzeni czy w ogole heatmapa dziala
export default class RandomHeatEngine {
    constructor(params) {
        this.linearEngine = new SVIRLinearEngine(params)

        this.data = this.linearEngine.getGraphData();
    }


    getHeatData(t) {
        // ugly - TODO: refactor
        try {
            const I = this.data[t].I;

            let result = [];
            for (var x = 50; x <= WIDTH; x += 30) {
                for (var y = 50; y <= HEIGHT; y += 30) {
                    result.push({
                        x,
                        y,
                        value: I*3*Math.random(), // 3 is arbitrary indicator
                    });
                }
            }

            return result;
        }
        catch(e) {

        }

        return [];
    }
}