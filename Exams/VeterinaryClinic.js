class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.capacity === this.clients.length) {
            throw new Error('Sorry, we are not able to accept more patients!');
        }

        let owner = this.clients.find(x => x.owner === ownerName);

        if (!owner) {
            owner = {
                owner: ownerName,
                pets: []
            };

            this.clients.push(owner);
        }

        let pet = owner.pets.find(x => x.name === petName);

        if (!pet) {
            pet = {
                name: petName,
                kind,
                procedures
            };

            if (procedures.length > 0) {
                this.currentWorkload++;
            }

            pet.procedures.concat(procedures);

            owner.pets.push(pet);

            return `Welcome ${petName}!`;
        }

        if (pet.procedures.length > 0) {
            throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${pet.procedures.join(', ')}.`);
        }

        pet.procedures.concat(procedures);

        return `Welcome ${petName}!`;
    }

    onLeaving(ownerName, petName) {
        let client = this.clients.find(x => x.owner === ownerName);

        if (!client) {
            throw new Error('Sorry, there is no such client!');
        }

        let pet = client.pets.find(x => x.name === petName);

        if (!pet || pet.procedures.length === 0) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }

        this.currentWorkload--;
        this.totalProfit += pet.procedures.length * 500;
        pet.procedures = [];

        return `Goodbye ${petName}. Stay safe!`
    }

    toString() {
        let result = [];

        result.push(`${this.clinicName} is ${Math.floor(this.currentWorkload / this.capacity * 100)}% busy today!`);
        result.push(`Total profit: ${this.totalProfit.toFixed(2)}$`);

        let owners = this.clients.sort((a, b) => a.owner.localeCompare(b.owner));

        for (let owner of owners) {
            result.push(`${owner.owner} with:`);

            let pets = owner.pets.sort((a, b) => a.name.localeCompare(b.name));

            for (let pet of pets) {
                result.push(`---${pet.name} - a ${pet.kind.toLowerCase()} that needs: ${pet.procedures.join(', ')}`);
            }
        }

        return result.join('\n');
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());
