import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class ItemInput extends React.Component{
  constructor(props){
     super(props);
     
  }
//   takeid(){
//   console.log(`inappid`);
//   }
//   takename(){

//     console.log(`inappname`);
//   }
//   takeprice(){

//     console.log(`inappprice`);
//   }
//   takeurl(){

//     console.log(`inappurl`);
//   }
  CHECK1(){
  console.log(`in check1`);
 
}
// onChange={this.takeid.bind(this)}
// onChange={this.takename.bind(this)}
// onChange={this.takeprice.bind(this)}
// onChange={this.takeurl.bind(this)}
//   CHECK(){
// console.log(`in check..`);
//   }
  render(){
    return(
      <div> 
    
          <div class="form-group"> 
          <label for="id">--:ITEM ID:--</label>
          <input ref="id1" type="text" class="form-control"   onChange={this.props.takeid}  id="id" placeholder="ID"/>
          </div>
          <div class="form-group">
          <label for="password">--:ITEM NAME:--</label>
          <input ref="name1"  type="text"  onChange={this.props.takename}  class="form-control" id="password" placeholder="NAME"/>
         </div>  
         <div class="form-group">
          <label for="price">--:ITEM PRICE:--</label>
          <input ref="price1" type="text" class="form-control"onChange={this.props.takeprice}    id="price" placeholder="PRICE"/>
          </div>
          <div class="form-group">
          <label for="url">--:ITEM URL:--</label>
          <input ref="url1" type="text" class="form-control" onChange={this.props.takeurl}   id="url" placeholder="URL"/>
         </div>
         <button type="button" onClick={this.props.add} class="btn btn-primary">ADD</button>&nbsp; &nbsp;
         <button type="button" onClick={this.props.save} class="btn btn-success">SAVE</button>&nbsp; &nbsp;
         <button type="button" onClick={this.props.delete} class="btn btn-info">DELETE</button>&nbsp; &nbsp;
         <button id="sort" onClick={this.props.sort} class="btn btn-success">SORT</button>
 
 <select id="inputState" onChange={this.props.inputstate2} >
  <option></option>
  <option >ID</option>
  <option>NAME</option>
  <option>PRICE</option>
  
</select>

&nbsp; &nbsp;
 <button  onClick={this.props.search}  id="search" class="btn btn-primary">SEARCH</button>
 
 <select id="inputState2" onChange={this.props.inputstate1} >
 <option></option>
  <option >ID</option>
  <option>NAME</option>
  <option>PRICE</option>
  
</select>
 
&nbsp; &nbsp;
 <button id="load" onClick={this.props.load} class="btn btn-secondary">LOAD</button>

 <select id="inputState3"  onChange={this.props.inputstate3}>
 <option></option>
  <option  >FROM JSON</option>
  <option>FROM MYSTORAGE</option>
</select>

          <button type="button"  onClick={this.props.update} class="btn  btn-info">UPDATE</button>&nbsp; &nbsp;
          <button onClick={this.props.upload} type="reset" class="btn btn-secondary">UPLOAD</button>&nbsp; &nbsp;
                 <button onClick={this.props.clearALL} type="reset" class="btn btn-primary">CLEAR ALL</button>&nbsp; &nbsp;
          <button   onClick={this.CHECK1} class="btn ">CHECK</button> 
      </div>
  );
  }
 
}
export default ItemInput;
// {this.props.ITEMUPDATED}={this.DatafromCRUD}