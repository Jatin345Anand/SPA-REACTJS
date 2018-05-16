class Mobile{
    constructor(id,name,price,url,mark,like){
        this.id=id;
        this.name=name;
        this.price=price; 
        this.url=url;
        this.mark=false;
        this.like=0;
    }

    toggle(){
      
        this.mark=!this.mark;
        console.log(`toggled....${this.mark}`);
      }
    incrementlike(){
        this.like++;
    }
}
function creteMobileJson(){
    var m1=new Mobile("200001","Samsung15.6'OdysseyNotebook","143000","https://www.google.co.in/search?q=Samsung+15.6%22+Odyssey+Notebook&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiD0ZyE-_3ZAhXLQo8KHWNZAD0Q_AUICigB&biw=1600&bih=745#imgrc=lcJsL0WiKriX9M:");
    var m2=new Mobile("200002","lenevoy520","92000","https://www.google.co.in/search?q=lenovo+legion+y520&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj1nrKD-v3ZAhWHNo8KHXUaDf4Q_AUICygC&biw=1600&bih=745#imgrc=7satO_UPSij92M:");
    var m3=new Mobile("200003","SurfacePro","76000","https://www.google.co.in/search?q=surface+pro+4&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjr_93R-f3ZAhXEs48KHal8CZoQ_AUICygC&biw=1600&bih=745#imgrc=gauL34jjhJIHBM:");
    var m4=new Mobile("200004","AsusZenbook","78000","https://www.google.co.in/search?q=asus+zenbook+ux305&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjt1ZPH-P3ZAhUDuo8KHcHwA60Q_AUICigB&biw=1600&bih=745#imgrc=b8cCfeiuSIPMlM:");
    var m5=new Mobile("200005","ApplePro","121000","https://www.google.co.in/search?q=apple+macbook+pro&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi4l-zN9_3ZAhXDRo8KHf0-BTwQ_AUICygC&biw=1600&bih=745#imgrc=5QRC_oivBZkrzM:");
    var m6=new Mobile("200006","AppleAir","60000","https://www.google.co.in/search?q=apple+macbook+air&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjcxpfw9v3ZAhUE3Y8KHeSGAbsQ_AUICygC&biw=1600&bih=745#imgrc=BoN3lK4fHg7ABM:");
    var Mobiles=[m1,m2,m3,m4,m5,m6];
    var json=JSON.stringify(Mobiles);
    return json;
}
function CreteJSOBJofMobile(){
    var MobileJSObjList =JSON.parse(creteMobileJson());
    return MobileJSObjList;
}
export default Mobile;