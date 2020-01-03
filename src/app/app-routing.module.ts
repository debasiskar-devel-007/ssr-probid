import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/frontend/login/login.component';
import { AuthGuard } from './auth.guard';

/**Frontend Routing**/
import { HomeComponent } from './component/frontend/home/home.component';
import { ContactusComponent } from './component/frontend/contactus/contactus.component';
import { ForgetPasswordComponent } from './component/frontend/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/frontend/reset-password/reset-password.component';
import { SignUpComponent } from './component/frontend/sign-up/sign-up.component';
import { TesimonialComponent } from './component/frontend/tesimonial/tesimonial.component';
import { TesimoniallistComponent } from './component/frontend/tesimoniallist/tesimoniallist.component';
import { ServiceComponent } from './component/frontend/service/service.component';
import { ServicelistComponent } from './component/frontend/servicelist/servicelist.component';
import { BlogComponent } from './component/frontend/blog/blog.component';
import { BloglistfrontendComponent } from './component/frontend/bloglist/bloglist.component';

import { BlogdetailComponent } from './component/frontend/blogdetail/blogdetail.component';

import { AdvanceInventorySearchComponent } from './component/frontend/inventory/advance-inventory-search/advance-inventory-search.component';
import { BasicInventorySearchComponent } from './component/frontend/inventory/basic-inventory-search/basic-inventory-search.component';
import { SaveSearchComponent } from './component/backend/inventory/save-search/save-search.component';

import { PreOwnedComponent } from './component/frontend/pre-owned/pre-owned.component';
import { AboutusComponent } from './component/frontend/aboutus/aboutus.component';
import { SearchListViewComponent } from './component/frontend/search-list-view/search-list-view.component';
import { BlogCategoryComponent } from './component/frontend/blog-category/blog-category.component';
import { SalesrepSignupComponent } from './component/frontend/salesrep-signup/salesrep-signup.component';
import { CustomerSignupComponent } from './component/frontend/customer-signup/customer-signup.component';
import { InventoryDetailComponent } from './component/backend/inventory-detail/inventory-detail.component';

/**End Frontend Routing**/

/**Backend Routing**/
import { DashboardComponent } from './component/backend/dashboard/dashboard.component';
import { BkLeftdivComponent } from './layout/bk-leftdiv/bk-leftdiv.component';

import { MaindashboardComponent } from './component/backend/maindashboard/maindashboard.component';
import { AddeditServiceComponent } from './component/backend/ServiceApp/addedit-service/addedit-service.component';
import { ListingServiceComponent } from './component/backend/ServiceApp/listing-service/listing-service.component';
import { ListingTestimonialComponent } from './component/backend/TestimonialApp/listing-testimonial/listing-testimonial.component';
import { AddeditTestimonialComponent } from './component/backend/TestimonialApp/addedit-testimonial/addedit-testimonial.component';
import { UserManagementComponent } from './component/backend/user-management/user-management.component';
// import { ContactUsDashboardComponent } from './component/backend/contact-us-dashboard/contact-us-dashboard.component';

import { RepdashboardComponent } from './component/backend/repdashboard/repdashboard.component';

import { ResolveService } from './resolve.service';
import { BlogManagementComponent } from './component/backend/blog-management/blog-management.component';

import { CommissionReportComponent } from './component/backend/commission-report/commission-report.component';
import { InventorySearchComponent } from './component/backend/inventory-search/inventory-search.component';
import { ManageAvailabilityComponent } from './component/backend/manage-availability/manage-availability.component';
import { TestimonialListsAdminComponent } from './component/backend/testimonial-lists-admin/testimonial-lists-admin.component';

import { BirddogListComponent } from './component/backend/birddog-list/birddog-list.component';

