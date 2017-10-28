export default class SVIRLinearEngine {
    // infectious - procent zarazonych
    // resistant - procent odpornych (zaszczepionych)
    // susceptible - podatni
    constructor(params) {
        this.infectious = (params.infectious || 5) / 100.0; //infectious / 100;
        this.resistant = (params.resistant || 0) / 100.0; //resistant / 100;
        this.vaccinated = (params.vaccinated || 0) / 100.0; //vaccinated;
        this.susceptible = (params.susceptible || 95) / 100.0; //(100 - infectious - resistant) / 100;

        this.daysCount = params.daysCount || 30;

        this.a = params.a || 0;   // jaka cześć ludzi jest z każdym krokiem przenoszona do procesu szczepienia
        this.y1 = params.y1 || 0.5;  // jaka część ludzi zaszczepionych w każdym kroku przenoszona jest do odpornych (bez różnicy czy naturalnie czy nie)
        this.b1 = params.b1 || 0.2;  // jaka częsć ludzi zaszczepionych w kaðym kroku wciąż będzie zarażana ( powinno być w oczywsity sposób o rząd wielkości mniejsze od b)
        this.u = params.u || 0;   // śmiertelność / dzietność w każdym kroku
        this.b = params.b || 0.9;   // jaka część podatnych ludzi zostanie zarażona w każdym kroku
        this.y = params.y || 0.15;   // jaka część ludzi chorych w każdym kroku przenoszona jest do ludzi zdrowych i odpornych
    }

    getGraphData() {
        const result = [];

        let S = this.susceptible;
        let V = this.vaccinated;
        let I = this.infectious;
        let R = this.resistant;

        let deltaS, deltaV, deltaI, deltaR;

        const { a, y, y1, b, b1, u } = this;

        result.push({t: 0, S, I, R, V});

        for (var t = 0; t < this.daysCount; ++t) {
            deltaS = u - u*S - b*S*I - a*S;
            deltaV = a*S - b1*V*I - y1*V - u*V;
            deltaI = b*S*I + b1*V*I - y*I - u*I;
            deltaR = y1*V + y*I - u*R;

            S += deltaS;
            V += deltaV;
            I += deltaI;
            R += deltaR;

            result.push({ t, S, I, R, V });
        }

        return result;
    }
}