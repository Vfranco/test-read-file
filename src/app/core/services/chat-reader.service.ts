import { Injectable } from '@angular/core';

@Injectable()
export class ChatReaderService {

	constructor() { }

	readFileContent(file: any): Promise<any> {
		return new Promise<string>((resolve, reject) => {
			if (!file)
				resolve('');

			const reader = new FileReader();
			reader.onload = (event) => {
				const result = reader.result.toString().trim();
				resolve(result);
			}

			reader.readAsText(file);
		});
	}
}
