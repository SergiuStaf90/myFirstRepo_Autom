class BankAccount {
    balance;

    deposit(amount: number) {
        if (amount > 0 && amount <= 10000) {
            this.balance = this.balance + amount;
        }
        else {
            console.log("Invalid amount " + amount );

        }
    }

    showBalance() {
        console.log(this.balance);
    }

    constructor(initialBalance: number) {

        this.balance = initialBalance;

    }

}



const sergiu = new BankAccount(1);
sergiu.deposit(-1);


// const john = new BankAccount();
// sergiu.balance = 100;
// john.balance = 50;
// sergiu.deposit(100);
// john.deposit(50);
// console.log(sergiu.balance);
// console.log(john.balance);

sergiu.showBalance();

