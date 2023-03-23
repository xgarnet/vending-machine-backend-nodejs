
export class Deposit {
    deposit: number = 0;

    getDeposit() {
        return this.deposit;
    }

    add(coin: number ) {
        this.deposit = this.deposit + coin;
    }

    reset() {
        this.deposit = 0;
    }
}