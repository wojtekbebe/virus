export default class LinearEngine {
    // infectious - procent zarazonych
    // resistant - procent odpornych (zaszczepionych)
    // susceptible - podatni
    constructor(infectious, resistant) {
        this.infectious = infectious / 100;
        this.resistant = resistant / 100;
        this.susceptible = (100 - infectious - resistant) / 100;

        this.step = 0.01;
        this.stepsCount = 99;

        this.r = 0.1; // wspolczynnik zakaznosci
        this.a = 0.1; // wspolczynnik ozdrowien
    }

    setParams(params) {
        this.step = params.step || this.step;
    }

    getGraphData() {
        let t = 0.0;
        const result = [];

        let S = this.susceptible;
        let I = this.infectious;
        let R = this.resistant;

        let deltaS, deltaI, deltaR;

        result.push({ t, S, I, R });

        for (var i = 0; i < this.stepsCount; ++i) {
            deltaS = -this.r * S * I;
            deltaI = this.r * S * I - this.a * I;
            deltaR = this.a * I;

            S += deltaS;
            I += deltaI;
            R += deltaR;

            result.push({ t, S, I, R });

            t += this.step;
        }

        return result;
    }
}