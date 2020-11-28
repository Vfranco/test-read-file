import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { ChatMessages } from 'src/app/core/models/chat.interface';
import { ChatReaderService } from 'src/app/core/services/chat-reader.service';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	selectedFile: any;
	chatMessages: Array<ChatMessages> = [];
	processing: boolean = false;

	constructor(private chat: ChatReaderService) { }

	ngOnInit() {

	}

	startProcessFile(event) {
		this.selectedFile = event.target.files[0];
		this.processing = true;

		this.chat.readFileContent(this.selectedFile).then((response: string) => {
			this.getDataFromProcess(response.split('\n'));
			this.processing = false;
		});
	}

	getDataFromProcess(data: Array<string>) {
		data.forEach(element => {
			this.chatMessages.push(JSON.parse(element));
		});
	}
}
