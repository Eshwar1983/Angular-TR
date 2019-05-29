import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProjectListService } from '../../services/project-list.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ProjectsComponent implements OnInit {

  projectList: any;
  filteredProjects: any;
  private _serchTerm: string;

  get serchTerm(): string {
    console.log('get serchTerm: ' + this._serchTerm);
    return this._serchTerm;
  }
  set serchTerm(value: string) {
    this._serchTerm = value;
    console.log('set serchTerm: ' + value +' '+ this.filtereProject(value));
    if(value != ""){
      console.log(this.filtereProject(value));
      this.filteredProjects = this.filtereProject(value);
      console.log(this.filteredProjects);
    } else {
      this.defalutData();
    }
  }

  filtereProject(searchString: string) {
    //console.log(this.projectList);
    //return 
    //this.projectList.filter(v => v.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
    setTimeout(() => {
      this._projectListData.feachProjectData.subscribe((response: any) => {
        this.projectList = JSON.parse(response._body).projectPeriodDuration;
        this.filteredProjects = this.projectList;
        console.log(this.filteredProjects);
      })
    }, 100);
    this.projectList.filter(v => v.indexOf(searchString.toLowerCase()) !== -1);
    //console.log('filtereProject' + searchString + this.filteredProjects )
  }

  defalutData(){
    this._projectListData.feachProjectData.subscribe((response: any) => {
      this.projectList = JSON.parse(response._body).projectPeriodDuration;
      this.filteredProjects = this.projectList;
      console.log(this.filteredProjects);
    })
  }

  constructor( private _projectListData: ProjectListService) {
  }
  
  ngOnInit() {
    this.defalutData();
  }

}
