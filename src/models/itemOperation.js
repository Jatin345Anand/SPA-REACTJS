import Mobile from './item';
const MobileOperation = {
    MobileLIST: [],
    MobileLISTStorage: [],
    MobileLISTforCart: [],
    MobileLISTforDelete: [],
    ADD: function (mobile) {
        this.MobileLIST.push(mobile);
    },
    PrepareItemforMystorage: function (mobiles) {
        console.log(mobiles.length);
        for (var i = 0; i < mobiles.length; i++) {
            var obj = new Mobile(mobiles[i].id, mobiles[i].name, mobiles[i].price, mobiles[i].url, mobiles[i].mark, mobiles[i].like);
            this.MobileLISTStorage.push(obj);
        }
    },
    GetItemforStorage: function () {
        return this.MobileLISTStorage;
    },
    AddtoMark: function (id) {
        var list1 = this.MobileLIST.filter((m) => m.id == id);
        list1.forEach((m) => m.isADD = true);
        return this.MobileLIST;
    },
    SEARCH: function (id) {
        return this.MobileLIST.filter((m) => m.id == id)[0];
    },
    GETDELETELIST: function () {
        return this.MobileLISTforDelete;
    },
    CreateObjItem: function (Id, Name, Price, Url) {
        var IO = new Mobile(Id, Name, Price, Url, false, 0);
        return IO;
    },
    PrepareItem: function (mobiles) {
        console.log(mobiles.length);
        for (var i = 0; i < mobiles.length; i++) {
            var obj = new Mobile(mobiles[i].id, mobiles[i].name, mobiles[i].price, mobiles[i].url, mobiles[i].mark, mobiles[i].like);

            this.MobileLIST.push(obj);
            console.log(i + 1);
        }
    },
    ADDTOCART: function (m) {
        this.MobileLISTforCart.push(m);
        console.log("Added cart is " + this.MobileLISTforCart.length + "  " + m.name);
        return this.MobileLISTforCart;
    },
    GetItem: function () {
        return this.MobileLIST;
    },
    UPDATELIKE: function (mobile) {
        //  console.log(mobile);
        mobile.incrementlike();
    },
    DELETE: function (LIST) {
        var unMarkedMobiles;
        unMarkedMobiles = LIST.filter((m) => m.isADD == false);
        return unMarkedMobiles;
    }
}
export default MobileOperation;