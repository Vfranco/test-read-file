import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CoreModule } from '../core/core.module';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
	declarations: [IndexComponent, MessagesComponent],
	imports: [
		CommonModule,
		CoreModule
	],
	exports: [IndexComponent]
})
export class MainModule { }
