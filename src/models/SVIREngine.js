// SVIR model implementation based on:
// http://izt.ciens.ucv.ve/ecologia/Archivos/ECO_POB%202008/ECOPO6_2008/Liu%20y%20col_II%202008.pdf
export default class SVIRLinearEngine {
    constructor(params) {
        this.infectious  = params.infectious / 100.0; //infectious / 100;
        this.resistant   = params.resistant / 100.0; //resistant / 100;
        this.vaccinated  = params.vaccinated / 100.0; //vaccinated;
        this.susceptible = params.susceptible / 100.0; //(100 - infectious - resistant) / 100;

        this.daysCount = params.daysCount;

        this.a = params.a;   // jaka cześć ludzi jest z każdym krokiem przenoszona do procesu szczepienia
        this.y1 = params.y1; // jaka część ludzi zaszczepionych w każdym kroku przenoszona jest do odpornych (bez różnicy czy naturalnie czy nie)
        this.b1 = params.b1; // jaka częsć ludzi zaszczepionych w kaðym kroku wciąż będzie zarażana ( powinno być w oczywsity sposób o rząd wielkości mniejsze od b)
        this.u = params.u;   // śmiertelność / dzietność w każdym kroku
        this.b = params.b;   // jaka część podatnych ludzi zostanie zarażona w każdym kroku
        this.y = params.y;   // jaka część ludzi chorych w każdym kroku przenoszona jest do ludzi zdrowych i odpornych
    }

    getGraphData() {
        const result = [];

        let S = this.susceptible;
        let V = this.vaccinated;
        let I = this.infectious;
        let R = this.resistant;

        let deltaS, deltaV, deltaI, deltaR;

        const { a, y, y1, b, b1, u } = this;

        // result.push({
        //     t: 0, S, I, R, V,
        //     Sp: S*100,
        //     Ip: I*100,
        //     Rp: R*100,
        //     Vp: V*100,
        // });

        for (var t = 1; t < this.daysCount; ++t) {
            deltaS = u - u*S - b*S*I - a*S;
            deltaV = a*S - b1*V*I - y1*V - u*V;
            deltaI = b*S*I + b1*V*I - y*I - u*I;
            deltaR = y1*V + y*I - u*R;

            S += deltaS;
            V += deltaV;
            I += deltaI;
            R += deltaR;

            result.push({
                t, S, I, R, V,
                Sp: S*100,
                Ip: I*100,
                Rp: R*100,
                Vp: V*100,
            });
        }

        return result;
    }
}