import { CommissionListComponent } from './component/backend/commission-list/commission-list.component';
import { CustomerListComponent } from './component/backend/customer-list/customer-list.component';
import { ManageCommissionComponent } from './component/backend/manage-commission/manage-commission.component';
import { NewsletterlistsComponent } from './component/backend/newsletterlists/newsletterlists.component';
import { SalesReportComponent } from './component/backend/sales-report/sales-report.component';
import { SalesreplistsComponent } from './component/backend/salesreplists/salesreplists.component';
import { RsvplistsComponent } from './component/backend/rsvplists/rsvplists.component';
import { ManageTrainingComponent } from './component/backend/manage-training/manage-training.component';
import { ManageLessonsComponent } from './component/backend/manage-lessons/manage-lessons.component';
import { TrainingCenterComponent } from './component/backend/training-center/training-center.component';
import { TrainingReportComponent } from './component/backend/training-report/training-report.component';
import { MyAppointmentComponent } from './component/backend/my-appointment/my-appointment.component';
import { CreateNewInventoryComponent } from './component/backend/create-new-inventory/create-new-inventory.component';
import { JobTicketComponent } from './component/backend/job-ticket/job-ticket.component';
import { SocialAdvoComponent } from './component/backend/social-advo/social-advo.component';
import { TranningcategorymanagementComponent } from './training/tranningcategorymanagement/tranningcategorymanagement.component';
import { AddEditComponent } from './training/tranningcategorymanagement/add-edit/add-edit.component';
import { TrainingsectionlistComponent } from './training/trainingsectionlist/trainingsectionlist.component';
import { TrainingsectionComponent } from './training/trainingsection/trainingsection.component';
import { RepTraingcenterComponent } from './training/rep-traingcenter/rep-traingcenter.component';
import { ManageleadsComponent } from './training/manageleads/manageleads.component';
import { BookAnAppointmentComponent } from './component/backend/book-an-appointment/book-an-appointment.component';
import { AdvanceInventorySearchBackendComponent } from './component/backend/inventory/advance-inventory-search-backend/advance-inventory-search-backend.component';
import { BasicInventorySearchBackendComponent } from './component/backend/inventory/basic-inventory-search-backend/basic-inventory-search-backend.component';
import { MysalesrepComponent } from './component/backend/mysalesrep/mysalesrep.component';
import { CommunicationComponent } from './component/backend/communication/communication.component';
import { AdminManageCategoriesComponent } from './component/backend/admin-manage-categories/admin-manage-categories.component';
import { AddAdminCategoriesComponent } from './component/backend/add-admin-categories/add-admin-categories.component';
import { AdminAddCategoriesComponent } from './component/backend/admin-add-categories/admin-add-categories.component';
import { TrainingreportsComponent } from './training/trainingreports/trainingreports.component';
import { ManagequizComponent } from './training/managequiz/managequiz.component';
import { AddEditBlogcatComponent } from './component/backend/blogs/add-edit-blogcat/add-edit-blogcat.component';
import { ListingBlogcatComponent } from './component/backend/blogs/listing-blogcat/listing-blogcat.component';
import { AddEditBlogsComponent } from './component/backend/blogs/add-edit-blogs/add-edit-blogs.component';
import { ListingBlogsComponent } from './component/backend/blogs/listing-blogs/listing-blogs.component';
import { MyAccountComponent } from './component/backend/my-account/my-account.component';
import { AddSalesrepComponent } from './component/backend/add-salesrep/add-salesrep.component';
import { AddCustomerComponent } from './component/backend/add-customer/add-customer.component';
import { AddBirddogComponent } from './component/backend/add-birddog/add-birddog.component';



import { AddEditNewsletterComponent } from './component/backend/newsletterlists/add-edit-newsletter/add-edit-newsletter.component';
 
import { AddEditSubscriberComponent } from './component/backend/newsletterlists/add-edit-subscriber/add-edit-subscriber.component';
import { AddEditSubscriberGroupComponent } from './component/backend/newsletterlists/add-edit-subscriber-group/add-edit-subscriber-group.component';
 
 import { AddEditTestemailComponent } from './component/backend/newsletterlists/add-edit-testemail/add-edit-testemail.component';

 import { AddEditSenderappComponent } from './component/backend/newsletterlists/add-edit-senderapp/add-edit-senderapp.component';
 

import { ListingNewsletterComponent } from './component/backend/newsletterlists/listing-newsletter/listing-newsletter.component';

