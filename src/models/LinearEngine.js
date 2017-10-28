export default class LinearEngine {
    // infectious - procent zarazonych
    // resistant - procent odpornych (zaszczepionych)
    // susceptible - podatni
    constructor(infectious, resistant) {
        this.infectious = infectious / 100;
        this.resistant = resistant / 100;
        this.susceptible = (100 - infectious - resistant) / 100;

        this.dayCount = 150;

        this.r = 0.3; // wspolczynnik zakaznosci
        this.a = 0.1; // wspolczynnik ozdrowien
    }

    getGraphData() {
        const result = [];

        let S = this.susceptible;
        let I = this.infectious;
        let R = this.resistant;

        let deltaS, deltaI, deltaR;

        result.push({t, S, I, R});

        for (var t = 0; t < this.dayCount; ++t) {
            deltaS = -this.r * S * I;
            deltaI = this.r * S * I - this.a * I;
            deltaR = this.a * I;

            S += deltaS;
            I += deltaI;
            R += deltaR;

            result.push({t, S, I, R});
        }

        return result;
    }
}