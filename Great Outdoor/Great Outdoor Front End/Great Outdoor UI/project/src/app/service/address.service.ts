import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  
  constructor(private ser:HttpClient) {}
  
  public Addrcreation(Addrcreation:Address) {
    console.log("ins service add");
    console.log(Addrcreation);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.post("http://localhost:8000/addr/Addrcreation", Addrcreation, { headers, responseType: 'text'});
  }


  getAddress(userName:string){
    // const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.get<Address>(`http://localhost:8000/addr/getAddress/${userName}`);
  }

deleteaddr(addr_id: number) {
  console.log("ins service delete");
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.ser.delete("http://localhost:8000/addr/Deleteaddr/" + addr_id,  { headers, responseType: 'text'});
}

public updateMethod() {
  return this.updateaddr;
}
updateaddr(updateAddr :Address) {
  console.log("ins service update");
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.ser.put(`http://localhost:8000/addr/Updateaddr/${updateAddr.addr_id}`, updateAddr, { headers, responseType: 'text'});
}

}
export class Address{
  addr_id:number;
  retailer_name:string;
  building_no:number;
  city:string;
  state:string;
  zip:number;
}