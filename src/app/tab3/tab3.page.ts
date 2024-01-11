import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  public nama_mahasiswa: any = '';
  public jenis_kelamin: any = '';
  public prodi: any = '';
  public email: any = '';
  public nomor: any = '';
  public asal_sekolah: any = '';
  public jenjang: any = '';
  public kelas: any = '';
  public info: any = '';



  constructor(public toastCtrl: ToastController) {}

  async addData() {
    const formData = new FormData();
    formData.append('nama_mahasiswa', this.nama_mahasiswa);
    formData.append('jenis_kelamin', this.jenis_kelamin);
    formData.append('prodi', this.prodi);
    formData.append('email', this.email);
    formData.append('nomor', this.nomor);
    formData.append('asal_sekolah', this.asal_sekolah);
    formData.append('jenjang', this.jenjang);
    formData.append('kelas', this.kelas);
    formData.append('info', this.info);

    console.log(formData);

    try {
      const res = await axios.post(
        'https://praktikum-cpanel-unbin.com/api_rifai/api_mhs_baru/post_data.php',
        formData
      );
      console.log(res.data);
        
      if (res.data.error == false) {
        const toast = await this.toastCtrl.create({
          message: 'Data berhasil ditambahkan',
          duration: 2000,
        });
        toast.present();
      } else {
        const toast = await this.toastCtrl.create({
          message: 'Data gagal ditambahkan',
          duration: 2000,
        });
        toast.present();
      }
    } catch (err) {
      console.log(err);
    }
  }
}
