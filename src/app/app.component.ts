import { Component, OnInit } from '@angular/core';
import { Logger, LogService } from 'ng-debug-levels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-debug-levels-dev';

  private readonly logger: Logger;

  constructor(private readonly logService: LogService) {
    this.logger = this.logService.createLogger('appComponent');
  }

  ngOnInit(): void {
    this.logger.info('test');
  }
}