import { LisitngTestemailappComponent } from './component/backend/newsletterlists/lisitng-testemailapp/lisitng-testemailapp.component';
import { ListingSenderappComponent } from './component/backend/newsletterlists/listing-senderapp/listing-senderapp.component';
import { ListingSubscriptionComponent } from './component/backend/newsletterlists/listing-subscription/listing-subscription.component';
import { ListingSubcategoryComponent } from './component/backend/newsletterlists/listing-subcategory/listing-subcategory.component';
import { AskForConfirmationComponent } from './component/backend/ask-for-confirmation/ask-for-confirmation.component';
/**End Backend Routing**/

const routes: Routes = [

  /**Frontend Routing**/
  { path: '', component: HomeComponent },

  { path: 'login', component: LoginComponent },
  { path: 'login/:id', component: LoginComponent },
  { path: 'tests', component: AskForConfirmationComponent },

  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'salesrep-signup', component: SalesrepSignupComponent },
  
  { path: 'customer-signup', component: CustomerSignupComponent },

  { path: 'customer-signup/:id', component: CustomerSignupComponent },
  { path: 'customer-signup/:img/:id', component: CustomerSignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactusComponent },
  {
    path: "testimonialhome",
    component: TesimonialComponent,
    resolve: { testimonialListData: ResolveService },
    data: {
      requestcondition: { source: "testimonal", condition: {} },
      endpoint: "datalist"
    }
  },
  { path: 'pre-owned-list', component: SearchListViewComponent },
  { path: 'online-inventory-list', component: SearchListViewComponent },
  { path: 'search-inventory-list', component: SearchListViewComponent },
  { path: 'specials-list', component: SearchListViewComponent },
// {    path: "testimonial",  component: TesimoniallistComponent },
  {
    path: "testimonial",
    component: TesimoniallistComponent,
    resolve: { testimonialListData: ResolveService },
    data: {
      requestcondition: { source: "testimonial_view", condition: {} },
      endpoint: "datalistwithouttoken"
    }
  },

  {
    path: 'servicehome',
    component: ServiceComponent,
    resolve: { serviceListData: ResolveService },
    data: { requestcondition: { source: 'service', condition: {} }, endpoint: 'datalist' }
  },
  // {
  //   path: 'service',
  //   component: ServicelistComponent
  // },
  {
    path: 'service',
    component: ServicelistComponent,
    resolve: { serviceListData: ResolveService },
    data: { requestcondition: { source: 'service', condition: {} }, endpoint: 'datalistwithouttoken' }
  },
  { path: 'blog', component: BlogComponent },
  // { path: 'blog-category/edit/:_id', component: BlogComponent, resolve: { blogCatList: ResolveService },
  // data: { requestcondition: { source: 'blog_category', condition: {} }, endpoint: 'datalist' }},

  // { path: 'blog-category/list', component: BlogdetailComponent, resolve: { blogCatList: ResolveService },
  // data: { requestcondition: { source: 'blog_category_view', condition: {} }, endpoint: 'datalist' }},

  { path: 'bloglist', component: BloglistfrontendComponent, resolve: { blogCatList: ResolveService },
  data: { requestcondition: { condition: {"limit": 4, "skip":1} }, endpoint: 'blogdata' } },

  // { path: 'bloglist', component: BloglistfrontendComponent, resolve: { blogCatList: ResolveService },
  // data: { requestcondition: { source: 'blogs_view', condition: {} }, endpoint: 'datalist' } },



  { path: 'blogdetail/:id', component: BlogdetailComponent,resolve: { blogCatList: ResolveService },
  data: { requestcondition: { source: 'blogs_view', condition: {} }, endpoint: 'datalistwithouttoken' } },



  { path: 'advance-inventory-search', component: AdvanceInventorySearchComponent ,
  resolve: { inventory_search: ResolveService },
  data: { requestcondition: { source: '', condition: {} }, endpoint: 'inventory-search' } },
  { path: 'basic-inventory-search', component: BasicInventorySearchComponent ,
  resolve: { inventory_search: ResolveService },
  data: { requestcondition: { source: '', condition: {} }, endpoint: 'inventory-search' }},


  { path: 'save-search-admin', component: SaveSearchComponent ,
  resolve: { inventory_search: ResolveService },
  data: { requestcondition: { source: 'save_favorite_view', condition: {added_by:'id'} }, endpoint: 'datalist' }},

  { path: 'save-search-castomer', component: SaveSearchComponent ,
  resolve: { inventory_search: ResolveService },
  data: { requestcondition: { source: 'save_favorite_view', condition: {added_by:'id'} }, endpoint: 'datalist' }},

  { path: 'save-search-rep', component: SaveSearchComponent ,
  resolve: { inventory_search: ResolveService },
  data: { requestcondition: { source: 'save_favorite_view', condition: {added_by:'id'} }, endpoint: 'datalist' }},



  { path: 'pre-owned', component: PreOwnedComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'blog-category', component: BlogCategoryComponent },
  { path: 'inventory-detail/:id', component: InventoryDetailComponent,
  resolve: { inventory_details: ResolveService },
  data: { requestcondition: { source: 'save_favorite_view', condition: {_id_object:'id'} }, 
  endpoint: 'datalist' }
  },

  { path: 'rsvp-detail/:id', component: InventoryDetailComponent,
  resolve: { inventory_details: ResolveService },
  data: { requestcondition: { source: 'send_rsvp_view', condition: {_id_object:'id'} },
   endpoint: 'datalist' }
  },

