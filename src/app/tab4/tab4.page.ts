import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page  {
// Variabel GetData for array
public allData: any = [];

constructor() {
  // Form Load GetData
  this.GetData();
}

handleRefresh(event: any) {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
    this.GetData()
  }, 2000);
};

// Function GetData from API ---------------------------------------------------------------------------
async GetData() {
  const res: any = await axios.get('https://praktikum-cpanel-unbin.com/api_rifai/api_mhs_baru/get_data_mahasiswa.php');

  console.log(res.data);
  this.allData = res.data.result;
}
// Function getData ---------------------------------------------------------------------------
}
