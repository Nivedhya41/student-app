import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
data=[
  {"name":"Aadhi","age":33,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUyjMowxdddDUMXbCx_GSjxEc7d_k58g_4Q&usqp=CAU"},
  {"name":"Tapasya","age":23,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8r54g86MEGRzywLkkTTu8CVFuhz3XdIGGA&usqp=CAU"},
  {"name":"Sonakshi","age":22,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU"},
  {"name":"Nainav","age":32,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGbfnYcCWLB505FNa8JQIJ77h_hN5W_SXKA&usqp=CAU"},
  {"name":"Gauri","age":34,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNdSL0wetARyMZVIRgtl2yPZyzXSJQx4EzA&usqp=CAU"},
  {"name":"Theertha","age":24,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHIXuAIed4Ef_zfzcIAjQ5hcGNM9k3UHxCA&usqp=CAU"}
]
}
