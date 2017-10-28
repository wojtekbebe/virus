export default class LinearEngine {
    // infectious - procent zarazonych
    // resistant - procent odpornych (zaszczepionych)
    // susceptible - podatni
    constructor(infectious, resistant) {
        this.susceptible = 1 - infectious - resistant;
        this.infectious = infectious / 100;
        this.resistant = resistant / 100;

        this.step = 0.01;
        this.finish = 10;

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

        while (t <= 1) {
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