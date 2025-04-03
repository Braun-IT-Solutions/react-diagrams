import * as React from 'react';
import { DefaultNodeModel } from './DefaultNodeModel';
import { DefaultNodeWidget } from './DefaultNodeWidget';
import { AbstractReactFactory } from '@bits_devel/react-canvas-core';
import { DiagramEngine } from '@bits_devel/react-diagrams-core';
import { JSX } from 'react';

export class DefaultNodeFactory extends AbstractReactFactory<DefaultNodeModel, DiagramEngine> {
	constructor() {
		super('default');
	}

	generateReactWidget(event): JSX.Element {
		return <DefaultNodeWidget engine={this.engine} node={event.model} />;
	}

	generateModel(event): DefaultNodeModel {
		return new DefaultNodeModel();
	}
}
