import { DefaultPortModel } from './DefaultPortModel';
import { AbstractModelFactory } from '@bits_devel/react-canvas-core';
import { DiagramEngine } from '@bits_devel/react-diagrams-core';

export class DefaultPortFactory extends AbstractModelFactory<DefaultPortModel, DiagramEngine> {
	constructor() {
		super('default');
	}

	generateModel(): DefaultPortModel {
		return new DefaultPortModel({
			name: 'unknown'
		});
	}
}
