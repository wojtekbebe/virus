import LinearEngine from './LinearEngine';

const WIDTH = 600;
const HEIGHT = 200;

export default class RandomHeatEngine {
    // infectious - procent zarazonych
    // resistant - procent odpornych (zaszczepionych)
    // susceptible - podatni
    constructor(infectious, resistant, vaccinated, r, a) {
        this.linearEngine = new LinearEngine(infectious, resistant, vaccinated, r, a);

        this.infectious = infectious / 100;
        this.resistant = resistant / 100;
        this.susceptible = (100 - infectious - resistant - vaccinated) / 100;

        this.dayCount = 20;

        this.r = r; // wspolczynnik zakaznosci
        this.a = a; // wspolczynnik ozdrowien
    }


    getHeatData(t) {
        let result = [];
        for (var x = 0; x <= WIDTH; x += 30) {
            for (var y = 0; y <= HEIGHT; y += 30) {
                result.push({
                    x,
                    y,
                    value: Math.random(),
                });
            }
        }

        return result;
    }
}