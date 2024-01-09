# `ng-debug-levels`

- [`ng-debug-levels`](#ng-debug-levels)
  - [Installation](#installation)
  - [Quickstart](#quickstart)
  - [License](#license)

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

## License

MIT License

Copyright (c) 2019-2024 elunic AG/William Hefter <wh@elunic.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
