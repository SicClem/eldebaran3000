import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeSpeedService {


  clockSpeed: number=50;


  constructor() { }
}