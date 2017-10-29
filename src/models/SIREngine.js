export default class LinearEngine {
    // infectious - procent zarazonych
    // resistant - procent odpornych (zaszczepionych)
    // susceptible - podatni
    constructor(infectious, resistant, vaccinated, r, a) {
        this.infectious = infectious / 100;
        this.resistant = resistant / 100;
        this.vaccinated = 0;
        this.susceptible = (100 - infectious - resistant) / 100;

        this.dayCount = 20;

        this.r = r; // wspolczynnik zakaznosci
        this.a = a; // wspolczynnik ozdrowien
    }

    getGraphData() {
        const result = [];

        let S = this.susceptible;
        let I = this.infectious;
        let R = this.resistant;
        let V = this.vaccinated;

        let deltaS, deltaI, deltaR;

        result.push({t: 0, S, I, R, V});

        for (var t = 0; t < this.dayCount; ++t) {
            deltaS = -this.r * S * I;
            deltaI =  this.r * S * I - this.a * I;
            deltaR =  this.a * I;

            S += deltaS;
            I += deltaI;
            R += deltaR;

            result.push({t, S, I, R, V});
        }

        return result;
    }
}