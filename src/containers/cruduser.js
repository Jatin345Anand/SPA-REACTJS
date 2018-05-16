import React from 'react';
import Mobile from '../models/item';
import ItemInput from '../components/InputCrud';
import ItemList from '../components/OutputCrud';
import MobileOperation from '../models/itemOperation';
export class CRUDUSER extends React.Component{
    constructor(props){
      super(props);
      this.title="CRUD ONLINE SHOP REACT";
      this.id=0;
      this.name="";
      this.url="";
      this.price=0;
      this.ItemUpdate1={name:"",price:"",url:""};
      this.Ip1=""; this.Ip2=""; this.Ip3="";
      this.state={
        ITEMUPDATEDprice:"",
        ITEMUPDATEDname:"",
        ITEMUPDATEDurl:"",
        IU:{name:"",price:"",url:""},
          itemArray:[],total:0,markCount:0,UnmarkCount:0
      };
      this.ItemArrayClone=[];
    }
    takeID(event){
      this.id=event.target.value;
      return event;
    }
    takeNAME(event){
         this.name=event.target.value;
        return this.name;
    }
    takePRICE(event){
        this.price=event.target.value;
        return this.price;
    }
    takeURL(event){
        this.url=event.target.value;
        return this.url;
    }
    takeID2(event){
        return event;
    }
    add(){
        //var arr=[...state.ItemArray];
        this.ItemArrayClone=[...this.state.itemArray];
        var itemobj= MobileOperation.CreateObjItem(this.id,this.name,this.price,this.url,false,0);
        this.ItemArrayClone.push(itemobj);
        //MobileOperation.ADD(itemobj);
        this.updateCount();
    }
    updateCount(){
       console.log(`Update call....`);
      var total =this.ItemArrayClone.length;
      
      this.ItemArrayClone.forEach((io)=>console.log(`${io.mark}`));
      let markCount=this.ItemArrayClone.filter((IO)=>IO.mark===true).length;
      let UnmarkCount=total-markCount;       
       this.setState({itemArray:this.ItemArrayClone,total:this.ItemArrayClone.length,
        UnmarkCount:UnmarkCount,markCount:markCount,
        ITEMUPDATEDname:this.ItemUpdate1.name,
        ITEMUPDATEDprice:this.ItemUpdate1.price,
        ITEMUPDATEDurl:this.ItemUpdate1.url
    });
     
       
    }
    takeresetid(){
        console.log(`Reset called..`);
    }
    clearALL(){
        console.log("called clearall");
         
    }
    update(event){ 
    // this.ItemArrayClone.forEach((io)=>console.log(io));
    // var DeleteList= this.ItemArrayClone.filter((io)=>io.mark===false);
    // return DeleteList;
    console.log(this.state.itemArray);
    this.updateCount();
    }
     
