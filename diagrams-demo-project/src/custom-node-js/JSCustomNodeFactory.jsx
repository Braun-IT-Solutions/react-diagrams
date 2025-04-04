import * as React from 'react';
import { JSCustomNodeModel } from './JSCustomNodeModel';
import { JSCustomNodeWidget } from './JSCustomNodeWidget';
import { AbstractReactFactory } from '@bits_devel/react-diagrams';

export class JSCustomNodeFactory extends AbstractReactFactory {
	constructor() {
		super('js-custom-node');
	}

	generateModel(event) {
		return new JSCustomNodeModel();
	}

	generateReactWidget(event) {
		return <JSCustomNodeWidget engine={this.engine} node={event.model} />;
	}
}
