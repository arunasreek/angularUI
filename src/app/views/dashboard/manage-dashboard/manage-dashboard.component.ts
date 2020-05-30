import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardItem } from '../../../enum';
import { DomSanitizer } from '@angular/platform-browser';
import { AppComponent } from '../../../app.component';
import { DashboardService } from 'src/app/services';
import { getLoggedInOrganizationId, getLoggedInUserId } from '../../../utils/index'

@Component({
  selector: 'app-manage-dashboard',
  templateUrl: './manage-dashboard.component.html',
  styleUrls: ['./manage-dashboard.component.css']
})
export class ManageDashboardComponent implements OnInit {
  dashboard_id: number;
  dashboardURL: any;
  dashboard_Name: string;
  backToApproval: boolean;
  dashboard: string;
  DashboardItem = DashboardItem;

  constructor(private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router,
    public myapp: AppComponent,
    private dashboardService: DashboardService) {

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    this.dashboard_id = parseInt(this
      .activatedRoute
      .snapshot
      .paramMap
      .get("id"));

    console.log(this.dashboard_id);

    this.getTableauURL(this.dashboard_id);

    this.dashboardURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.dashboard);
    console.log(this.dashboard_id, this.dashboardURL)
  }

  getDashboardUrl(id: number) {
    switch (id) {
      case DashboardItem.Executive_Dashboard:
        this.dashboard_Name = 'Executive Dashboard';
        return 'https://bit.analytics-hub.com/t/CCPG/views/Executive-PostMMM/ExecutiveDashbaord?:embed=yes&:display_count=no&:showVizHome=no';
      case DashboardItem.Media_Effectiveness:
        this.dashboard_Name = 'Media Effectiveness';
        return 'https://bit.analytics-hub.com/t/CCPG/views/MediaEffectiveness-PostMMM/MediaEffectiveness?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no';
      case DashboardItem.Trend_Analysis:
        this.dashboard_Name = 'Trend Analysis';
        return 'https://bit.analytics-hub.com/t/CCPG/views/TrendAnalysis-PostMMM/TrendAnalysis?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no';

      case DashboardItem.Volume_Contribution:
        this.dashboard_Name = 'Volume Contribution';
        return 'https://bit.analytics-hub.com/t/CCPG/views/WaterfallAnalysis/VolumeDistribution?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no';

      case DashboardItem.Data_Summary:

        this.dashboard_Name = 'Data Summary';
        return 'https://bit.analytics-hub.com/t/CCPG/views/DataSummary-PostMMM/DataSummary?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no';

      case DashboardItem.DataReports:

        this.dashboard_Name = 'Recently Uploaded File';
        this.backToApproval = true;
        return 'https://bit.analytics-hub.com/t/CCPG/views/Pre-ETLDashboardFinancialsfile_v2018_1_V03/PreETLCheck?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no#1';
      case DashboardItem.Financial_Dashboard:

        this.dashboard_Name = 'Executive Dashboard';
        this.backToApproval = true;
        return 'https://bit.analytics-hub.com/t/CCPG/views/Executive-PostMMM/ExecutiveDashbaord?:embed=yes&:display_count=no&:showVizHome=no';

      default:
        break;
    }
  }

  getTableauURL(id: number) {
    this.dashboardService.getTableauUrlByOrgId(getLoggedInOrganizationId(null),
      getLoggedInUserId(), id).subscribe((data: any) => {
        if (data.success) {
          this.dashboard_Name = data.result.userDashboardURL.dashboardName;
          this.backToApproval = true;
          this.dashboard = data.result.userDashboardURL.dashboardURL;
        }
      })
  }

  backClick() {
    this.router.navigate(['/approvals']);
  }

  downloadFile() {
    this.dashboardService.downloadETLData(getLoggedInOrganizationId(null)).subscribe((data: any) => {
      if (data.success) {
        //http://104.211.214.19:8081/EtlOutput/Clorox/HomeCare/2019_Q2/Clorox_HomeCare_2019_Q2.csv
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', data.filePath);
        var filename = data.filePath.substring(data.filePath.lastIndexOf('\\')+1);
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
    });

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.myapp.isNavbarShow = true;
    });
  }


}
