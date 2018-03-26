export class AccountService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

getAccounts(){
    return this.accounts;
}
setStatus(id:number, status: string){
    this.accounts[id].status = status;
}

addAccount(name: string, status: string){
    this.accounts.push({name: name, status: status})
}
}