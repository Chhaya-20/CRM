import React from 'react'
import AdminNavbar from './AdminNavbar'
import '../styles/AdminPage.css'
import Sidebar from './Sidebar'
function AdminPage() {
  return (
    <>
    {/* <div className="row">
      <div className="col-2">
      <Sidebar/>
      </div>
      <div className="col-10">
        <AdminNavbar/>
        <div className='dashboard'>
         <h3
         >
         CRM Admin Dashboard</h3> 
        </div>
        <div className="cards d-lg-flex">

        <div className="card " style={{"width": "18rem"}}>
  <div className="card-body">
  <i className="fa-solid fa-user-plus"></i>
    <h5 className="card-title">Card title</h5>
   
   
  </div>
</div>
<div className="card" style={{"width": "18rem"}}>
  <div className="card-body">
  <i className="fa-solid fa-user-secret"></i>
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
   
  </div>
</div>
<div className="card" style={{"width": "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 
  </div>
</div>
<div className="card" style={{"width": "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
 
 
  </div>
</div>

        </div>

      </div>
    </div> */}
   <div className="pace  pace-inactive"><div className="pace-progress" data-progress-text="100%" data-progress="99" style={{"transform": "translate3d(100%, 0px, 0px)"}}>
  <div className="pace-progress-inner"></div>
</div>
<div className="pace-activity"></div></div>

<div id="preloader" style={{"display": "none,"}}>
         <div id="status" style={{"display": "none,"}}></div>
      </div>

      <div className="wrapper">
         <header className="main-header">
            <a href="index.html" className="logo">
         
               <span className="logo-mini">
               <img src="assets/dist/img/mini-logo.png" alt=""/>
               </span>
               <span className="logo-lg">
               <img src="assets/dist/img/logo.png" alt=""/>
               </span>
            </a>
          
            <nav className="navbar navbar-static-top">
               <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                
                  <span className="sr-only">Toggle navigation</span>
                  <span className="pe-7s-angle-left-circle"></span>
               </a>
               
               <a href="#search"><span className="pe-7s-search"></span></a>
               <div id="search">
                 <button type="button" className="close">×</button>
                 <form>
                   <input type="search" value="" placeholder="Search.."/>
                   <button type="submit" className="btn btn-add">Search...</button>
                </form>
             </div>
             <div className="navbar-custom-menu">
                  <ul className="nav navbar-nav">

                     <li className="dropdown messages-menu">
                        <a href="#" className="dropdown-toggle admin-notification" data-toggle="dropdown"> 
                        <i className="pe-7s-cart"></i>
                        <span className="label label-primary">5</span>
                        </a>
                        <ul className="dropdown-menu">
                           <li>
                              <div className="slimScrollDiv" style={{"position": "relative", "overflow": "hidden", "width": "auto", "height": "200px"}}><ul className="menu" style={{"overflow": "hidden", "width": "100%", "height": "200px"}}>
                                 <li>
                                  
                                    <a href="#" className="border-gray">
                                       <div className="pull-left">
                                          <img src="assets/dist/img/basketball-jersey.png" className="img-thumbnail" alt="User Image"/>
                                       </div>
                                       <h4>polo shirt</h4>
                                       <p><strong>total item:</strong> 21
                                       </p>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#" className="border-gray">
                                       <div className="pull-left">
                                          <img src="assets/dist/img/shirt.png" className="img-thumbnail" alt="User Image"/>
                                       </div>
                                       <h4>Kits</h4>
                                       <p><strong>total item:</strong> 11
                                       </p>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#" className="border-gray">
                                       <div className="pull-left">
                                          <img src="assets/dist/img/football.png" className="img-thumbnail" alt="User Image"/>
                                       </div>
                                       <h4>Football</h4>
                                       <p><strong>total item:</strong> 16
                                       </p>
                                    </a>
                                 </li>
                                 <li className="nav-list">
                                    <a href="#" className="border-gray">
                                       <div className="pull-left">
                                          <img src="assets/dist/img/shoe.png" className="img-thumbnail" alt="User Image"/>
                                       </div>
                                       <h4>Sports sheos</h4>
                                       <p><strong>total item:</strong> 10
                                       </p>
                                    </a>
                                 </li>
                              </ul>
                              <div className="slimScrollBar" style={{"background": "rgb(0, 0, 0)", "width": "3px", "position": "absolute",
                               "top": "0px", "opacity": "0.4", "display": "block", "borderRadius": "7px", "zIndex": "99",
                                "right": "1px"}}></div>
                                <div className="slimScrollRail" style={{"width": "3px", "height": "100%", "position": "absolute", "top": "0px"
                                 ,"display": "none", "borderRadius": "7px", "background": "rgb(51, 51, 51)",
                                  "opacity": "0.2", "zIndex": "90", "right": "1px"}}></div></div>
                           </li>
                        </ul>
                     </li>
                   
                     <li className="dropdown messages-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="pe-7s-mail"></i>
                        <span className="label label-success">4</span>
                        </a>
                        <ul className="dropdown-menu">
                           <li>
                              <div className="slimScrollDiv" style={{"position": "relative", "overflow": "hidden", "width": "auto",
                               "height": "200px"}}><ul className="menu" style={{"overflow": "hidden", "width": "100%", "height": "200px"}}>
                                 <li>
                                   
                                    <a href="#" className="border-gray">
                                       <div className="pull-left">
                                          <img src="assets/dist/img/avatar.png" className="img-circle" alt="User Image"/>
                                       </div>
                                       <h4>Ronaldo</h4>
                                       <p>Please oreder 10 pices of kits..</p>
                                       <span className="badge badge-success badge-massege"><small>15 hours ago</small>
                                       </span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#" className="border-gray">
                                       <div className="pull-left">
                                          <img src="assets/dist/img/avatar2.png" className="img-circle" alt="User Image"/>
                                       </div>
                                       <h4>Leo messi</h4>
                                       <p>Please oreder 10 pices of Sheos..</p>
                                       <span className="badge badge-info badge-massege"><small>6 days ago</small>
                                       </span>   
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#" className="border-gray">
                                       <div className="pull-left">
                                          <img src="assets/dist/img/avatar3.png" className="img-circle" alt="User Image"/>
                                       </div>
                                       <h4>Modric</h4>
                                       <p>Please oreder 6 pices of bats..</p>
                                       <span className="badge badge-info badge-massege"><small>1 hour ago</small>
                                       </span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#" className="border-gray">
                                       <div className="pull-left">
                                          <img src="assets/dist/img/avatar4.png" className="img-circle" alt="User Image"/>
                                       </div>
                                       <h4>Salman</h4>
                                       <p>Hello i want 4 uefa footballs</p>
                                       <span className="badge badge-danger badge-massege">
                                       <small>6 days ago</small>
                                       </span>  
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#" className="border-gray">
                                       <div className="pull-left">
                                          <img src="assets/dist/img/avatar5.png" className="img-circle" alt="User Image"/>
                                       </div>
                                       <h4>Sergio Ramos</h4>
                                       <p>Hello i want 9 uefa footballs</p>
                                       <span className="badge badge-info badge-massege"><small>5 hours ago</small>
                                       </span>
                                    </a>
                                 </li>
                              </ul><div className="slimScrollBar" style={{"background": "rgb(0, 0, 0)", "width": "3px", "position": "absolute",  "top": "0px" ,  "opacity": "0.4", "display": "block", "borderRadius": "7px","zIndex": "99",
                               "right": "1px"}}></div>
                              <div className="slimScrollRail" style={{"width": "3px", "height": "100%", "position": "absolute", "top": "0px",
                               "display": "none", "borderRadius": "7px", "background": "rgb(51, 51, 51)", "opacity": "0.2", "zIndex": "90", "right": "1px"}}></div></div>
                           </li>
                        </ul>
                     </li>
                  
                     <li className="dropdown notifications-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="pe-7s-bell"></i>
                        <span className="label label-warning">7</span>
                        </a>
                        <ul className="dropdown-menu">
                           <li>
                              <div className="slimScrollDiv" style={{"position": "relative", "overflow": "hidden", "width": "auto", "height": "200px"}}><ul className="menu" style={{"overflow": "hidden", "width": "100%", "height": "200px"}}>
                                 <li>
                                    <a href="#" className="border-gray">
                                    <i className="fa fa-dot-circle-o color-green"></i>Change Your font style</a>
                                 </li>
                                 <li><a href="#" className="border-gray">
                                    <i className="fa fa-dot-circle-o color-red"></i>
                                    check the system ststus..</a>
                                 </li>
                                 <li><a href="#" className="border-gray">
                                    <i className="fa fa-dot-circle-o color-yellow"></i>
                                    Add more admin...</a>
                                 </li>
                                 <li><a href="#" className="border-gray">
                                    <i className="fa fa-dot-circle-o color-violet"></i> Add more clients and order</a>
                                 </li>
                                 <li><a href="#" className="border-gray">
                                    <i className="fa fa-dot-circle-o color-yellow"></i>
                                    Add more admin...</a>
                                 </li>
                                 <li><a href="#" className="border-gray">
                                    <i className="fa fa-dot-circle-o color-violet"></i> Add more clients and order</a>
                                 </li>
                              </ul><div className="slimScrollBar" style={{"background": "rgb(0, 0, 0)", "width": "3px", "position": "absolute", "top": "0px", "opacity": "0.4", "display": "block", "borderRadius": "7px", "zIndex": "99", "right": "1px"}}></div><div className="slimScrollRail"
                               style={{"width": "3px", "height": "100%", "position": "absolute", "top": "0px", "display": "none", "borderRadius": "7px", "background": "rgb(51, 51, 51)", "opacity": "0.2", "zIndex": "90", "right": "1px"}}></div></div>
                           </li>
                        </ul>
                     </li>
                
                     <li className="dropdown tasks-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="pe-7s-note2"></i>
                        <span className="label label-danger">6</span>
                        </a>
                        <ul className="dropdown-menu">
                           <li>
                              <div className="slimScrollDiv" style={{"position": "relative", "overflow": "hidden", "width": "auto", "height": "200px"}}><ul className="menu" style={{"overflow": "hidden", "width": "100%", "height": "200px"}}>
                                 <li>
                              
                                    <a href="#" className="border-gray">
                                       <span className="label label-success pull-right">50%</span>
                                       <h3><i className="fa fa-check-circle"></i> Theme color should be change</h3>
                                    </a>
                                 </li>
                               
                                 <li>
                                 
                                    <a href="#" className="border-gray">
                                       <span className="label label-warning pull-right">90%</span>
                                       <h3><i className="fa fa-check-circle"></i> Fix Error and bugs</h3>
                                    </a>
                                 </li>
                               
                                 <li>
                             
                                    <a href="#" className="border-gray">
                                       <span className="label label-danger pull-right">80%</span>
                                       <h3><i className="fa fa-check-circle"></i> Sidebar color change</h3>
                                    </a>
                                 </li>
                                 
                                 <li>
                                 
                                    <a href="#" className="border-gray">
                                       <span className="label label-info pull-right">30%</span>   
                                       <h3><i className="fa fa-check-circle"></i> font-family should be change</h3>
                                    </a>
                                 </li>
                                 <li>
                                  
                                    <a href="#" className="border-gray">
                                       <span className="label label-success pull-right">60%</span>
                                       <h3><i className="fa fa-check-circle"></i> Fix the database Error</h3>
                                    </a>
                                 </li>
                                 <li>
                                   
                                    <a href="#" className="border-gray">
                                       <span className="label label-info pull-right">20%</span>
                                       <h3><i className="fa fa-check-circle"></i> data table data missing</h3>
                                    </a>
                                 </li>
                             
                              </ul><div className="slimScrollBar" style={{"background": "rgb(0, 0, 0)", "width": "3px", "position": "absolute", "top": "0px", "opacity": "0.4", "display": "block", "borderRadius": "7px", "zIndex": "99", "right":" 1px"}}></div><div className="slimScrollRail" style={{"width": "3px", "height":" 100%", "position": "absolute", "top": "0px", "display": "none", "borderRadius": "7px", "background": "rgb(51, 51, 51)", "opacity":"0.2", "zIndex": "90", "right": "1px"}}></div></div>
                           </li>
                        </ul>
                     </li>
                
                     <li className="dropdown dropdown-help hidden-xs">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="pe-7s-settings"></i></a>
                        <ul className="dropdown-menu">
                           <li>
                              <a href="profile.html">
                              <i className="fa fa-line-chart"></i> Networking</a>
                           </li>
                           <li><a href="#"><i className="fa fa fa-bullhorn"></i> Lan settings</a></li>
                           <li><a href="#"><i className="fa fa-bar-chart"></i> Settings</a></li>
                           <li><a href="login.html">
                              <i className="fa fa-wifi"></i> wifi</a>
                           </li>
                        </ul>
                     </li>
                   
                     <li className="dropdown dropdown-user">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <img src="assets/dist/img/avatar5.png" className="img-circle" width="45" height="45" alt="user"/></a>
                        <ul className="dropdown-menu">
                           <li>
                              <a href="profile.html">
                              <i className="fa fa-user"></i> User Profile</a>
                           </li>
                           <li><a href="#"><i className="fa fa-inbox"></i> Inbox</a></li>
                           <li><a href="login.html">
                              <i className="fa fa-sign-out"></i> Signout</a>
                           </li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </nav>
         </header>
       
         <aside className="main-sidebar">
        
            <div className="sidebar" style={{"height": "auto"}}>

               <ul className="sidebar-menu">
                  <li className="active">
                     <a href="index.html"><i className="fa fa-tachometer"></i><span>Dashboard</span>
                     <span className="pull-right-container">
                     </span>
                     </a>
                  </li>
                  <li className="treeview">
                     <a href="#">
                     <i className="fa fa-users"></i><span>Customers</span>
                     <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul className="treeview-menu">
                        <li><a href="add-customer.html">Add Customer</a></li>
                        <li><a href="clist.html">List</a></li>
                        <li><a href="group.html">Groups</a></li>
                     </ul>
                  </li>
                  <li className="treeview">
                     <a href="#">
                     <i className="fa fa-shopping-basket"></i><span>Transaction</span>
                     <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul className="treeview-menu">
                        <li><a href="deposit.html">New Deposit</a></li>
                        <li><a href="expense.html">New Expense</a></li>
                        <li><a href="transfer.html">Transfer</a></li>
                        <li><a href="view-tsaction.html">View transaction</a></li>
                        <li><a href="balance.html">Balance Sheet</a></li>
                        <li><a href="treport.html">Transfer Report</a></li>
                     </ul>
                  </li>
                  <li className="treeview">
                     <a href="#">
                     <i className="fa fa-shopping-cart"></i><span>Sales</span>
                     <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul className="treeview-menu">
                        <li><a href="invoice.html">Invoices</a></li>
                        <li><a href="ninvoices.html">New Invoices</a></li>
                        <li><a href="recurring.html">Recurring invoices</a></li>
                        <li><a href="nrecurring.html">New Recurring invoices</a></li>
                        <li><a href="quote.html">quotes</a></li>
                        <li><a href="nquote.html">New quote</a></li>
                        <li><a href="payment.html">Payments</a></li>
                        <li><a href="taxeport.html">Tax Rates</a></li>
                     </ul>
                  </li>
                  <li className="treeview">
                     <a href="#">
                     <i className="fa fa-book"></i><span>Task</span>
                     <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul className="treeview-menu">
                        <li><a href="rtask.html">Running Task</a></li>
                        <li><a href="atask.html">Archive Task</a></li>
                     </ul>
                  </li>
                  <li className="treeview">
                     <a href="#">
                     <i className="fa fa-shopping-bag"></i><span>Accounting</span>
                     <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul className="treeview-menu">
                        <li><a href="cpayment.html">Client payment</a></li>
                        <li><a href="emanage.html">Expense management</a></li>
                        <li><a href="ecategory.html">Expense Category</a></li>
                     </ul>
                  </li>
                  <li className="treeview">
                     <a href="#">
                     <i className="fa fa-file-text"></i><span>Report</span>
                     <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul className="treeview-menu">
                        <li><a href="preport.html">Project Report</a></li>
                        <li><a href="creport.html">Client Report</a></li>
                        <li><a href="ereport.html">Expense Report</a></li>
                        <li><a href="incomexp.html">Income expense comparesion</a></li>
                     </ul>
                  </li>
                  <li className="treeview">
                     <a href="#">
                     <i className="fa fa-bell"></i><span>Attendance</span>
                     <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul className="treeview-menu">
                        <li><a href="thistory.html">Time History</a></li>
                        <li><a href="timechange.html">Time Change Request</a></li>
                        <li><a href="atreport.html">Attendance Report</a></li>
                     </ul>
                  </li>
                  <li className="treeview">
                     <a href="#">
                     <i className="fa fa-edit"></i><span>Recruitment</span>
                     <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul className="treeview-menu">
                        <li><a href="jpost.html">Jobs Posted</a></li>
                        <li><a href="japp.html">Jobs Application</a></li>
                     </ul>
                  </li>
                  <li className="treeview">
                     <a href="#">
                     <i className="fa fa-shopping-basket"></i><span>payroll</span>
                     <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul className="treeview-menu">
                        <li><a href="salary.html">Salary Template</a></li>
                        <li><a href="hourly.html">Hourly</a></li>
                        <li><a href="managesal.html">Manage salary</a></li>
                        <li><a href="empsallist.html">Employee salary list</a></li>
                        <li><a href="mpayment.html">Make payment</a></li>
                        <li><a href="generatepay.html">Generate payslip</a></li>
                        <li><a href="paysum.html">Payroll summary</a></li>
                     </ul>
                  </li>
                  <li className="treeview">
                     <a href="#">
                     <i className="fa fa-bitbucket-square"></i><span>Stock</span>
                     <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul className="treeview-menu">
                        <li><a href="stockcat.html">Stock category</a></li>
                        <li><a href="manstock.html">Manage Stock</a></li>
                        <li><a href="astock.html">Assign stock</a></li>
                     </ul>
                  </li>
                  <li className="treeview">
                     <a href="#">
                     <i className="fa fa-ticket"></i><span>Tickets</span>
                     <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul className="treeview-menu">
                        <li><a href="ticanswer.html">Answered</a></li>
                        <li><a href="ticopen.html">Open</a></li>
                        <li><a href="iprocess.html">Inprocess</a></li>
                        <li><a href="close.html">CLosed</a></li>
                        <li><a href="allticket.html">All Tickets</a></li>
                     </ul>
                  </li>
                  <li className="treeview">
                     <a href="#">
                     <i className="fa fa-list"></i>
                     <span>Utilities</span>
                     <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul className="treeview-menu">
                        <li><a href="ativitylog.html">Activity Log</a></li>
                        <li><a href="emailmes.html">Email message log</a></li>
                        <li><a href="systemsts.html">System status</a></li>
                     </ul>
                  </li>
                  <li className="treeview">
                     <a href="#">
                     <i className="fa fa-bar-chart"></i><span>Charts</span>
                     <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul className="treeview-menu">
                        <li className=""><a href="charts_flot.html">Flot Chart</a></li>
                        <li><a href="charts_Js.html">Chart js</a></li>
                        <li><a href="charts_morris.html">Morris Charts</a></li>
                        <li><a href="charts_sparkline.html">Sparkline Charts</a></li>
                     </ul>
                  </li>
                  <li className="treeview">
                     <a href="#">
                     <i className="fa fa-briefcase"></i>
                     <span>Icons</span>
                     <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul className="treeview-menu">
                        <li><a href="icons_bootstrap.html">Bootstrap Icons</a></li>
                        <li><a href="icons_fontawesome.html">Fontawesome Icon</a></li>
                        <li><a href="icons_flag.html">Flag Icons</a></li>
                        <li><a href="icons_material.html">Material Icons</a></li>
                        <li><a href="icons_weather.html">Weather Icons </a></li>
                        <li><a href="icons_line.html">Line Icons</a></li>
                        <li><a href="icons_pe.html">Pe Icons</a></li>
                        <li><a href="icon_socicon.html">Socicon Icons</a></li>
                     </ul>
                  </li>
                  <li className="treeview">
                     <a href="#">
                     <i className="fa fa-list"></i> <span>Other page</span>
                     <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul className="treeview-menu">
                        <li><a href="login.html">Login</a></li>
                        <li><a href="register.html">Register</a></li>
                        <li><a href="profile.html">Profile</a></li>
                        <li><a href="forget_password.html">Forget password</a></li>
                        <li><a href="lockscreen.html">Lockscreen</a></li>
                        <li><a href="404.html">404 Error</a></li>
                        <li><a href="505.html">505 Error</a></li>
                        <li><a href="blank.html">Blank Page</a></li>
                     </ul>
                  </li>
                  <li className="treeview">
                     <a href="#">
                     <i className="fa fa-bitbucket"></i><span>UI Elements</span>
                     <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul className="treeview-menu">
                        <li><a href="buttons.html">Buttons</a></li>
                        <li><a href="tabs.html">Tabs</a></li>
                        <li><a href="notification.html">Notification</a></li>
                        <li><a href="tree-view.html">Tree View</a></li>
                        <li><a href="progressbars.html">Progressber</a></li>
                        <li><a href="list.html">List View</a></li>
                        <li><a href="typography.html">Typography</a></li>
                        <li><a href="panels.html">Panels</a></li>
                        <li><a href="modals.html">Modals</a></li>
                        <li><a href="icheck_toggle_pagination.html">iCheck, Toggle, Pagination</a></li>
                        <li><a href="labels-badges-alerts.html">Labels, Badges, Alerts</a></li>
                     </ul>
                  </li>
                  <li className="treeview">
                     <a href="#">
                     <i className="fa fa-gear"></i>
                     <span>settings</span>
                     <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                     </span>
                     </a>
                     <ul className="treeview-menu">
                        <li><a href="gsetting.html">Genaral settings</a></li>
                        <li><a href="stfsetting.html">Staff settings</a></li>
                        <li><a href="emailsetting.html">Email settings</a></li>
                        <li><a href="paysetting.html">Payment</a></li>
                     </ul>
                  </li>
                  <li>
                     <a href="company.html">
                     <i className="fa fa-home"></i> <span>Companies</span>
                     <span className="pull-right-container">
                     </span>
                     </a>
                  </li>
                  <li>
                     <a href="holiday.html">
                     <i className="fa fa-stop-circle"></i> <span>Public Holiday</span>
                     <span className="pull-right-container">
                     </span>
                     </a>
                  </li>
                  <li>
                     <a href="user.html">
                     <i className="fa fa-user-circle"></i><span>User</span>
                     <span className="pull-right-container">
                     </span>
                     </a>
                  </li>
                  <li>
                     <a href="items.html">
                     <i className="fa fa-file-o"></i><span>Items</span>
                     <span className="pull-right-container">
                     </span>
                     </a>
                  </li>
                  <li>
                     <a href="department.html">
                     <i className="fa fa-tree"></i><span>Departments</span>
                     <span className="pull-right-container">
                     </span>
                     </a>
                  </li>
                  <li>
                     <a href="document.html">
                     <i className="fa fa-file-text"></i> <span>Documents</span>
                     <span className="pull-right-container">
                     </span>
                     </a>
                  </li>
                  <li>
                     <a href="train.html">
                     <i className="fa fa-clock-o"></i><span>Training</span>
                     <span className="pull-right-container">
                     </span>
                     </a>
                  </li>
                  <li>
                     <a href="calender.html">
                     <i className="fa fa-calendar"></i> <span>Calender</span>
                     <span className="pull-right-container">
                     </span>
                     </a>
                  </li>
                  <li>
                     <a href="notice.html">
                     <i className="fa fa-file-text"></i> <span>Notice Board</span>
                     <span className="pull-right-container">
                     </span>
                     </a>
                  </li>
                  <li>
                     <a href="message.html">
                     <i className="fa fa-envelope-o"></i> <span>Message</span>
                     <span className="pull-right-container">
                     </span>
                     </a>
                  </li>
                  <li>
                     <a href="note.html">
                     <i className="fa fa-comment"></i> <span>Notes</span>
                     <span className="pull-right-container">
                     </span>
                     </a>
                  </li>
               </ul>
            </div>
           
         </aside>
       
         <div className="content-wrapper" style={{"min-height": "1276px"}}>
          
            <section className="content-header">
               <div className="header-icon">
                  <i className="fa fa-dashboard"></i>
               </div>
               <div className="header-title">
                  <h1>CRM Admin Dashboard</h1>
                  <small>Very detailed &amp, featured admin.</small>
               </div>
            </section>
         
            <section className="content">
               <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                     <div id="cardbox1">
                        <div className="statistic-box">
                           <i className="fa fa-user-plus fa-3x"></i>
                           <div className="counter-number pull-right">
                              <span className="count-number">11</span> 
                              <span className="slight"><i className="fa fa-play fa-rotate-270"> </i>
                              </span>
                           </div>
                           <h3> Active Client</h3>
                        </div>
                     </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                     <div id="cardbox2">
                        <div className="statistic-box">
                           <i className="fa fa-user-secret fa-3x"></i>
                           <div className="counter-number pull-right">
                              <span className="count-number">4</span> 
                              <span className="slight"><i className="fa fa-play fa-rotate-270"> </i>
                              </span>
                           </div>
                           <h3>  Active Admin</h3>
                        </div>
                     </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                     <div id="cardbox3">
                        <div className="statistic-box">
                           <i className="fa fa-money fa-3x"></i>
                           <div className="counter-number pull-right">
                              <i className="ti ti-money"></i><span className="count-number">965</span> 
                              <span className="slight"><i className="fa fa-play fa-rotate-270"> </i>
                              </span>
                           </div>
                           <h3>  Total Expenses</h3>
                        </div>
                     </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                     <div id="cardbox4">
                        <div className="statistic-box">
                           <i className="fa fa-files-o fa-3x"></i>
                           <div className="counter-number pull-right">
                              <span className="count-number">11</span> 
                              <span className="slight"><i className="fa fa-play fa-rotate-270"> </i>
                              </span>
                           </div>
                           <h3> Running Projects</h3>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="lCEeUiR8wK">
                     <div className="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="lCEeUiR8wK" data-index="0">
                        <div className="panel-heading ui-sortable-handle">
                           <div className="panel-title" style={{"maxWidth": "calc(100% - 90px)"}}>
                              <h4>Upcoming Events</h4>
                           </div>
                        <div className="dropdown"><ul className="dropdown-menu dropdown-menu-right"><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-move"></i><span className="control-title">Unpin</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-minus"></i><span className="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-fullscreen"></i><span className="control-title">Fullscreen</span></a></li></ul><div className="dropdown-toggle" data-toggle="dropdown"><span className="panel-control-icon glyphicon glyphicon-cog"></span></div></div></div>
                        <div className="panel-body">
                           <div className="work-touchpoint">
                              <div className="work-touchpoint-date">
                                 <span className="day">28</span>
                                 <span className="month">Apr</span>
                              </div>
                           </div>
                           <div className="detailswork">
                              <span className="label-custom label label-default pull-right">Email</span>
                              <a href="#" title="headings">Marketing policy</a> <br/>
                              <p>Green Road - Dhaka,Bangladesh</p>
                           </div>
                           <div className="work-touchpoint">
                              <div className="work-touchpoint-date">
                                 <span className="day">2</span>
                                 <span className="month">Apr</span>
                              </div>
                           </div>
                           <div className="detailswork">
                              <span className="label-custom label label-default pull-right">skype</span>
                              <a href="#" title="headings">Accounting policy</a> <br/>
                              <p>Kolkata, India</p>
                           </div>
                           <div className="work-touchpoint">
                              <div className="work-touchpoint-date2">
                                 <span className="day">17</span>
                                 <span className="month">Mrc</span>
                              </div>
                           </div>
                           <div className="detailswork">
                              <span className="label-custom label label-default pull-right">phone</span>
                              <a href="#" title="headings">Marketing policy</a> <br/>
                              <p>Madrid  - spain</p>
                           </div>
                           <div className="work-touchpoint">
                              <div className="work-touchpoint-date2">
                                 <span className="day">3</span>
                                 <span className="month">jan</span>
                              </div>
                           </div>
                           <div className="detailswork">
                              <span className="label-custom label label-default pull-right">Mobile</span>
                              <a href="#" title="headings">Finance policy</a> <br/>
                              <p>south Australia  - Australia</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="RZiryQXSOS">
                     <div className="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="RZiryQXSOS" data-index="0">
                        <div className="panel-heading ui-sortable-handle">
                           <div className="panel-title" style={{"maxWidth": "calc(100% - 90px)"}}>
                              <h4>Running Projects</h4>
                           </div>
                        <div className="dropdown"><ul className="dropdown-menu dropdown-menu-right"><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-move"></i><span className="control-title">Unpin</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-minus"></i><span className="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-fullscreen"></i><span className="control-title">Fullscreen</span></a></li></ul><div className="dropdown-toggle" data-toggle="dropdown"><span className="panel-control-icon glyphicon glyphicon-cog"></span></div></div></div>
                        <div className="panel-body">
                           <div className="runnigwork">
                              <span className="label-danger label label-default pull-right">Failed</span>
                              <i className="fa fa-dot-circle-o"></i>        
                              <a href="#">Database configuration</a><br/>                          
                              <div className="progress runningprogress">
                                 <div className="progress-bar progress-bar-striped" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="" data-original-title="25%"></div>
                              </div>
                           </div>
                           <div className="runnigwork">
                              <span className="label-warning label label-default pull-right">progressing</span>
                              <i className="fa fa-dot-circle-o"></i>        
                              <a href="#">Design tool</a><br/>                          
                              <div className="progress runningprogress">
                                 <div className="progress-bar progress-bar-striped" role="progressbar" style={{"width": "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="" data-original-title="15%"></div>
                              </div>
                           </div>
                           <div className="runnigwork">
                              <span className="label-success label label-default pull-right">progressing</span>
                              <i className="fa fa-dot-circle-o"></i>        
                              <a href="#">Internet configuration</a><br/>                          
                              <div className="progress runningprogress">
                                 <div className="progress-bar progress-bar-striped" role="progressbar" style={{"width": "45%"}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="" data-original-title="45%"></div>
                              </div>
                           </div>
                           <div className="runnigwork">
                              <span className="label-info label label-default pull-right">progressing</span>
                              <i className="fa fa-dot-circle-o"></i>        
                              <a href="#">Banner completation</a><br/>                          
                              <div className="progress runningprogress">
                                 <div className="progress-bar progress-bar-striped" role="progressbar" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="" data-original-title="75%"></div>
                              </div>
                           </div>
                           <div className="runnigwork">
                              <span className="label-success label label-default pull-right">Success</span>
                              <i className="fa fa-dot-circle-o"></i>        
                              <a href="#">IT Solution</a><br/>                          
                              <div className="progress runningprogress">
                                 <div className="progress-bar progress-bar-striped" role="progressbar" style={{"width": "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="" data-original-title="50%"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="RDelnWiHn1">
                     <div className="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="RDelnWiHn1" data-index="0">
                        <div className="panel-heading ui-sortable-handle">
                           <div className="panel-title" style={{"maxWidth": "calc(100% - 90px)"}}>
                              <h4>Pending Works</h4>
                           </div>
                        <div className="dropdown"><ul className="dropdown-menu dropdown-menu-right"><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-move"></i><span className="control-title">Unpin</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-minus"></i><span className="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-fullscreen"></i><span className="control-title">Fullscreen</span></a></li></ul><div className="dropdown-toggle" data-toggle="dropdown"><span className="panel-control-icon glyphicon glyphicon-cog"></span></div></div></div>
                        <div className="panel-body">
                           <div className="Pendingwork">
                              <span className="label-warning label label-default pull-right">progressing</span>
                              <i className="fa fa-ban"></i>
                              <a href="#">Database tools</a>                          
                              <div className="upworkdate">
                                 <p>Jul 25, 2017 for Alimul Alrazy</p>
                              </div>
                           </div>
                           <div className="Pendingwork">
                              <span className="label-success label label-default pull-right">success</span>
                              <i className="fa fa-ban"></i>
                              <a href="#">Cabels</a>                          
                              <div className="upworkdate">
                                 <p>Jul 25, 2017 for Alimul</p>
                              </div>
                           </div>
                           <div className="Pendingwork">
                              <span className="label-danger label label-default pull-right">Failed</span>
                              <i className="fa fa-ban"></i>
                              <a href="#">Technologycal tools</a>                          
                              <div className="upworkdate">
                                 <p>Feb 25, 2017 for Alrazy</p>
                              </div>
                           </div>
                           <div className="Pendingwork">
                              <span className="label-warning label label-default pull-right">progressing</span>
                              <i className="fa fa-ban"></i>
                              <a href="#">Transaction</a>                          
                              <div className="upworkdate">
                                 <p>apr 25, 2017 for Mahfuz</p>
                              </div>
                           </div>
                           <div className="Pendingwork">
                              <span className="label-success label label-default pull-right">success</span>
                              <i className="fa fa-ban"></i>
                              <a href="#">Training tools</a>                          
                              <div className="upworkdate">
                                 <p>jun 25, 2017 for Alrazy</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="Xqi0BfkQgq">
                     <div className="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="Xqi0BfkQgq" data-index="0">
                        <div className="panel-heading ui-sortable-handle">
                           <div className="panel-title" style={{"maxWidth": "calc(100% - 90px)"}}>
                              <h4>Works Deadlines</h4>
                           </div>
                        <div className="dropdown"><ul className="dropdown-menu dropdown-menu-right"><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-move"></i><span className="control-title">Unpin</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-minus"></i><span className="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-fullscreen"></i><span className="control-title">Fullscreen</span></a></li></ul><div className="dropdown-toggle" data-toggle="dropdown"><span className="panel-control-icon glyphicon glyphicon-cog"></span></div></div></div>
                        <div className="panel-body">
                           <div className="Workslist">
                              <div className="worklistdate">
                                 <table className="table table-hover">
                                    <thead>
                                       <tr>
                                          <th>Task Name</th>
                                          <th>End Deadlines</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr className="info">
                                          <th scope="row">Alrazy</th>
                                          <td>Feb 25,2017</td>
                                       </tr>
                                       <tr>
                                          <th scope="row">Jahir</th>
                                          <td>jun 05,2017</td>
                                       </tr>
                                       <tr>
                                          <th scope="row">Sayeed</th>
                                          <td>Feb 05,2017</td>
                                       </tr>
                                       <tr>
                                          <th scope="row">Shipon</th>
                                          <td>jun 25,2017</td>
                                       </tr>
                                       <tr>
                                          <th scope="row">Rafi</th>
                                          <td>Jul 15,2017</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="QwbK97luup">
                     <div className="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="QwbK97luup" data-index="0">
                        <div className="panel-heading ui-sortable-handle">
                           <div className="panel-title" style={{"maxWidth": "calc(100% - 90px)"}}>
                              <h4>Works Announcements</h4>
                           </div>
                        <div className="dropdown"><ul className="dropdown-menu dropdown-menu-right"><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-move"></i><span className="control-title">Unpin</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-minus"></i><span className="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-fullscreen"></i><span className="control-title">Fullscreen</span></a></li></ul><div className="dropdown-toggle" data-toggle="dropdown"><span className="panel-control-icon glyphicon glyphicon-cog"></span></div></div></div>
                        <div className="panel-body">
                           <div className="Workslist">
                              <div className="worklistdate">
                                 <table className="table table-hover">
                                    <thead>
                                       <tr>
                                          <th>Works Type</th>
                                          <th>Name Of Worker</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr className="info">
                                          <td>Web Design</td>
                                          <td>Jr. Developer Alrazy</td>
                                       </tr>
                                       <tr>
                                          <td>Networking</td>
                                          <td>Jr. Developer Jahir</td>
                                       </tr>
                                       <tr>
                                          <td>Megento</td>
                                          <td>Jr. Developer Sayeed</td>
                                       </tr>
                                       <tr>
                                          <td>Php,Laravel</td>
                                          <td>Jr. Developer Muhim</td>
                                       </tr>
                                       <tr>
                                          <td>Html,css</td>
                                          <td>Frontend Developer Rafi</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="8cFXhPeBgg">
                     <div className="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="8cFXhPeBgg" data-index="0">
                        <div className="panel-heading ui-sortable-handle">
                           <div className="panel-title" style={{"maxWidth": "calc(100% - 90px)"}}>
                              <h4>Notice Board</h4>
                           </div>
                        <div className="dropdown"><ul className="dropdown-menu dropdown-menu-right"><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-move"></i><span className="control-title">Unpin</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-minus"></i><span className="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-fullscreen"></i><span className="control-title">Fullscreen</span></a></li></ul><div className="dropdown-toggle" data-toggle="dropdown"><span className="panel-control-icon glyphicon glyphicon-cog"></span></div></div></div>
                        <div className="panel-body">
                           <div className="Workslist">
                              <div className="worklistdate">
                                 <table className="table table-hover">
                                    <thead>
                                       <tr>
                                          <th>Notice</th>
                                          <th>Published By</th>
                                          <th>Date Added</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr className="info">
                                          <td>new notice</td>
                                          <td>Mr. Alrazy</td>
                                          <td>20th April 2017</td>
                                       </tr>
                                       <tr>
                                          <td>Urgent notice</td>
                                          <td>Mr. Alrazy</td>
                                          <td>20th june 2017</td>
                                       </tr>
                                       <tr>
                                          <td>Urgent notice</td>
                                          <td>Mr. Jahir</td>
                                          <td>26th june 2017</td>
                                       </tr>
                                       <tr>
                                          <td>Urgent notice</td>
                                          <td>Mr. leo</td>
                                          <td>3rd june 2017</td>
                                       </tr>
                                       <tr>
                                          <td>Notice</td>
                                          <td>Mr. Karim</td>
                                          <td>3rd July 2017</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="YgOkvuqwOH">
                     <div className="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="YgOkvuqwOH" data-index="0">
                        <div className="panel-heading ui-sortable-handle">
                           <div className="panel-title" style={{"maxWidth": "calc(100% - 90px)"}}>
                              <h4>This Year Earnings &amp, Expenses(Bar chart)</h4>
                           </div>
                        <div className="dropdown"><ul className="dropdown-menu dropdown-menu-right"><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-move"></i><span className="control-title">Unpin</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-minus"></i><span className="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-fullscreen"></i><span className="control-title">Fullscreen</span></a></li></ul><div className="dropdown-toggle" data-toggle="dropdown"><span className="panel-control-icon glyphicon glyphicon-cog"></span></div></div></div>
                        <div className="panel-body"><iframe className="chartjs-hidden-iframe" tabIndex="-1" style={{"display": "block", "overflow": "hidden", "border": "0px", "margin": "0px", "inset": "0px", "height": "100%", "width": "100%", "position":
                         "absolute", "pointerEvents": "none", "zIndex": "-1"}}></iframe>
                           <canvas id="barChart" height="483" width="967" style={{"display": "block", "height": "387px", "width": "774px"}}></canvas>
                        </div>
                     </div>
                  </div>
                
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="3P0qgsqn49">
                     <div className="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="3P0qgsqn49" data-index="0">
                        <div className="panel-heading ui-sortable-handle">
                           <div className="panel-title" style={{"maxWidth": "calc(100% - 90px)"}}>
                              <h4>Weekly Earnings &amp, Expenses</h4>
                           </div>
                        <div className="dropdown"><ul className="dropdown-menu dropdown-menu-right"><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-move"></i><span className="control-title">Unpin</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-minus"></i><span className="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-fullscreen"></i><span className="control-title">Fullscreen</span></a></li></ul><div className="dropdown-toggle" data-toggle="dropdown"><span className="panel-control-icon glyphicon glyphicon-cog"></span></div></div></div>
                        <div className="panel-body"><iframe className="chartjs-hidden-iframe" tabIndex="-1" style={{"display": "block", "overflow": "hidden", "border": "0px", "margin": "0px", "inset": "0px", "height": "100%", "width": "100%", "position": "absolute", "pointerEvents": "none","zIndex": "-1"}}></iframe>
                           <canvas id="singelBarChart" height="480" width="446" style={{"display": "block", "height": "384px", "width": "357px"}}></canvas>
                        </div>
                     </div>
                  </div>
               </div>
             
            
               <div className="row">
                  <div className="col-xs-12 col-sm-8 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="LGS66xP39L">
                     <div className="panel panel-bd lobidrag lobipanel lobipanel-sortable" data-inner-id="LGS66xP39L" data-index="0">
                        <div className="panel-heading ui-sortable-handle">
                           <div className="panel-title" style={{"maxWidth": "calc(100% - 180px)"}}>
                              <h4>Google Map</h4>
                           </div>
                        <div className="dropdown"><ul className="dropdown-menu dropdown-menu-right"><li><a data-func="editTitle" data-tooltip="Edit title" data-toggle="tooltip" data-title="Edit title" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-pencil"></i><span className="control-title">Edit title</span></a></li><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-move"></i><span className="control-title">Unpin</span></a></li><li><a data-func="reload" data-tooltip="Reload" data-toggle="tooltip" data-title="Reload" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-reload"></i><span className="control-title">Reload</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-minus"></i><span className="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-fullscreen"></i><span className="control-title">Fullscreen</span></a></li><li><a data-func="close" data-tooltip="Close" data-toggle="tooltip" data-title="Close" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-close"></i><span className="control-title">Close</span></a></li></ul><div className="dropdown-toggle" data-toggle="dropdown"><span className="panel-control-icon glyphicon glyphicon-cog"></span></div></div></div>
                        <div className="panel-body">
                           {/* <div className="google-maps">
                              <iframe src="https://maps.google.co.uk/maps?f=q&amp,source=s_q&amp,hl=en&amp,geocode=&amp,q=15+Springfield+Way,+Hythe,+CT21+5SH&amp,aq=t&amp,sll=52.8382,-2.327815&amp,sspn=8.047465,13.666992&amp,ie=UTF8&amp,hq=&amp,hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&amp,t=m&amp,z=14&amp,ll=51.077429,1.121722&amp,output=embed"></iframe>
                           </div> */}
                        </div>
                     </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="WdkSN1KMCZ">
                     <div className="panel panel-bd lobidrag lobipanel lobipanel-sortable" data-inner-id="WdkSN1KMCZ" data-index="0">
                        <div className="panel-heading ui-sortable-handle">
                           <div className="panel-title" style={{"maxWidth": "calc(100% - 180px)"}}>
                              <h4>Calender</h4>
                           </div>
                        <div className="dropdown"><ul className="dropdown-menu dropdown-menu-right"><li><a data-func="editTitle" data-tooltip="Edit title" data-toggle="tooltip" data-title="Edit title" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-pencil"></i><span className="control-title">Edit title</span></a></li><li><a data-func="unpin" data-tooltip="Unpin" dat   a-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-move"></i><span className="control-title">Unpin</span></a></li><li><a data-func="reload" data-tooltip="Reload" data-toggle="tooltip" data-title="Reload" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-reload"></i><span className="control-title">Reload</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-minus"></i><span className="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-fullscreen"></i><span className="control-title">Fullscreen</span></a></li><li><a data-func="close" data-tooltip="Close" data-toggle="tooltip" data-title="Close" data-placement="bottom" data-original-title="" title=""><i className="panel-control-icon ti-close"></i><span className="control-title">Close</span></a></li></ul><div className="dropdown-toggle" data-toggle="dropdown"><span className="panel-control-icon glyphicon glyphicon-cog"></span></div></div></div>
                      
                        <div className="panel panel-bd">
                           <div className="panel-body">
                              <div className="monthly_calender">
                                 <div className="monthly monthly-locale-en monthly-locale-en-us" id="m_calendar"><div className="monthly-header"><div className="monthly-header-title"><a href="#" className="monthly-header-title-date" onclick="return false">Apr 2024</a></div><a href="#" className="monthly-prev"></a><a href="#" className="monthly-next"></a></div><div className="monthly-day-title-wrap"><div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div></div><div className="monthly-day-wrap"><div className="monthly-week"><div className="m-d monthly-day-blank"><div className="monthly-day-number"></div></div><div className="m-d monthly-day monthly-day-event" data-number="1"><div className="monthly-day-number">1</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="2"><div className="monthly-day-number">2</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="3"><div className="monthly-day-number">3</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="4"><div className="monthly-day-number">4</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="5"><div className="monthly-day-number">5</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="6"><div className="monthly-day-number">6</div><div className="monthly-indicator-wrap"></div></div></div><div className="monthly-week"><div className="m-d monthly-day monthly-day-event" data-number="7"><div className="monthly-day-number">7</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="8"><div className="monthly-day-number">8</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="9"><div className="monthly-day-number">9</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="10"><div className="monthly-day-number">10</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="11"><div className="monthly-day-number">11</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="12"><div className="monthly-day-number">12</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="13"><div className="monthly-day-number">13</div><div className="monthly-indicator-wrap"></div></div></div><div className="monthly-week"><div className="m-d monthly-day monthly-day-event" data-number="14"><div className="monthly-day-number">14</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="15"><div className="monthly-day-number">15</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="16"><div className="monthly-day-number">16</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="17"><div className="monthly-day-number">17</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="18"><div className="monthly-day-number">18</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="19"><div className="monthly-day-number">19</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="20"><div className="monthly-day-number">20</div><div className="monthly-indicator-wrap"></div></div></div><div className="monthly-week"><div className="m-d monthly-day monthly-day-event" data-number="21"><div className="monthly-day-number">21</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="22"><div className="monthly-day-number">22</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="23"><div className="monthly-day-number">23</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="24"><div className="monthly-day-number">24</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="25"><div className="monthly-day-number">25</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="26"><div className="monthly-day-number">26</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="27"><div className="monthly-day-number">27</div><div className="monthly-indicator-wrap"></div></div></div><div className="monthly-week"><div className="m-d monthly-day monthly-day-event" data-number="28"><div className="monthly-day-number">28</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event" data-number="29"><div className="monthly-day-number">29</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day monthly-day-event monthly-today" data-number="30"><div className="monthly-day-number">30</div><div className="monthly-indicator-wrap"></div></div><div className="m-d monthly-day-blank"><div className="monthly-day-number"></div></div><div className="m-d monthly-day-blank"><div className="monthly-day-number"></div></div><div className="m-d monthly-day-blank"><div className="monthly-day-number"></div></div><div className="m-d monthly-day-blank"><div className="monthly-day-number"></div></div></div></div><div className="monthly-event-list"><div className="monthly-list-item" id="m_calendarday1" data-number="1"><div className="monthly-event-list-date">Mon<br/>1</div></div><div className="monthly-list-item" id="m_calendarday2" data-number="2"><div className="monthly-event-list-date">Tue<br/>2</div></div><div className="monthly-list-item" id="m_calendarday3" data-number="3"><div className="monthly-event-list-date">Wed<br/>3</div></div><div className="monthly-list-item" id="m_calendarday4" data-number="4"><div className="monthly-event-list-date">Thu<br/>4</div></div><div className="monthly-list-item" id="m_calendarday5" data-number="5"><div className="monthly-event-list-date">Fri<br/>5</div></div><div className="monthly-list-item" id="m_calendarday6" data-number="6"><div className="monthly-event-list-date">Sat<br/>6</div></div><div className="monthly-list-item" id="m_calendarday7" data-number="7"><div className="monthly-event-list-date">Sun<br/>7</div></div><div className="monthly-list-item" id="m_calendarday8" data-number="8"><div className="monthly-event-list-date">Mon<br/>8</div></div><div className="monthly-list-item" id="m_calendarday9" data-number="9"><div className="monthly-event-list-date">Tue<br/>9</div></div><div className="monthly-list-item" id="m_calendarday10" data-number="10"><div className="monthly-event-list-date">Wed<br/>10</div></div><div className="monthly-list-item" id="m_calendarday11" data-number="11"><div className="monthly-event-list-date">Thu<br/>11</div></div><div className="monthly-list-item" id="m_calendarday12" data-number="12"><div className="monthly-event-list-date">Fri<br/>12</div></div><div className="monthly-list-item" id="m_calendarday13" data-number="13"><div className="monthly-event-list-date">Sat<br/>13</div></div><div className="monthly-list-item" id="m_calendarday14" data-number="14"><div className="monthly-event-list-date">Sun<br/>14</div></div><div className="monthly-list-item" id="m_calendarday15" data-number="15"><div className="monthly-event-list-date">Mon<br/>15</div></div><div className="monthly-list-item" id="m_calendarday16" data-number="16"><div className="monthly-event-list-date">Tue<br/>16</div></div><div className="monthly-list-item" id="m_calendarday17" data-number="17"><div className="monthly-event-list-date">Wed<br/>17</div></div><div className="monthly-list-item" id="m_calendarday18" data-number="18"><div className="monthly-event-list-date">Thu<br/>18</div></div><div className="monthly-list-item" id="m_calendarday19" data-number="19"><div className="monthly-event-list-date">Fri<br/>19</div></div><div className="monthly-list-item" id="m_calendarday20" data-number="20"><div className="monthly-event-list-date">Sat<br/>20</div></div><div className="monthly-list-item" id="m_calendarday21" data-number="21"><div className="monthly-event-list-date">Sun<br/>21</div></div><div className="monthly-list-item" id="m_calendarday22" data-number="22"><div className="monthly-event-list-date">Mon<br/>22</div></div><div className="monthly-list-item" id="m_calendarday23" data-number="23"><div className="monthly-event-list-date">Tue<br/>23</div></div><div className="monthly-list-item" id="m_calendarday24" data-number="24"><div className="monthly-event-list-date">Wed<br/>24</div></div><div className="monthly-list-item" id="m_calendarday25" data-number="25"><div className="monthly-event-list-date">Thu<br/>25</div></div><div className="monthly-list-item" id="m_calendarday26" data-number="26"><div className="monthly-event-list-date">Fri<br/>26</div></div><div className="monthly-list-item" id="m_calendarday27" data-number="27"><div className="monthly-event-list-date">Sat<br/>27</div></div><div className="monthly-list-item" id="m_calendarday28" data-number="28"><div className="monthly-event-list-date">Sun<br/>28</div></div><div className="monthly-list-item" id="m_calendarday29" data-number="29"><div className="monthly-event-list-date">Mon<br/>29</div></div><div className="monthly-list-item monthly-today" id="m_calendarday30" data-number="30"><div className="monthly-event-list-date">Tue<br/>30</div></div></div></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
          
         </div>
        
         <footer className="main-footer">
            <strong>Copyright © 2016-2017 <a href="#">Thememinister</a>.</strong> All rights reserved.
         </footer>
      </div>
   

    </>
  )
}

export default AdminPage