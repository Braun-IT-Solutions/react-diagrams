import * as React from 'react';
import { DefaultLabelModel } from './DefaultLabelModel';
import { DefaultLabelWidget } from './DefaultLabelWidget';
import { AbstractReactFactory } from '@bits_devel/react-canvas-core';
import { DiagramEngine } from '@bits_devel/react-diagrams-core';
import { JSX } from 'react';

/**
 * @author Dylan Vorster
 */
export class DefaultLabelFactory extends AbstractReactFactory<DefaultLabelModel, DiagramEngine> {
	constructor() {
		super('default');
	}

	generateReactWidget(event): JSX.Element {
		return <DefaultLabelWidget model={event.model} />;
	}

	generateModel(event): DefaultLabelModel {
		return new DefaultLabelModel();
	}
}
