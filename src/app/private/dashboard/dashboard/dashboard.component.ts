import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  userRolesData: number[] = [10, 20, 15]; // Dummy data for user roles
  userRolesLabels: string[] = ['Admin', 'Therapist', 'User'];

  messagesData: number[] = [30, 45, 20, 10]; // Dummy data for messages per day
  messagesLabels: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

  constructor(private el:ElementRef) { }

  ngOnInit(): void {
    // this.setChart();
  }

  ngAfterViewInit(): void {
    this.setChart();
  }

  setChart():void{
    this.setUserRoleChart();
    this.setMessageCountChart();
  }
  
  setUserRoleChart(){
    const canvas = document.getElementById('userRolesPieChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: this.userRolesLabels,
          datasets: [{
            data: this.userRolesData,
            backgroundColor: ['#D32D41', '#6AB187', '#488A99'],
          }],
        },
      });
    } else {
      console.error('Canvas context not available');
    }
  }

  setMessageCountChart():void{
    const canvas = document.getElementById('messagesPerDayChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.messagesLabels,
          datasets: [{
            data: this.messagesData,
            backgroundColor: '#0091D5',
          }],
        },
        options: {
          maintainAspectRatio: false,
          aspectRatio: 2, 
          responsive:true,
          scales: {
            x: { stacked: true },
            y: { stacked: true }
          },
        },
      });
    } else {
      console.error('Canvas context not available');
    }
  }

}
