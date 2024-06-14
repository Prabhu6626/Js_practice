let person = {
    fn: 'Vijay',
    ln: 'Bala',
    fulln: function() {
        return this.fn + '' + this.ln;
    }
};
console.log(person.fulln());