// ___________________BLOG MANAGEMENT_________________
// =======================================================

// _____________________BLOG CATEGORY________________
{ path: 'blog-category/add', component: AddEditBlogcatComponent },

{
  path: 'blog-category/list',
  component: ListingBlogcatComponent
  // ,

  // resolve: { blogCatList: ResolveService },
  // data: {
  //   requestcondition: {
  //     source: 'blog_category',
  //     condition: {}
  //   },
  //   endpoint: 'datalist'
  // },
},
{
  path: 'blog-category/edit/:_id',
  component: AddEditBlogcatComponent,

  resolve: { blogCatList: ResolveService },
  data: {
    requestcondition: {
      source: 'blog_category',
      condition: {}
    },
    endpoint: 'datalist'
  },
},
// -----------------------------------------------


// ______________________BLOGS_________________
// / ________________BLOGS______________


{ path: 'blogs/add', component: AddEditBlogsComponent },

  {
    path: 'blogs/list',
    component: ListingBlogsComponent

    // resolve: { blogsList: ResolveService },
    // data: {
    //   requestcondition: {
    //     source: 'blogs_view',
    //     condition: {}
    //   },
    //   endpoint: 'datalist'
    // },
  },
  {
    path: 'blogs/edit/:_id',
    component: AddEditBlogsComponent,

    resolve: { blogsList: ResolveService },
    data: {
      requestcondition: {
        source: 'blogs',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },
// -------------------------------------------




  { path:'managequiz/:lessonid', component: ManagequizComponent},

  /**End Frontend Routing**/

  /**Backend Routing**/
  // {path: 'customer-dashboard', component:DashboardComponent, canActivate:[AuthGuard]},       // Useing for canActive
  { path: 'customer-dashboard', component: DashboardComponent , canActivate: [AuthGuard] , resolve: {rsvp: ResolveService },
  data: { requestcondition: { source: '', condition: {} }, endpoint: 'for-customer-dashboard' }},
  // { path: 'admin-dashboard', component: MaindashboardComponent,canActivate: [AuthGuard] },
  { path: 'admin-dashboard', component: MaindashboardComponent,canActivate: [AuthGuard] , resolve: {rsvp: ResolveService },
  data: { requestcondition: { source: '', condition: {} }, endpoint: 'for-dashboard' } },
  { path: 'bk-leftdiv', component: BkLeftdivComponent },
  { path: 'testimonial/add', component: AddeditTestimonialComponent,canActivate: [AuthGuard] },
  {
    path: 'testimonial/edit/:_id', component: AddeditTestimonialComponent, resolve: { testimonialData: ResolveService },
    data: { requestcondition: { source: 'testimonial', condition: {} }, endpoint: 'datalist' },canActivate: [AuthGuard]
  },
  // {
  //   path: 'testimonial-listing', component: ListingTestimonialComponent, resolve: { testimonialList: ResolveService },
  //   data: { requestcondition: { source: 'testimonial_view', condition: {} }, endpoint: 'datalist' },canActivate: [AuthGuard]
  // },
  {
    path: 'testimonial-lists-admin', component: ListingTestimonialComponent, resolve: { testimonialList: ResolveService },
    data: { requestcondition: { source: 'testimonial_view', condition: {} }, endpoint: 'datalist' },canActivate: [AuthGuard]
  },

  {
    path: 'service-listing', component: ListingServiceComponent, resolve: { serviceList: ResolveService },
    data: { requestcondition: { source: 'services_view', condition: {} }, endpoint: 'datalist' },canActivate: [AuthGuard]
  },
  { path: 'service/add', component: AddeditServiceComponent ,canActivate: [AuthGuard]},
  {
    path: 'service/edit/:_id', component: AddeditServiceComponent, resolve: { serviceList: ResolveService },
    data: { requestcondition: { source: 'services', condition: {} }, endpoint: 'datalist' ,canActivate: [AuthGuard]}
  },

  { path: 'blog-management', component: BlogManagementComponent },
  { path: 'commission-report', component: CommissionReportComponent },
  { path: 'inventory-list', component: InventorySearchComponent },
  { path: 'manage-availability', component: ManageAvailabilityComponent },
  // { path: 'testimonial-lists-admin', component: TestimonialListsAdminComponent },

  { path: 'birddog-list', component: BirddogListComponent,resolve: {birddoglist: ResolveService },
  data: { requestcondition: { source: 'user_view', condition: {"type": "birddog"} },endpoint: 'datalist',canActivate: [AuthGuard]}
  },


  { path: 'commission-list', component: CommissionListComponent },

  { path: 'customer-list-admin', component: CustomerListComponent,resolve: { customerlist: ResolveService },
  data: { requestcondition: { source: 'type_customer_view', condition: {} },endpoint: 'datalist',canActivate: [AuthGuard]} },

  { path: 'manage-commission', component: ManageCommissionComponent },
  // { path: 'newsletter-list', component: NewsletterlistsComponent },
  { path: 'sales-report', component: SalesReportComponent },
  
  { path: 'salesrep-list-admin', component: SalesreplistsComponent,resolve: { salesreplist: ResolveService },
  data: { requestcondition: { source: 'user_view', condition: {"type": "salesrep"} },endpoint: 'datalist',canActivate: [AuthGuard]} },

  { path: 'rsvp-admin', component: RsvplistsComponent ,
  resolve: { rsvp: ResolveService },
  data: { requestcondition: { source: 'send_rsvp_view', condition: {} }, endpoint: 'datalist' }},

  { path: 'rsvp-salesrep', component: RsvplistsComponent,
  resolve: { rsvp: ResolveService },
  data: { requestcondition: { source: 'send_rsvp_view', condition: {"added_by_object":"user_id"} }, 
  endpoint: 'datalist' }},

  { path: 'rsvp-customer', component: RsvplistsComponent ,
  resolve: { rsvp: ResolveService },
  data: { requestcondition: { source: 'send_rsvp_view', condition: {"added_for_object":"user_id"} }, endpoint: 'datalist' }},

  // { path: 'manage-training1', component: ManageTrainingComponent },
  { path: 'manage-lessons', component: ManageLessonsComponent },
  { path: 'training-center', component: TrainingCenterComponent },
  { path: 'training-report', component: TrainingReportComponent },
  { path: 'my-appointment-admin', component: MyAppointmentComponent },
  { path: 'create-new-inventory', component: CreateNewInventoryComponent },
  { path: 'job-ticket', component: JobTicketComponent },
  { path: 'social-advo-admin', component: SocialAdvoComponent },

  { path: 'manage-type', component: AdminManageCategoriesComponent , resolve: { serviceList: ResolveService },
  data: { requestcondition: { source: 'manage-type', condition: {"categoriesType": "type"} }, endpoint: 'datalist' }},

  { path: 'manage-make', component: AdminManageCategoriesComponent , resolve: { serviceList: ResolveService },
  data: { requestcondition: { source: 'manage-make', condition: {"categoriesType": "make"} }, endpoint: 'datalist' } },

  { path: 'manage-model', component: AdminManageCategoriesComponent , resolve: { serviceList: ResolveService },
  data: { requestcondition: { source: 'manage-model', condition: {"categoriesType": "model"} }, endpoint: 'datalist' } },

  { path: 'manage-year', component: AdminManageCategoriesComponent , resolve: { serviceList: ResolveService },
  data: { requestcondition: { source: 'manage-year', condition: {"categoriesType": "year"} }, endpoint: 'datalist' } },

  { path: 'manage-make-edit/:id', component: AdminManageCategoriesComponent },
  { path: 'admin-add-categories', component: AdminAddCategoriesComponent },

  /**************** User Management *****************/
  {
    path: 'user-management', component: UserManagementComponent, resolve: { serviceList: ResolveService },
    data: { requestcondition: { source: 'user', condition: {} }, endpoint: 'datalist' }
  },

  {
    path: 'user-m', component: UserManagementComponent, resolve: { serviceList: ResolveService },
    data: { requestcondition: { source: 'user', condition: {'id':'user_id'} }, endpoint: 'datalist' }
  },

  { path: 'my-appointment-user', component: MyAppointmentComponent },
  { path: 'book-an-appointment-user', component: BookAnAppointmentComponent },


  { path: 'advance-inventory-search-admin', component: AdvanceInventorySearchBackendComponent,
  resolve: { inventory_search: ResolveService },
  data: { requestcondition: { source: '', condition: {} }, endpoint: 'inventory-search' }
  },

  { path: 'advance-inventory-search-customer', component: AdvanceInventorySearchBackendComponent,
  resolve: { inventory_search: ResolveService },
  data: { requestcondition: { source: '', condition: {} }, endpoint: 'inventory-search' }
  },
  { path: 'advance-inventory-search-rep', component: AdvanceInventorySearchBackendComponent,
  resolve: { inventory_search: ResolveService },
  data: { requestcondition: { source: '', condition: {} }, endpoint: 'inventory-search' }
  },

  { path: 'basic-inventory-search-customer', component: BasicInventorySearchBackendComponent ,
  resolve: { inventory_search: ResolveService },
  data: { requestcondition: { source: '', condition: {} }, endpoint: 'inventory-search' }
},

  { path: 'basic-inventory-search-admin', component: BasicInventorySearchBackendComponent ,
  resolve: { inventory_search: ResolveService },
  data: { requestcondition: { source: '', condition: {} }, endpoint: 'inventory-search' }
},
{ path: 'basic-inventory-search-rep', component: BasicInventorySearchBackendComponent ,
resolve: { inventory_search: ResolveService },
data: { requestcondition: { source: '', condition: {} }, endpoint: 'inventory-search' }
},
  { path: 'mysalesrep', component: MysalesrepComponent },
  // { path:'contact-us-dashboard', component:ContactUsDashboardComponent,  resolve: { serviceList: ResolveService },
  // data: { requestcondition: { source: 'contactusForm', condition: {} }, endpoint: 'datalist'}},
  /**************** Rep Management *****************/
  { path: 'rep-dashboard', component: RepdashboardComponent, canActivate: [AuthGuard] , resolve: {rsvp: ResolveService },
  data: { requestcondition: { source: '', condition: {} }, endpoint: 'for-rep-dashboard' }  },
  { path: 'my-commission', component: CommissionListComponent },
  { path: 'my-birddog', component: BirddogListComponent },

  { path: 'my-appointment-rep', component: MyAppointmentComponent },
  { path: 'book-an-appointment-rep', component: BookAnAppointmentComponent },
  { path: 'customer-list-rep', component: CustomerListComponent,resolve: { customerlist: ResolveService },
  data: { requestcondition: { source: 'user', condition: {"type": "customer", "salesrep":"user_id" }},endpoint: 'datalist',canActivate: [AuthGuard] }},

  { path: 'social-advo-rep', component: SocialAdvoComponent },

  

  { path: 'communication', component: CommunicationComponent },
  { path: 'training-center-rep', component: TrainingCenterComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'add-salesrep', component: AddSalesrepComponent },
  { path: 'editsalesrep/:_id', component: AddSalesrepComponent },
  {path:'add-customer',component:AddCustomerComponent,},
  {path:'editcustomer/:_id',component:AddCustomerComponent},

  {path:'add-birddog',component:AddBirddogComponent},
  {path:'editbirddog/:_id',component:AddBirddogComponent},

  /**End Backend Routing**/


  {path: 'tranningcategory', component: TranningcategorymanagementComponent},
  {path: 'manage-training', component: TranningcategorymanagementComponent},
  {path: 'addtrainings', component: TranningcategorymanagementComponent},
  { path: 'category-management/add-new', component: AddEditComponent },
  { path: 'category-management/edit/:id', component: AddEditComponent },
  { path:'trainingsectionlist', component: TrainingsectionlistComponent},
  { path:'trainingsection', component: TrainingsectionComponent},
  { path:'trainingsection/:id', component: TrainingsectionComponent},


  { path: 'reptrainingcenter', component: RepTraingcenterComponent},
  { path: 'reptrainingcenter/:cid', component: RepTraingcenterComponent}, // cat id
  { path: 'reptrainingcenter/:cid', component: RepTraingcenterComponent,resolve : {results: ResolveService},data: { requestcondition: { trainingcategory:{}, userid:{} }, endpoint:'traininglessonlist'}},
  { path: 'reptrainingcenter/:cid/:lid', component: RepTraingcenterComponent}, // lesson id
  { path: 'manage-leads', component: ManageleadsComponent },

  { path: 'editmake/:id', component: AddAdminCategoriesComponent },

  { path: 'editmodel/:id', component: AddAdminCategoriesComponent },

  { path: 'edityear/:id', component: AddAdminCategoriesComponent },

  { path: 'edittype/:id', component: AddAdminCategoriesComponent },


  { path: 'training-reports', component: TrainingreportsComponent },

  // ___________________Newsletter MANAGEMENT_________________
  // =======================================================

  {
    path: 'newsletter-list', component: NewsletterlistsComponent, canActivate: [AuthGuard],
    resolve: { newsData: ResolveService },
    data: {
      requestcondition: {
        source: 'newsletters_view',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },


    // _____________________newsletter________________
    { path: 'newsletter/add', component: AddEditNewsletterComponent },

    {
      path: 'newsletter/list',
      component: ListingNewsletterComponent
    },
    {
      path: 'newsletter/edit/:_id',
      component: AddEditNewsletterComponent
    },
    // -----------------------------------------------

    
  // _____________________Subscriber________________
  { path: 'subscriber/add', component: AddEditSubscriberComponent },

  {
    path: 'newsletter-list',
    component: ListingSubscriptionComponent 
  },
  {
    path: 'subscriber/add-group/edit/:_id',
    component: AddEditSubscriberComponent
  },
  // -----------------------------------------------
  // -------------------------------------------



    // _____________________Subscriber GROUP________________
    { path: 'subscriber-group/add', component: AddEditSubscriberGroupComponent },

    {
      path: 'newsletter-list',
      component: ListingSubcategoryComponent 
    },
    {
      path: 'subscriber-group/edit/:_id',
      component: AddEditSubscriberGroupComponent
    },
    // -----------------------------------------------
    // -------------------------------------------
  


  // ________________________test email _____________________
  { path: 'test/add', component: AddEditTestemailComponent },
  {
    path: 'newsletter-list',
    component: LisitngTestemailappComponent 
  
  },
  {
    path: 'test/edit/:_id',
    component: AddEditTestemailComponent
    
  
    
  },
  
    // ________________________sender's list_____________________
    { path: 'sender/add', component: AddEditSenderappComponent },
    {
      path: 'newsletter-list',
      component: ListingSenderappComponent 
    },

    {
      path: 'sender/edit/:_id',
      component: AddEditSenderappComponent
      
    
      
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
