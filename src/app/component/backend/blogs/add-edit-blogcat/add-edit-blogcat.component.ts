import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../api.service';
@Component({
  selector: 'app-add-edit-blogcat',
  templateUrl: './add-edit-blogcat.component.html',
  styleUrls: ['./add-edit-blogcat.component.css']
})
export class AddEditBlogcatComponent implements OnInit {
  //Add editfor blog category
  public configAddEdit: any = {
    action: "add",
    endpoint: this.apiService.serverUrlDemo+'addorupdatedata',
    endpoint2: this.apiService.serverUrlDemo,
    source: "blog_category",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "/blog-category/list",
    userData: { id: "18801017007", name: "Admin" },
    defaultDataAlways: null
  }
  constructor(private activatedRouter: ActivatedRoute, private cookieService: CookieService,public apiService: ApiService) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      if (params._id) {
        this.activatedRouter.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.blogCatList.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }

}