    save(){
      console.log(`called save....`);
      if(window.localStorage){
          console.log(`local strorage available`);
          console.log(this.ItemArrayClone);
          console.log(this.state.itemArray);
          localStorage.setItem('details',JSON.stringify(this.state.itemArray));
      }
      else{
          console.log(`local storage not available..`);
      } 
    }
    delete(){
         // var UnmarkedItems= this.update();
        // var um1=UnmarkedItems.length;
        // var total1=this.state.itemArray.length;
        // var m1=total1-um1;
        // this.setState({itemArray:UnmarkedItems,UnmarkCount:um1,markCount:m1,total:total1});
        console.log(this.ItemArrayClone);
        console.log(this.state.itemArray);
        this.ItemArrayClone=this.state.itemArray.filter((io)=>io.mark==false);
        this.updateCount();
    }
    ip1(event){
   this.Ip1=event.target.value;
   console.log(`${this.Ip1}`);
    }
    ip2(event){
        this.Ip2=event.target.value;
        console.log(`${this.Ip2}`);
         }
         ip3(event){
            this.Ip3=event.target.value;
            console.log(`${this.Ip3}`);
        }
    search(){
         console.log(`search`);
         var Arr= [...this.state.itemArray];
         var SearchedArr=[];
         console.log(`${this.Ip1}`);
         if(this.Ip1=="ID"){
           console.log(`${this.id}`);
           SearchedArr=Arr.filter((io)=>io.id===this.id);
           SearchedArr.forEach((io)=>console.log(io));
         }
         else if(this.Ip1=="NAME"){
           console.log(`${this.name}`);
           SearchedArr=Arr.filter((io)=>io.name===this.name);
           SearchedArr.forEach((io)=>console.log(io));  
         }
         else if(this.Ip1=="PRICE"){
          console.log(`${this.price}`);
          SearchedArr=Arr.filter((io)=>io.price===this.price);
          SearchedArr.forEach((io)=>console.log(io));  
         }
         var m= SearchedArr.filter((io)=>io.mark===true).length;
         var t= SearchedArr.length;
         var um = t-m;
         this.setState({itemArray:SearchedArr,UnmarkCount:um,markCount:m,total:t});

    }
    sort(identity){
       console.log("sort");
       console.log( `${this.Ip2}`);
       var Arr= [...this.state.itemArray];
       if(this.Ip2=="ID"){ 
           Arr.sort((io1,io2)=>io1.id-io2.id);
      }
      else if(this.Ip2=="NAME"){
        Arr.sort((io1,io2)=>io1.name-io2.name);
      }
      else if(this.Ip2=="PRICE"){
        Arr.sort((io1,io2)=>io1.price-io2.price);
      }
      var m= Arr.filter((io)=>io.mark===true).length;
      var t= Arr.length;
      var um = t-m;
      this.setState({itemArray:Arr,UnmarkCount:um,markCount:m,total:t});
   
    }
    UpdateAfterLoad(){
        console.log("in Load update...");
       let t=this.ItemArrayClone.length;
   let markCount=this.ItemArrayClone.filter((IO)=>IO.mark===true).length;
      let UnmarkCount=t-markCount;    
      this.setState({itemArray:this.ItemArrayClone,UnmarkCount:UnmarkCount,markCount:markCount,total:t});
 }
DoPromise1(){
fetch("http://localhost:5000/mobiles").then((data)=>data.json().then(
    function (data){
   console.log(data);
   MobileOperation.PrepareItem(data);
   console.log(MobileOperation.GetItem());
    }   
).catch((er)=>console.log(er))).catch((er)=>console.log(er));
     
} 
 FillLoadState(A){
     console.log(`${A.length}`);
 }
 
componentDidMount(){
    this.DoPromise1();
}
 PrintAfterLoad(A){
    // console.log(MobileOperation.GetItem());
    // this.ItemArrayClone = MobileOperation.GetItem();
    // console.log(this.ItemArrayClone.length); 
    for(let i=0;i< A.length;i++){
        console.log( A[i]);
        this.ItemArrayClone.push( A[i]);
    }
    console.log(this.ItemArrayClone);
    this.updateCount();
}
    load(){ 
   
        console.log("loaded...");
        this.ItemArrayClone=[...this.state.itemArray];
         var LL=[];
       if(this.Ip3==="FROM JSON"){
         this.PrintAfterLoad(MobileOperation.GetItem());
    }
       
       else if(this.Ip3==="FROM MYSTORAGE"){
        if(window.localStorage){
            console.log(`local strorage available`);
         console.log(`${localStorage.details}`);
        var js= JSON.parse(localStorage.details);
         MobileOperation.PrepareItemforMystorage(js);
         console.log(MobileOperation.GetItemforStorage());
         console.log(this.ItemArrayClone);
         this.PrintAfterLoad(MobileOperation.GetItemforStorage());
    }
        else{
            console.log(`local storage not available..`);
        }
       }
     }
     updateAfterUPDATE(){
         this.ItemUpdate1=[...this.state.IU];
         this.setState({
             ITEMUPDATEDname:this.ItemUpdate1.name,
             ITEMUPDATEDprice:this.ItemUpdate1.price,
             ITEMUPDATEDurl:this.ItemUpdate1.url
            });
         console.log(this.state.ITEMUPDATEDname,this.state.ITEMUPDATEDprice,this.state.ITEMUPDATEDurl);
     }
    update2(){
        
       console.log(this.state.itemArray);
    var LL= this.state.itemArray.filter((io)=>io.mark==true);
    this.ItemUpdate1.name=LL[0].name;
    this.ItemUpdate1.price=LL[0].price;
    this.ItemUpdate1.url=LL[0].url;   
    console.log( this.ItemUpdate1);
     console.log(this.state);
    this.updateAfterUPDATE();
    }
    update3(){
        console.log(this.ItemArrayClone);
        var ItemUpdate= this.state.itemArray.filter((io)=>io.mark==true);
        console.log(ItemUpdate[0].id);
        // this.takeID().target.value=ItemUpdate[0].id; 
    }
    upload(){
        console.log(`called upload..`);
        this.ItemArrayClone.forEach((io)=>console.log(io));
    }
    render(){;
        return(
            <div className="container" id="crud-container">
             
          <h1 id="hd"  >{this.title}</h1>
          <ItemInput 
          takeid={this.takeID.bind(this)} 
        //   takeid={this.takeID2.bind(this)} 
          takename={this.takeNAME.bind(this)} 
          takeprice={this.takePRICE.bind(this)}
          takeResetID={this.takeresetid.bind(this)}
           takeurl={this.takeURL.bind(this)}
           upload={this.upload.bind(this)}
           inputstate1={this.ip1.bind(this)}
          inputstate2={this.ip2.bind(this)}
          inputstate3={this.ip3.bind(this)}
           load={this.load.bind(this)}
           add={this.add.bind(this)}
          save={this.save.bind(this)}
          delete={this.delete.bind(this)}
          search={this.search.bind(this)}
          sort={this.sort.bind(this)} 
          update={this.update2.bind(this)}    
       clearALL={this.clearALL.bind(this)}
        ITEMUPDATED={this.ItemUpdate1}
       />
          <h3>Total :{this.state.total} Mark : {this.state.markCount} UnMark : {this.state.UnmarkCount}</h3>
          <ItemList list={this.state.itemArray}
          updateITEMLIST={this.update.bind(this)}
          updateITEMLIST2={this.update3.bind(this)}
       />
            </div>
            
        );
    }
}