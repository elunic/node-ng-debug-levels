# `ng-debug-levels`

- [`ng-debug-levels`](#ng-debug-levels)
  - [Installation](#installation)
  - [Quickstart](#quickstart)

## Installation

```bash
$ npm i -D ng-debug-levels
```

## Quickstart

`app.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LogModule } from 'ng-debug-levels';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

`app.component.ts`

```typescript
import { Component, OnInit } from '@angular/core';
import { Logger, LogService } from 'ng-debug-levels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly logger: Logger;

  constructor(private readonly logService: LogService) {
    this.logger = this.logService.createLogger('appComponent');
  }

  ngOnInit(): void {
    this.logger.info('test');
  }
}
```
